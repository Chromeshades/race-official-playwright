import { test, expect } from '../fixtures/base';

test('Page Loads', async ({ homePage }) => {
  await expect(homePage.page, "Page title is correct").toHaveTitle(/R.A.C.E./);
});

test('The navigation bar links are present and correct', async ({ homePage }) => {
  // Get the locators from the page object
  const locators = homePage.getNavigationLocators();

  // Define your expected hrefs
  const expectedHrefs: Record<string, string | RegExp> = {
    homeLink: 'https://yellow.race.social/',
    eventsLink: /index\.php\/events\//,
    shopsServicesLink: /index\.php\/shops-services\//,
    partsLink: /index\.php\/parts\//,
    forumLink: /index\.php\/community\//,
    storeLink: /index\.php\/store\//,
    loginButton: /index\.php\/login\//,
  };

  // Loop through the locators and assert each link/button
  for (const [linkName, locator] of Object.entries(locators)) {
    await expect(locator, `${locator} is visible`).toBeVisible();
    await expect(locator, `${locator} URI is correct`).toHaveAttribute('href', expectedHrefs[linkName as keyof typeof expectedHrefs]);
  }
});