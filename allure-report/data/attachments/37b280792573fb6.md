# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: UsingJsonData.spec.ts >> ERP Managent Modules >> Supplier With json file Rajesh
- Location: tests\UsingJsonData.spec.ts:11:13

# Error details

```
Error: locator.waitFor: Target page, context or browser has been closed
Call log:
  - waiting for locator('button.ajs-button.btn.btn-primary') to be visible

```

```
Error: locator.waitFor: Target page, context or browser has been closed
```

# Test source

```ts
  1  | import { Locator, Page } from "@playwright/test";
  2  | 
  3  | export class AdminLogoutPage{
  4  |     page:Page
  5  |     readonly clickLogout:Locator
  6  |     constructor(page:Page)
  7  |     {
  8  |         this.page =page
  9  |         this.clickLogout = page.locator('li#mi_logout')
  10 |     }
  11 |     async ERpLogout()
  12 |     {
> 13 |         await this.clickLogout.waitFor()
     |                                ^ Error: locator.waitFor: Target page, context or browser has been closed
  14 |         await this.clickLogout.click()
  15 |     }
  16 | }
```