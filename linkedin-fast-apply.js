const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
puppeteer.use(StealthPlugin());
require("dotenv").config();
let EMAIL = process.env.EMAIL_ID;
let PASS = process.env.PASSWORD;

const { executablePath } = require("puppeteer");

(async () => {
  // Launch the browser
  const browser = await puppeteer.launch({
    headless: false, // Change it to false if you want to see the bot working on local machine
    executablePath: executablePath(),
  });
  const page = await browser.newPage();

  // Setup UserAgent and HTTPHeaders to avoid Bot Detection
  await page.setUserAgent(
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.20 Safari/537.36"
  );
  await page.setExtraHTTPHeaders({
    "Accept-Language": "en-US,en;q=0.9",
  });

  // Go to LinkedIn Login Page
  await page.goto("https://www.linkedin.com/login");

  // Enter the email id and password in respective fields
  await page.waitForSelector("input#username");
  await page.type("input#username", EMAIL);

  await page.waitForSelector("input#password");
  await page.type("input#password", PASS);

  // Click on the login button
  await page.click("button.btn__primary--large.from__button--floating");

  // Wait for page load after login
  await page.waitForNavigation();

  // Go to Naukri.com Profile Page
  await page.goto("https://www.linkedin.com/jobs/jam/", {
    waitUntil: "load",
    timeout: 0,
  });

  //   // Click on Resume Headline Edit button
  //   await page.waitForSelector("#lazyResumeHead span.edit.icon");
  //   await page.click("#lazyResumeHead span.edit.icon");

  //   // Select, Copy and Paste back the Headline text
  //   await page.waitForSelector("#resumeHeadlineTxt");
  //   const currentText = await page.$eval("#resumeHeadlineTxt", (el) => el.value);
  //   const textarea = await page.$("#resumeHeadlineTxt");
  //   await textarea.click({ clickCount: 3 });
  //   await textarea.press("Backspace");
  //   await textarea.type(currentText);

  //   // Click on the save button
  //   await page.click("div.row.form-actions div.action.s12 button.btn-dark-ot");

  // Close the browser
  //   await browser.close();
})();
