const { Given, When, Then } = require("@wdio/cucumber-framework");

Given("Open Today's Best Deals tab", async () => {
  await $("#trendingBanner_720202").click();
});

When("Click on the Internet shop logo top right corner", async () => {
  const logoBtn = await $(".header2021-logo-img");
  await expect(logoBtn).toBeExisting();
  await logoBtn.click();
});

Then("I am on the main page", async () => {
  const url = await browser.getUrl();
  await expect(url).toBe("https://www.newegg.com/");
});
