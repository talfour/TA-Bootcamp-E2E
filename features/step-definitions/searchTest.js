const { Given, When, Then } = require("@wdio/cucumber-framework");

Given("Enter the word {string} in the search bar top middle", async (word) => {
  const searchBar = await $(".header2021-search-box > input:nth-child(1)");
  await expect(searchBar).toBeExisting();
  await searchBar.setValue(word);
});

When("Click the search", async () => {
  const searchBtn = await $("button.ico");
  await expect(searchBtn).toBeDisplayed()
  await searchBtn.click()
});

Then("At least one item appears", async () => {
  const minimum_items_to_find = 1;
  const arrayOfItemsFound = $$(".item-cell");
  await expect(arrayOfItemsFound).toBeElementsArrayOfSize({
    gte: minimum_items_to_find,
  });
});
