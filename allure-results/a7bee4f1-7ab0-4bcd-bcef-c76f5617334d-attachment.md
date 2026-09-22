# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: usingExcleData.spec.ts >> ERp Management Module >> Stock With Excel data Stock-000000056
- Location: tests\usingExcleData.spec.ts:69:11

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.selectOption: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#elh_a_stock_items_Category')
    - locator resolved to <label for="x_Category" id="elh_a_stock_items_Category" class="col-sm-4 control-label ewLabel">…</label>
  - attempting select option action
    2 × waiting for element to be visible and enabled
      - did not find some options
    - retrying select option action
    - waiting 20ms
    2 × waiting for element to be visible and enabled
      - did not find some options
    - retrying select option action
      - waiting 100ms
    53 × waiting for element to be visible and enabled
       - did not find some options
     - retrying select option action
       - waiting 500ms
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
  1   | import { expect, Locator, Page } from "@playwright/test"
  2   | 
  3   | export class StockItemsPage{
  4   | 
  5   |     //declare properties for suppliers
  6   |     page:Page
  7   |     readonly clickStockItemsLink:Locator
  8   |     //readonly clickstockcategoryLink:Locator
  9   |     //readonly clickunitofmeasurementLink:Locator
  10  |     readonly clickAddIcon:Locator
  11  |     readonly clickCategory:Locator
  12  |     readonly clickSupplierNumber:Locator
  13  |     readonly clickStockNumber:Locator
  14  |     readonly clickStockName:Locator
  15  |     readonly UnitOfMeasurement:Locator
  16  |     readonly PurchasingPrice:Locator
  17  |     readonly SellingPrice:Locator
  18  |     readonly Notes:Locator
  19  |     readonly clickAddButton:Locator
  20  | 
  21  |     readonly clickConformOk:Locator
  22  |     readonly clickAlertOk: Locator
  23  | 
  24  |     readonly searchPanel:Locator
  25  |     readonly searchTextbox: Locator
  26  |     readonly seacrhButton :Locator
  27  |     private expNumber!: string
  28  | 
  29  |     constructor(page:Page)
  30  |     {
  31  |         this.page=page
  32  |         this.clickStockItemsLink = page.locator('#mi_a_stock_items')
  33  |         this.clickAddIcon = page.locator('span[data-caption="Add"]').first()
  34  | 
  35  |         this.clickCategory=page.locator('#elh_a_stock_items_Category')
  36  |         this.clickSupplierNumber=page.locator('#elh_a_stock_items_Supplier_Number')
  37  |         this.clickStockNumber=page.locator("#elh_a_stock_items_Stock_Number")
  38  |         this.clickStockName=page.locator('#elh_a_stock_items_Stock_Name')
  39  |         this.UnitOfMeasurement=page.locator('#elh_a_stock_items_Unit_Of_Measurement')
  40  |         this.PurchasingPrice=page.locator('#elh_a_stock_items_Purchasing_Price')
  41  |         this.SellingPrice=page.locator('#elh_a_stock_items_Selling_Price')
  42  |         this.Notes=page.locator('#elh_a_stock_items_Notes')
  43  |         this.clickAddButton = page.locator('[type="submit"]')
  44  |         // this.clickConformOk = page.locator('button.ajs-button.btn.btn-primary')
  45  |         // this.clickAlertOk = page.locator('button.ajs-button.btn.btn-primary')
  46  | 
  47  |         this.clickConformOk = page.locator('button.ajs-button.btn.btn-primary');
  48  |         this.clickAlertOk = page.locator('button.ajs-button.btn.btn-primary');
  49  | 
  50  |         const stockRow = this.page.locator('table tbody tr', {
  51  |               hasText: this.expNumber});
  52  | 
  53  |         //await expect(stockRow).toBeVisible();
  54  |         this.searchPanel = page.locator('[data-caption="Search Panel"]')
  55  |         this.searchTextbox = page.locator('#psearch')
  56  |         this.seacrhButton = page.locator('#btnsubmit')
  57  |     }
  58  |      //method for navigate to Stock Items page
  59  |         async NavigateToStockItems()
  60  |         {
  61  |             await this.clickStockItemsLink.waitFor()
  62  |             await this.clickStockItemsLink.click()
  63  |             await this.clickAddIcon.waitFor()
  64  |             await this.clickAddIcon.click()
  65  |         }
  66  | 
  67  |      //Method for add category name
  68  |         async AddCategoryName(category:string,supnumber:string,stnumber:string,stname:string,
  69  |         measure:string,pprice:string,sprice:string,notes:string)
  70  |         {
  71  |             await this.clickCategory.waitFor()
> 72  |             await this.clickCategory.selectOption(category)
      |                                      ^ Error: locator.selectOption: Test timeout of 30000ms exceeded.
  73  |             await this.clickSupplierNumber.selectOption(supnumber)
  74  |             this.expNumber = await this.clickStockNumber.inputValue()
  75  |             await this.clickStockName.fill(stname)
  76  |             await this.UnitOfMeasurement.selectOption(measure)
  77  |             await this.PurchasingPrice.fill(pprice)
  78  |             await this.SellingPrice.fill(sprice)
  79  |             await this.Notes.fill(notes)
  80  |             await this.clickAddButton.click() 
  81  |         
  82  |         } 
  83  |         
  84  |          //method for confirm and alert dialog
  85  |         async handleAlerts()
  86  |         {
  87  |             await this.clickConformOk.waitFor()
  88  |             await this.clickConformOk.click()
  89  |             await this.clickAlertOk.waitFor()
  90  |             await this.clickAlertOk.click()
  91  | 
  92  |         }
  93  | 
  94  |         //method for supplier table
  95  |          async stockCategories() {
  96  | 
  97  |         if (!await this.searchTextbox.isVisible()) {
  98  |             await this.searchPanel.click();
  99  |         }
  100 |          await this.searchTextbox.clear()
  101 |         await this.searchTextbox.fill(this.expNumber)
  102 | 
  103 |         await this.seacrhButton.click();
  104 | 
  105 |         const stname = this.page.locator('table tbody tr',
  106 |                 {
  107 |                     hasText: this.expNumber
  108 |                 })
  109 | 
  110 |         await expect(stname).toBeVisible();
  111 | 
  112 |         console.log(`Stock Name Found in Table: ${this.expNumber}`)
  113 |         await expect(stname).toContainText(this.expNumber)
  114 |     }
  115 | 
  116 | }
```