# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: usingExcleData.spec.ts >> ERp Management Module >> Stock Test Fourth Category 4
- Location: tests\usingExcleData.spec.ts:91:14

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "http://webapp.qedgetech.com/", waiting until "load"

```

# Test source

```ts
  1  | import { expect, Locator, Page } from "@playwright/test";
  2  | 
  3  | export class AdminLoginPage{
  4  |     //declare properties and Locators for login
  5  |     page:Page
  6  |     readonly UsernameInput:Locator
  7  |     readonly PassWordInput:Locator
  8  |     readonly LoginButton: Locator
  9  |     HomePageIdentifier : Locator
  10 | 
  11 |     //create constructor to initilize values for properties
  12 | 
  13 |     constructor(page:Page)
  14 |     {
  15 |         this.page =page
  16 |         this.UsernameInput = page.getByRole('textbox',{name:'User Name'})
  17 |         this.PassWordInput =page.getByRole('textbox',{name:'Password'})
  18 |         this.LoginButton = page.getByRole('button',{name:'Login'})
  19 |         this.HomePageIdentifier = page.locator('#ewBreadcrumb2')
  20 |     }
  21 | 
  22 |     //write method for action
  23 | 
  24 |     async launchUrl(Url:string)
  25 |     {
> 26 |         await this.page.goto(Url)
     |                         ^ Error: page.goto: Target page, context or browser has been closed
  27 |     }
  28 | 
  29 |     //method for login
  30 |     
  31 |     async ERPLogin(user:string,pass:string)
  32 |     {
  33 |         await this.UsernameInput.waitFor()
  34 |         await this.UsernameInput.clear()
  35 |         await this.UsernameInput.fill(user)
  36 |         await this.PassWordInput.clear()
  37 |         await this.PassWordInput.fill(pass)
  38 |         await this.LoginButton.click()
  39 |         await expect(this.HomePageIdentifier).toBeVisible()
  40 | 
  41 |     }
  42 | 
  43 | }
```