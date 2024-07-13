import { test, expect } from '../fixtures/base';
import AxeBuilder from '@axe-core/playwright'; 

test.describe('Accessibility Testing', () => { 
  test.fail('Accessibility issues - needs development work', async ({ homePage, page }) => {
    const accessibilityScanResults = await new AxeBuilder({ page })
    .disableRules(['color-contrast'])
    .analyze();

    expect(accessibilityScanResults.violations).toEqual([]); // 5
  });
});
