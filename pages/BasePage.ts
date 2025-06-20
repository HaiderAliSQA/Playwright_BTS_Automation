export class BasePage {
    constructor(protected page) {}
    async waitForPageLoad() {
        await this.page.waitForLoadState('networkidle');
    }
} 