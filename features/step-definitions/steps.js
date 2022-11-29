const { Given, When, Then } = require("@wdio/cucumber-framework");

Given("I navigate to the newegg page", async () => {
  await browser.url(`https://www.newegg.com/`);
});

When("I see promo banner", async () => {
  try {
    await browser.waitUntil(async () => {
      return $(".modal-content").isDisplayed();
    }, 2000);
  } catch (error) {
    console.log(`promo banner was not displayed ${error}`);
  }
});

Then("I close promo banner", async () => {
  (await $(".modal-content").isDisplayed()) && (await $(".close").click());
  await expect($(".modal-content")).not.toBeDisplayed();
});

Given("Enter the word {string} in the search bar top middle", async (word) => {
  const searchBar = await $(".header2021-search-box > input:nth-child(1)");
  await expect(searchBar).toBeExisting();
  await searchBar.setValue(word);
});

When("Click the search", async () => {
  await $("button.ico").click();
});

Then("At least one item appears", async () => {
  const MINIMUM_ITEMS_FOUND = 1;
  const arrayOfItemsFound = $$(".item-cell");
  await expect(arrayOfItemsFound).toBeElementsArrayOfSize({
    gte: MINIMUM_ITEMS_FOUND,
  });
});

Given("Open {string} tab", async (tab) => {
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
