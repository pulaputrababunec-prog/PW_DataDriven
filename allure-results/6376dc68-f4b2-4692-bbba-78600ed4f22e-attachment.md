# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: usingExcleData.spec.ts >> ERp Management Module >> Stock With Excel data mama
- Location: tests\usingExcleData.spec.ts:72:11

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('#ewBreadcrumb2')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" locator('#ewBreadcrumb2') with timeout 5000ms
  - waiting for locator('#ewBreadcrumb2')

```

```yaml
- link "Stock Accounting":
  - /url: .
- strong: Stock Accounting
- list:
  - listitem:
    - link " Help (Categories)":
      - /url: help_categorieslist.php
  - listitem:
    - link " Login":
      - /url: login.php
- list
- radio "en" [checked]
- text: en
- radio "id"
- text: id
- button "x"
- heading "Login " [level=4]:
  - text: Login
  - link "":
    - /url: javascript:void(0);
- text: User Name
- textbox "User Name": adminmaster
- text: Password
- textbox "Password"
- text: Options 
- button "Login"
- button "Reset"
- link "Forgot Password":
  - /url: forgotpwd.php
- link "Register":
  - /url: register.php
- text: ©2015
- link "Masino Sinaga":
  - /url: http://www.ilovephpmaker.com
- text: . All rights reserved. |
- link "Terms and Conditions":
  - /url: javascript:void(0);
- text: "|"
- link "About Us":
  - /url: javascript:void(0);
- text: "|"
- link "Back to Top":
  - /url: javascript:void(0);
- button
- button
- button
- text: Alert
- paragraph: Please enter password
- button "OK"
- button
```

```
Test timeout of 30000ms exceeded while running "afterEach" hook.
```

# Test source

```ts
  1  | import { test as base, expect } from '@playwright/test';
  2  | import { AdminLoginPage } from '../Pages/AdminLoginPage';
  3  | import { AdminLogoutPage } from '../Pages/AdminLogoutPage';
  4  | 
  5  | export const test = base;
  6  | 
  7  | test.beforeEach(async ({ page }) => {
  8  |  const loginpage = new AdminLoginPage(page)
  9  |    //call launch url method
  10 |    await loginpage.launchUrl(process.env.BASE_URL!)
  11 |    //call login method
  12 |    await loginpage.ERPLogin(process.env.BASE_USER!,process.env.BASE_PASS!)
  13 | 
  14 | });
  15 | 
> 16 | test.afterEach(async ({ page }) => {
     |      ^ Test timeout of 30000ms exceeded while running "afterEach" hook.
  17 | if (page.isClosed()) {
  18 |   return
  19 | }
  20 | 
  21 | const logoutpage = new AdminLogoutPage(page)
  22 | await logoutpage.ERpLogout()
  23 |     
  24 | })
  25 | 
  26 | export { expect };
```