# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ERPSingleData.spec.ts >> ERP Inventroy Management >> StockItems
- Location: tests\ERPSingleData.spec.ts:51:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#mi_a_stock_categories').filter({ hasText: 'Stock Categories' })
    - locator resolved to <li id="mi_a_stock_categories">…</li>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
      - waiting 100ms
    45 × waiting for element to be visible, enabled and stable
       - element is not visible
     - retrying click action
       - waiting 500ms
    - waiting for "http://webapp.qedgetech.com/a_stock_itemsadd.php?showdetail=" navigation to finish...
    - navigated to "http://webapp.qedgetech.com/a_stock_itemsadd.php?showdetail="
    - waiting for element to be visible, enabled and stable
  - element was detached from the DOM, retrying
    - locator resolved to <li id="mi_a_stock_categories">…</li>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
    - waiting 20ms
  - element was detached from the DOM, retrying

```

# Page snapshot

```yaml
- generic [ref=f4e2]:
  - generic [ref=f4e3]:
    - link "Stock Accounting" [ref=f4e6] [cursor=pointer]:
      - /url: .
    - strong [ref=f4e9]: Stock Accounting
  - text:       
  - generic [ref=f4e13]:
    - list [ref=f4e14]:
      - listitem [ref=f4e15]:
        - link " Help (Categories)" [ref=f4e16] [cursor=pointer]:
          - /url: help_categorieslist.php
          - generic [ref=f4e17]: 
          - text: Help (Categories)
        - text:   
      - listitem [ref=f4e19]:
        - link " Login" [ref=f4e20] [cursor=pointer]:
          - /url: login.php
          - generic [ref=f4e21]: 
          - text: Login
    - list
  - generic [ref=f4e24]:
    - generic [ref=f4e27]:
      - generic [ref=f4e28] [cursor=pointer]:
        - radio "en" [checked]
        - text: en
      - generic [ref=f4e29] [cursor=pointer]:
        - radio "id"
        - text: id
    - generic:  
  - generic [ref=f4e32]:
    - text: ©2015
    - link "Masino Sinaga" [ref=f4e33] [cursor=pointer]:
      - /url: http://www.ilovephpmaker.com
    - text: . All rights reserved. |
    - link "Terms and Conditions" [ref=f4e34] [cursor=pointer]:
      - /url: javascript:void(0);
    - text: "|"
    - link "About Us" [ref=f4e35] [cursor=pointer]:
      - /url: javascript:void(0);
    - text: "|"
    - link "Back to Top" [ref=f4e36] [cursor=pointer]:
      - /url: javascript:void(0);
```

# Test source

```ts
  1  | import { expect, Locator, Page } from "@playwright/test"
  2  | 
  3  | export class StockItemsPage{
  4  | 
  5  |     //declare properties for suppliers
  6  |     page:Page
  7  |     readonly clickStockItemsLink:Locator
  8  |     readonly clickstockcategoryLink:Locator
  9  |     //readonly clickunitofmeasurementLink:Locator
  10 |     readonly clickAddIcon:Locator
  11 |     readonly categoryNameInput:Locator
  12 |     readonly clickAddButton:Locator
  13 |     readonly clickConformOk:Locator
  14 |     readonly clickAlertOk: Locator
  15 |     readonly searchPanel:Locator
  16 |     readonly searchTextbox: Locator
  17 |     readonly seacrhButton :Locator
  18 |     private expNumber!: string
  19 | 
  20 |     constructor(page:Page)
  21 |     {
  22 |         this.page=page
  23 |         //await page.getByRole('combobox').selectOption('India')
  24 |         this.clickStockItemsLink = page.locator('#mi_a_stock_items',{hasText:'Stock Items'})
  25 |         //#mi_a_stock_categories
  26 |         this.clickstockcategoryLink = page.locator('#mi_a_stock_categories',{hasText:'Stock Categories'})
  27 |         //this.clickunitofmeasurementLink = page.locator("text=Unit of Measurement")
  28 |         this.clickAddIcon = page.locator("text=Add")
  29 |         this.categoryNameInput = page.locator("input[placeholder='Category Name']")
  30 |         this.clickAddButton = page.locator("text=Add")
  31 |         this.clickConformOk = page.locator("text=OK")
  32 |         this.clickAlertOk = page.locator("text=OK")
  33 |         this.searchPanel = page.locator("div.search-panel")
  34 |         this.searchTextbox = page.locator("input[placeholder='Search...']")
  35 |         this.seacrhButton = page.locator("text=Search")
  36 |     }
  37 | 
  38 |      //method for navigate to Stock Items page
  39 |         async NavigateToStockItems()
  40 |         {
  41 |             //await this.clickStockItemsLink.waitFor()
  42 |             await this.clickStockItemsLink.hover()
  43 |             await this.clickStockItemsLink.first().click()
  44 |             //await this.clickstockcategoryLink.waitFor()
> 45 |             await this.clickstockcategoryLink.click()
     |                                               ^ Error: locator.click: Test timeout of 30000ms exceeded.
  46 |         }
  47 | 
  48 |      //Method for add category name
  49 |         async AddCategoryName(name:string){
  50 | 
  51 |             await this.categoryNameInput.waitFor()
  52 |             this.expNumber = await this.categoryNameInput.inputValue()
  53 |            
  54 |         } 
  55 |         
  56 |          //method for confirm and alert dialog
  57 |         async handleAlerts()
  58 |         {
  59 |             await this.clickConformOk.waitFor()
  60 |             await this.clickConformOk.click()
  61 |             await this.clickAlertOk.waitFor()
  62 |             await this.clickAlertOk.click()
  63 |         }
  64 | 
  65 |         //method for supplier table
  66 |          async stockCategories() {
  67 | 
  68 |         if (!await this.searchTextbox.isVisible()) {
  69 |             await this.searchPanel.click();
  70 |         }
  71 |          await this.searchTextbox.clear()
  72 |         await this.searchTextbox.fill(this.expNumber)
  73 | 
  74 |         await this.seacrhButton.click();
  75 | 
  76 |         const categoryname =this.page.locator('#tbl_a_stock_categorieslist tbody tr',
  77 |                 {
  78 |                     hasText: this.expNumber
  79 |                 })
  80 | 
  81 |         await expect(categoryname).toBeVisible();
  82 | 
  83 |         console.log(`Category Name Found in Table: ${this.expNumber}`)
  84 |         await expect(categoryname).toContainText(this.expNumber)
  85 |     }
  86 | 
  87 | }
```