const puppeteer = require("puppeteer");
require("dotenv").config();
let EMAIL = process.env.EMAIL_ID;
let PASS = process.env.PASSWORD;

(async () => {
  // Launch the browser
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  // Go to Naukri.com Login Page
  await page.goto("https://login.naukri.com/nLogin/Login.php");

  // Enter the email id in email field
  await page.waitForSelector("input#usernameField");
  await page.type("input#usernameField", EMAIL);

  // Enter the password in password field
  await page.waitForSelector("input#passwordField");
  await page.type("input#passwordField", PASS);

  // Click on the login button
  await page.click(
    "button.waves-effect.waves-light.btn-large.btn-block.btn-bold.blue-btn.textTransform"
  );

  // Wait for page load after login
  await page.waitForNavigation();

  // Go to Naukri.com Profile Page
  await page.goto("https://www.naukri.com/mnjuser/profile");

  // Click on Resume Headline Edit button
  await page.waitForSelector("#lazyResumeHead span.edit.icon");
  await page.click("#lazyResumeHead span.edit.icon");

  // Select, Copy and Paste back the Headline text
  await page.waitForSelector("#resumeHeadlineTxt");
  const currentText = await page.$eval("#resumeHeadlineTxt", (el) => el.value);
  const textarea = await page.$("#resumeHeadlineTxt");
  await textarea.click({ clickCount: 3 });
  await textarea.press("Backspace");
  await textarea.type(currentText);

  // Click on the save button
  await page.click("div.row.form-actions div.action.s12 button.btn-dark-ot");

  // Close the browser
  await browser.close();
})();
