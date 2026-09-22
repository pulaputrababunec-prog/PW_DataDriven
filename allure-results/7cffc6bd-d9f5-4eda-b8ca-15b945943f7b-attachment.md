# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: usingExcleData.spec.ts >> ERp Management Module >> Stock With Excel data Thrd Customer
- Location: tests\usingExcleData.spec.ts:72:11

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('button', { name: 'Login' })
    - locator resolved to <button type="submit" id="btnsubmit" name="btnsubmit" class="btn btn-primary ewButton">Login</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not stable
    - retrying click action
    - waiting 20ms
    - waiting for element to be visible, enabled and stable

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
  26 |         await this.page.goto(Url)
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
> 38 |         await this.LoginButton.click()
     |                                ^ Error: locator.click: Target page, context or browser has been closed
  39 |         await expect(this.HomePageIdentifier).toBeVisible()
  40 | 
  41 |     }
  42 | 
  43 | }
```