const { Given, When, Then } = require("@wdio/cucumber-framework");
Given("I navigate to the newgg page", async () => {
  await browser.url(`https://www.newegg.com/`);
});

When("I see promo banner", async () => {
  await browser.waitUntil(async () => {
    return $(".modal-content").isDisplayed();
  }, 2000, "Promo banner was not displayed");
});

Then("I close promo banner", async () => {
  await $(".close").click();
  await expect($(".modal-content")).not.toBeDisplayed();
});
