# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: usingExcleData.spec.ts >> ERp Management Module >> Stock Test Third Category 3
- Location: tests\usingExcleData.spec.ts:91:14

# Error details

```
Error: locator.fill: value: expected string, got number
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
  8   |     readonly clickAddIcon:Locator
  9   |     readonly clickCategory:Locator
  10  |     readonly clickSupplierNumber:Locator
  11  |     readonly clickStockNumber:Locator
  12  |     readonly clickStockName:Locator
  13  |     readonly UnitOfMeasurement:Locator
  14  |     readonly PurchasingPrice:Locator
  15  |     readonly SellingPrice:Locator
  16  |     readonly Notes:Locator
  17  |     readonly clickAddButton:Locator
  18  | 
  19  |     readonly clickConformOk:Locator
  20  |     readonly clickAlertOk: Locator
  21  | 
  22  |     readonly searchPanel:Locator
  23  |     readonly searchTextbox: Locator
  24  |     readonly seacrhButton :Locator
  25  |     private expNumber!: string
  26  | 
  27  |     constructor(page:Page)
  28  |     {
  29  |         this.page=page
  30  |         this.clickStockItemsLink = page.locator('#mi_a_stock_items')
  31  |         this.clickAddIcon = page.locator('span[data-caption="Add"]').first()
  32  | 
  33  |         this.clickCategory=page.locator('#x_Category')
  34  |         this.clickSupplierNumber=page.locator('#elh_a_stock_items_Supplier_Number')
  35  |         this.clickStockNumber=page.locator("#elh_a_stock_items_Stock_Number")
  36  |         this.clickStockName=page.locator('#elh_a_stock_items_Stock_Name')
  37  |         this.UnitOfMeasurement=page.locator('select#x_Unit_Of_Measurement')
  38  |         this.PurchasingPrice = page.locator('#x_Purchasing_Price')
  39  |         this.SellingPrice = page.locator('#x_Selling_Price')
  40  |         this.Notes=page.locator('#x_Notes')
  41  |         this.clickAddButton = page.locator('[type="submit"]')
  42  |         // this.clickConformOk = page.locator('button.ajs-button.btn.btn-primary')
  43  |         // this.clickAlertOk = page.locator('button.ajs-button.btn.btn-primary')
  44  | 
  45  |         this.clickConformOk = page.locator('button.ajs-button.btn.btn-primary');
  46  |         this.clickAlertOk = page.locator('button.ajs-button.btn.btn-primary');
  47  | 
  48  |         const stockRow = this.page.locator('table tbody tr', {
  49  |               hasText: this.expNumber});
  50  | 
  51  |         //await expect(stockRow).toBeVisible();
  52  |         this.searchPanel = page.locator('[data-caption="Search Panel"]')
  53  |         this.searchTextbox = page.locator('#psearch')
  54  |         this.seacrhButton = page.locator('#btnsubmit')
  55  |     }
  56  |      //method for navigate to Stock Items page
  57  |         async NavigateToStockItems()
  58  |         {
  59  |             await this.clickStockItemsLink.waitFor()
  60  |             await this.clickStockItemsLink.click()
  61  |             await this.clickAddIcon.waitFor()
  62  |             await this.clickAddIcon.click()
  63  |         }
  64  | 
  65  |      //Method for add category name
  66  |         async AddCategoryName(category:string,supnumber:string,stnumber:string,stname:string,
  67  |         item:string,pprice:string,sprice:string,notes:string)
  68  |         {
  69  |             await this.clickCategory.click()
  70  |             await this.clickCategory.waitFor()
  71  |             await this.clickCategory.selectOption(category)
  72  |              await this.clickSupplierNumber.click()
  73  |             await this.clickSupplierNumber.selectOption(supnumber)
  74  |             await this.clickStockNumber.waitFor()
  75  |             this.expNumber = await this.clickStockNumber.inputValue()
  76  |             await this.clickStockName.fill(stname)
  77  |             await this.UnitOfMeasurement.waitFor()
  78  |             await this.UnitOfMeasurement.click()
  79  |             await this.UnitOfMeasurement.selectOption(item)
> 80  |             await this.PurchasingPrice.fill(pprice)
      |                                        ^ Error: locator.fill: value: expected string, got number
  81  |             await this.SellingPrice.fill(sprice)
  82  |             await this.Notes.fill(notes)
  83  |             await this.clickAddButton.click() 
  84  |         
  85  |         } 
  86  |         
  87  |          //method for confirm and alert dialog
  88  |         async handleAlerts()
  89  |         {
  90  |             await this.clickConformOk.waitFor()
  91  |             await this.clickConformOk.click()
  92  |             await this.clickAlertOk.waitFor()
  93  |             await this.clickAlertOk.click()
  94  | 
  95  |         }
  96  | 
  97  |         //method for supplier table
  98  |          async stockCategories() {
  99  | 
  100 |         if (!await this.searchTextbox.isVisible()) {
  101 |             await this.searchPanel.click();
  102 |         }
  103 |          await this.searchTextbox.clear()
  104 |         await this.searchTextbox.fill(this.expNumber)
  105 | 
  106 |         await this.seacrhButton.click();
  107 | 
  108 |         const stname = this.page.locator('table tbody tr',
  109 |                 {
  110 |                     hasText: this.expNumber
  111 |                 })
  112 | 
  113 |         await expect(stname).toBeVisible();
  114 | 
  115 |         console.log(`Stock Name Found in Table: ${this.expNumber}`)
  116 |         await expect(stname).toContainText(this.expNumber)
  117 |     }
  118 | 
  119 | }
```