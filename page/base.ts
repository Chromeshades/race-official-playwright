import { type Locator, type Page } from '@playwright/test';

export class BasePage {
    /** The playwright page */
    page: Page;
    /** The navigation bar parent locator */
    navBar: Locator;

  constructor(page: Page) {
    this.page = page;
    this.navBar = this.page.locator(".elementor-nav-menu--main")


  }


  async goto() {
    await this.page.goto('/');
  }

  getNavigationLocators() {
    return {
      homeLink: this.navBar.getByRole('link', { name: 'Home' }),
      eventsLink: this.navBar.getByRole('link', { name: 'Events' }),
      shopsServicesLink: this.navBar.getByRole('link', { name: 'Shops/Services' }),
      partsLink: this.navBar.getByRole('link', { name: 'Parts' }),
      forumLink: this.navBar.getByRole('link', { name: 'Forum' }),
      storeLink: this.navBar.getByRole('link', { name: 'Store' }),
      loginButton: this.page.getByRole('link', { name: 'Login' }),
    };
  }
}
