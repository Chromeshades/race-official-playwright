import { test as base } from '@playwright/test';
import { BasePage } from '../page/base';

// Declare the types of your fixtures.
type MyFixtures = {
    /** Base home page fixture */
    homePage: BasePage;
  };

// Extend base test by providing "homePage".
// This new "test" can be used in multiple test files, and each of them will get the fixtures.
export const test = base.extend<MyFixtures>({
  homePage: async ({ page }, use) => {
    const homePage = new BasePage(page);
    await homePage.goto();
    await use(homePage);
  },
});

export { expect } from '@playwright/test';