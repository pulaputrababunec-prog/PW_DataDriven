# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ERPSingleData.spec.ts >> ERP Inventroy Management >> StockItems
- Location: tests\ERPSingleData.spec.ts:51:9

# Error details

```
Error: locator.waitFor: Error: strict mode violation: locator('text=Stock Items') resolved to 2 elements:
    1) <a class="ewDropdown" href="a_stock_itemslist.php?cmd=resetall">…</a> aka locator('#mmi_a_stock_items').getByText('Stock Items')
    2) <a href="a_stock_itemslist.php?cmd=resetall">…</a> aka getByRole('link', { name: 'Stock Items' })

Call log:
  - waiting for locator('text=Stock Items') to be visible

```

# Page snapshot

```yaml
- generic [ref=f2e2]:
  - generic [ref=f2e3]:
    - link "Stock Accounting" [ref=f2e6] [cursor=pointer]:
      - /url: .
    - strong [ref=f2e9]: Stock Accounting
  - text:       
  - generic [ref=f2e13]:
    - list [ref=f2e14]:
      - listitem [ref=f2e15]:
        - link " Help (Categories)" [ref=f2e16] [cursor=pointer]:
          - /url: help_categorieslist.php
          - generic [ref=f2e17]: 
          - text: Help (Categories)
        - text:   
      - listitem [ref=f2e19]:
        - link " Login" [ref=f2e20] [cursor=pointer]:
          - /url: login.php
          - generic [ref=f2e21]: 
          - text: Login
    - list
  - generic [ref=f2e24]:
    - generic [ref=f2e27]:
      - generic [ref=f2e28] [cursor=pointer]:
        - radio "en" [checked]
        - text: en
      - generic [ref=f2e29] [cursor=pointer]:
        - radio "id"
        - text: id
    - generic:  
  - generic [ref=f2e32]:
    - text: ©2015
    - link "Masino Sinaga" [ref=f2e33] [cursor=pointer]:
      - /url: http://www.ilovephpmaker.com
    - text: . All rights reserved. |
    - link "Terms and Conditions" [ref=f2e34] [cursor=pointer]:
      - /url: javascript:void(0);
    - text: "|"
    - link "About Us" [ref=f2e35] [cursor=pointer]:
      - /url: javascript:void(0);
    - text: "|"
    - link "Back to Top" [ref=f2e36] [cursor=pointer]:
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
  24 |         this.clickStockItemsLink = page.locator("text=Stock Items")
  25 |         //#mi_a_stock_categories
  26 |         this.clickstockcategoryLink = page.locator("text=Stock Categories")
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
> 41 |             await this.clickStockItemsLink.waitFor()
     |                                            ^ Error: locator.waitFor: Error: strict mode violation: locator('text=Stock Items') resolved to 2 elements:
  42 |             await this.clickStockItemsLink.hover()
  43 |             await this.clickStockItemsLink.click()
  44 |             // await this.clickstockcategoryLink.waitFor()
  45 |             // await this.clickstockcategoryLink.click()
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