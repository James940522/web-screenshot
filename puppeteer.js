const puppeteer = require("puppeteer")

const deviceInfos = [
  {
    name: "iPhone 12",
    userAgent:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1",
    viewport: {
      width: 390,
      height: 844,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false,
    },
  },
  {
    name: "iPhone 12 landscape",
    userAgent:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1",
    viewport: {
      width: 844,
      height: 390,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true,
    },
  },
  {
    name: "Galaxy S9+",
    userAgent:
      "Mozilla/5.0 (Linux; Android 8.0.0; SM-G965U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.111 Mobile Safari/537.36",
    viewport: {
      width: 320,
      height: 658,
      deviceScaleFactor: 4.5,
      isMobile: true,
      hasTouch: true,
      isLandscape: false,
    },
  },
  {
    name: "Galaxy Tab S4 landscape",
    userAgent:
      "Mozilla/5.0 (Linux; Android 8.1.0; SM-T837A) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.80 Safari/537.36",
    viewport: {
      width: 1138,
      height: 712,
      deviceScaleFactor: 2.25,
      isMobile: true,
      hasTouch: true,
      isLandscape: true,
    },
  },
]

const url = "https://www.naver.com"

const getUrlScreenshot = async (pageUrl, device) => {
  const browser = await puppeteer.launch()

  const page = await browser.newPage()

  await page.emulate(device)
  console.log(`${device.name} 접속...`)
  await page.goto(pageUrl)

  await page.screenshot({
    path: `${device.name}-${device.viewport.width}-${device.viewport.height}.jpg`,
    fullPage: true,
  })

  await browser.close()
}

;(async () => {
  console.log("테스트 시작....")
  for (let i = 0; i < deviceInfos.length; i += 1) {
    await getUrlScreenshot(url, deviceInfos[i])
  }
})()

// async function autoScroll(page: any) {
//   await page.evaluate(async () => {
//     await new Promise<void>((resolve, reject) => {
//       var totalHeight = 0
//       var distance = 100
//       var timer = setInterval(() => {
//         var scrollHeight = document.body.scrollHeight
//         window.scrollBy(0, distance)
//         totalHeight += distance

//         if (totalHeight >= scrollHeight - window.innerHeight) {
//           clearInterval(timer)
//           resolve()
//         }
//         console.log(scrollHeight, totalHeight)
//       }, 100)
//     })
//   })
// }
