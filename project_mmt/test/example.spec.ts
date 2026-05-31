import { test, expect } from '../src/fixture/pageFixtures';

test.describe('Playwright Homepage', () => {
    test('should have correct title', async ({ homePage }) => {
        await homePage.open();
        const title = await homePage.getTitle();
        expect(title).toContain('Playwright');
    });

    test('should display logo', async ({ homePage }) => {
        await homePage.open();
        const isVisible = await homePage.isLogoVisible();
        expect(isVisible).toBeTruthy();
    });

    test('should navigate to Getting Started page', async ({ homePage, gettingStartedPage }) => {
        await homePage.open();
        await homePage.clickGetStarted();
        const isHeadingVisible = await gettingStartedPage.isInstallationHeadingVisible();
        expect(isHeadingVisible).toBeTruthy();
    });
});