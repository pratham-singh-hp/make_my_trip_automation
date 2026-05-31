import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class GettingStartedPage extends BasePage {
    // Locators
    readonly installationHeading: Locator;
    readonly nodeJsLink: Locator;
    readonly installCommand: Locator;

    constructor(page: Page) {
        super(page);
        this.installationHeading = page.getByRole('heading', { name: 'Installation' });
        this.nodeJsLink = page.getByRole('link', { name: 'Installing Node.js' });
        this.installCommand = page.locator('code', { hasText: 'npm init playwright@latest' });
    }

    async isInstallationHeadingVisible(): Promise<boolean> {
        return await this.installationHeading.isVisible();
    }

    async getInstallationHeadingText(): Promise<string | null> {
        return await this.installationHeading.textContent();
    }
}