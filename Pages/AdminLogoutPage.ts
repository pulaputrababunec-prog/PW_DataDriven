import { Locator, Page } from "@playwright/test";

export class AdminLogoutPage{
    page:Page
    readonly clickLogout:Locator
    constructor(page:Page)
    {
        this.page =page
        this.clickLogout = page.locator('li#mi_logout')
    }
    async ERpLogout()
    {
        await this.clickLogout.waitFor()
        await this.clickLogout.click()
    }
}