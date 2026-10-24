const fs = require('fs');
const path = require('path');

const HTML_FILES = ['index.html', 'category.html', 'product.html', 'profile.html', 'about.html'];
let hasError = false;

console.log('==> Starting HTML Quality & Asset Reference Validation...\n');

HTML_FILES.forEach(filename => {
  const filePath = path.join(process.cwd(), filename);
  if (!fs.existsSync(filePath)) {
    console.error(`[FAIL] ${filename}: File does not exist!`);
    hasError = true;
    return;
  }

  const content = fs.readFileSync(filePath, 'utf8');

  // 1. DOCTYPE and HTML Root check
  if (!/<!DOCTYPE\s+html>/i.test(content)) {
    console.error(`[FAIL] ${filename}: Missing standard <!DOCTYPE html> declaration.`);
    hasError = true;
  }
  if (!/<html[^>]*lang=["']en["']/i.test(content)) {
    console.warn(`[WARN] ${filename}: Missing lang="en" on <html> tag.`);
  }

  // 2. Head, Title, Charset check
  if (!/<meta[^>]*charset=["']?utf-8["']?/i.test(content)) {
    console.error(`[FAIL] ${filename}: Missing UTF-8 charset meta tag.`);
    hasError = true;
  }
  if (!/<title>[^<]+<\/title>/i.test(content)) {
    console.error(`[FAIL] ${filename}: Missing or empty <title> tag.`);
    hasError = true;
  }

  // 3. Script & Stylesheet local reference checks
  const scriptSrcRegex = /<script[^>]+src=["']([^"']+)["']/gi;
  let match;
  while ((match = scriptSrcRegex.exec(content)) !== null) {
    const src = match[1].split('?')[0]; // strip query string
    if (!src.startsWith('http://') && !src.startsWith('https://') && !src.startsWith('//')) {
      const localScriptPath = path.join(process.cwd(), src);
      if (!fs.existsSync(localScriptPath)) {
        console.error(`[FAIL] ${filename}: Referenced local script "${src}" not found on disk!`);
        hasError = true;
      }
    }
  }

  const linkHrefRegex = /<link[^>]+rel=["']stylesheet["'][^>]+href=["']([^"']+)["']/gi;
  while ((match = linkHrefRegex.exec(content)) !== null) {
    const href = match[1].split('?')[0]; // strip query string
    if (!href.startsWith('http://') && !href.startsWith('https://') && !href.startsWith('//')) {
      const localCssPath = path.join(process.cwd(), href);
      if (!fs.existsSync(localCssPath)) {
        console.error(`[FAIL] ${filename}: Referenced local stylesheet "${href}" not found on disk!`);
        hasError = true;
      }
    }
  }

  // 4. Local image references check
  const imgSrcRegex = /<img[^>]+src=["']([^"']+)["']/gi;
  while ((match = imgSrcRegex.exec(content)) !== null) {
    const src = match[1].split('?')[0];
    if (!src.startsWith('http://') && !src.startsWith('https://') && !src.startsWith('data:') && !src.includes('${')) {
      const localImgPath = path.join(process.cwd(), src);
      if (!fs.existsSync(localImgPath)) {
        console.error(`[FAIL] ${filename}: Referenced local image "${src}" does not exist!`);
        hasError = true;
      }
    }
  }

  console.log(`[PASS] ${filename}: Structure, DOCTYPE, meta tags, and local dependencies verified.`);
});

console.log('\n======================================================');
if (hasError) {
  console.error('Validation FAILED: Please fix the errors listed above.');
  process.exit(1);
} else {
  console.log('Validation SUCCESS: All HTML pages passed strict quality checks!');
  process.exit(0);
}
