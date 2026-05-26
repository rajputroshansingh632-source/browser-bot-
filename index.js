const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });

  const page = await browser.newPage();

  async function keepAlive() {
    try {
      await page.goto("https://magmanode.com/server?id=991590", {
        waitUntil: "networkidle2"
      });

      console.log("Panel opened");
    } catch (err) {
      console.log(err);
    }
  }

  await keepAlive();

  setInterval(async () => {
    await page.reload();
    console.log("Refreshed panel");
  }, 300000);
})();
