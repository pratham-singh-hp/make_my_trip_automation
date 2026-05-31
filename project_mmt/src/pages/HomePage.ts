import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
    // Locators
    readonly logo: Locator;
    readonly getStartedLink: Locator;
    readonly searchInput: Locator;
    readonly navBar: Locator;

    constructor(page: Page) {
        super(page);
        this.logo = page.getByRole('link', { name: 'Playwright logo Playwright' });
        this.getStartedLink = page.getByRole('link', { name: 'Get started' });
        this.searchInput = page.getByRole('button', { name: 'Search' });
        this.navBar = page.locator('nav.navbar');
    }

    async open(): Promise<void> {
        await this.navigateTo('https://playwright.dev/');
    }

    async clickGetStarted(): Promise<void> {
        await this.getStartedLink.click();
    }

    async isLogoVisible(): Promise<boolean> {
        return await this.logo.isVisible();
    }

    async clickSearch(): Promise<void> {
        await this.searchInput.click();
    }
}