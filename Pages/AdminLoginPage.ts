import { expect, Locator, Page } from "@playwright/test";

export class AdminLoginPage{
    //declare properties and Locators for login
    page:Page
    readonly UsernameInput:Locator
    readonly PassWordInput:Locator
    readonly LoginButton: Locator
    HomePageIdentifier : Locator

    //create constructor to initilize values for properties

    constructor(page:Page)
    {
        this.page =page
        this.UsernameInput = page.getByRole('textbox',{name:'User Name'})
        this.PassWordInput =page.getByRole('textbox',{name:'Password'})
        this.LoginButton = page.getByRole('button',{name:'Login'})
        this.HomePageIdentifier = page.locator('#ewBreadcrumb2')
    }

    //write method for action

    async launchUrl(Url:string)
    {
        await this.page.goto(Url)
    }

    //method for login
    
    async ERPLogin(user:string,pass:string)
    {
        await this.UsernameInput.waitFor()
        await this.UsernameInput.clear()
        await this.UsernameInput.fill(user)
        await this.PassWordInput.clear()
        await this.PassWordInput.fill(pass)
        await this.LoginButton.click()
        await expect(this.HomePageIdentifier).toBeVisible()

    }

}