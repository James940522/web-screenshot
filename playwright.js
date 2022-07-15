const { chromium } = require("playwright")
const url = "https://www.naver.com"
const startGetScreenshot = async () => {
  const browser = await chromium.launch()
  // Create pages, interact with UI elements, assert values
  const page = await browser.newPage()
  await page.goto(url)
  await page.screenshot({ path: "screenshot.jpg", fullPage: true })
  await browser.close()
}
startGetScreenshot()
