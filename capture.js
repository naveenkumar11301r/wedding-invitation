const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Desktop View
    await page.setViewport({ width: 1280, height: 800 });
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });
    // Click the lamp to continue to main page
    await page.click('div > div.w-16.h-12.bg-gray-800');
    // Wait for animation
    await new Promise(r => setTimeout(r, 4000));
    await page.screenshot({ path: 'laptop_view.png', fullPage: true });

    // Mobile View
    await page.setViewport({ width: 375, height: 667, isMobile: true });
    await page.reload({ waitUntil: 'networkidle2' });
    await page.click('div > div.w-16.h-12.bg-gray-800');
    await new Promise(r => setTimeout(r, 4000));
    await page.screenshot({ path: 'mobile_view.png', fullPage: true });

    await browser.close();
    console.log('Screenshots captured!');
})();
