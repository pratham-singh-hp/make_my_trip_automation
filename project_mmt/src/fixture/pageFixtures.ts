import { test as base } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { GettingStartedPage } from '../pages/GettingStartedPage';

// Declare the types of fixtures
type PageFixtures = {
    homePage: HomePage;
    gettingStartedPage: GettingStartedPage;
};

// Extend base test with page object fixtures
export const test = base.extend<PageFixtures>({
    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await use(homePage);
    },
    gettingStartedPage: async ({ page }, use) => {
        const gettingStartedPage = new GettingStartedPage(page);
        await use(gettingStartedPage);
    },
});

export { expect } from '@playwright/test';