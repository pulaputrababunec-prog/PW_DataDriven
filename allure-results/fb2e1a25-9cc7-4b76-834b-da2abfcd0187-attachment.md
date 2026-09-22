# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: xec.spec.ts >> al
- Location: tests\xec.spec.ts:3:5

# Error details

```
Error: locator.selectOption: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('combobox')

```

# Test source

```ts
  1  | import test from "@playwright/test";
  2  | 
  3  | test("al",async({page})=>{
  4  | 
  5  |     page.goto("http://webapp.qedgetech.com/a_stock_itemslist.php?cmd=resetall")
  6  |     page.getByRole('textbox',{name:'User Name'}).fill('admin')
  7  |     page.getByRole('textbox',{name:'Password'}).fill('master')
  8  |     page.getByRole('button',{name:'Login'}).click()
  9  |     //page.waitForTimeout(6000)
  10 | 
> 11 |     await page.getByRole('combobox').selectOption({label:"Stock Categories"})
     |                                      ^ Error: locator.selectOption: Target page, context or browser has been closed
  12 | })
```