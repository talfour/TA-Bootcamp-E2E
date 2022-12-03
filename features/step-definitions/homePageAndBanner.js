const { Given, When, Then } = require("@wdio/cucumber-framework");

Given("I navigate to the newegg page", async () => {
  await browser.url(`https://www.newegg.com/`);
});

When("I see promo banner", async () => {
  try {
    await $(".modal-content").waitForDisplayed();
  } catch (error) {
    console.log(`promo banner was not displayed ${error}`);
  }
});

Then("I close promo banner", async () => {
  (await $(".modal-content").isDisplayed()) && (await $(".close").click());
  await expect($(".modal-content")).not.toBeDisplayed();
});
