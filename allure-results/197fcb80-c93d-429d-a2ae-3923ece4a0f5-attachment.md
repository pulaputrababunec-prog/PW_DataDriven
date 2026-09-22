# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ERPSingleData.spec.ts >> ERP Inventroy Management >> StockItems
- Location: tests\ERPSingleData.spec.ts:51:9

# Error details

```
Error: locator.waitFor: Error: strict mode violation: locator('text=OK') resolved to 7 elements:
    1) <option value="Supplier-00000000872">iokfgouo;ih</option> aka getByLabel('Supplier Number *')
    2) <button type="button" aria-hidden="true" data-dismiss="modal" class="btn btn-primary ewButton">OK</button> aka locator('#msTACDialog').getByText('OK')
    3) <button type="button" aria-hidden="true" data-dismiss="modal" class="btn btn-primary ewButton">OK</button> aka locator('#msAboutDialog').getByText('OK')
    4) <button type="button" data-dismiss="modal" class="btn btn-primary ewButton">OK</button> aka getByText('OK').nth(3)
    5) <button type="button" class="btn btn-primary ewButton">OK</button> aka locator('#ewPrompt').getByText('OK')
    6) <button type="button" data-dismiss="modal" class="btn btn-primary ewButton">OK</button> aka locator('#ewTimer').getByText('OK')
    7) <button class="ajs-button btn btn-primary">OK!</button> aka getByText('OK!')

Call log:
  - waiting for locator('text=OK') to be visible

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
  20  |     readonly clickConformOk:Locator
  21  |     readonly clickAlertOk: Locator
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
  33  |         this.clickCategory=page.locator('#elh_a_stock_items_Category')
  34  |         this.clickSupplierNumber=page.locator('#elh_a_stock_items_Supplier_Number')
  35  |         this.clickStockNumber=page.locator("#elh_a_stock_items_Stock_Number")
  36  |         this.clickStockName=page.locator('#elh_a_stock_items_Stock_Name')
  37  |         this.UnitOfMeasurement=page.locator('#elh_a_stock_items_Unit_Of_Measurement')
  38  |         this.PurchasingPrice=page.locator('#elh_a_stock_items_Purchasing_Price')
  39  |         this.SellingPrice=page.locator('#elh_a_stock_items_Selling_Price')
  40  |         this.Notes=page.locator('#elh_a_stock_items_Notes')
  41  |         this.clickAddButton = page.locator('[type="submit"]')
  42  |         this.clickConformOk = page.locator("text=OK")
  43  |         this.clickAlertOk = page.locator('button.ajs-button btn btn-primary')
  44  |         this.searchPanel = page.locator("div.search-panel")
  45  |         this.searchTextbox = page.locator("input[placeholder='Search...']")
  46  |         this.seacrhButton = page.locator("text=Search")
  47  |     }
  48  |      //method for navigate to Stock Items page
  49  |         async NavigateToStockItems()
  50  |         {
  51  |             await this.clickStockItemsLink.waitFor()
  52  |             //await this.clickStockItemsLink.hover()
  53  |             await this.clickStockItemsLink.click()
  54  |             await this.clickAddIcon.waitFor()
  55  |             await this.clickAddIcon.click()
  56  |         }
  57  | 
  58  |      //Method for add category name
  59  |         async AddCategoryName(category:string,supnumber:string,stnumber:string,stname:string,
  60  |         measure:string,pprice:string,sprice:string,notes:string)
  61  |         {
  62  |             await this.clickCategory.waitFor()
  63  |             await this.clickCategory.selectOption(category)
  64  |             await this.clickSupplierNumber.selectOption(supnumber)
  65  |             this.expNumber = await this.clickStockNumber.inputValue()
  66  |             //await this.clickStockNumber.fill(stnumber)
  67  |             await this.clickStockName.fill(stname)
  68  |             await this.UnitOfMeasurement.selectOption(measure)
  69  |             await this.PurchasingPrice.fill(pprice)
  70  |             await this.SellingPrice.fill(sprice)
  71  |             await this.Notes.fill(notes)
  72  |             await this.clickAddButton.click()
  73  |             //this.expNumber = await this.clickStockNumber.inputValue()
  74  |         
  75  |         } 
  76  |         
  77  |          //method for confirm and alert dialog
  78  |         async handleAlerts()
  79  |         {
> 80  |             await this.clickConformOk.waitFor()
      |                                       ^ Error: locator.waitFor: Error: strict mode violation: locator('text=OK') resolved to 7 elements:
  81  |             await this.clickConformOk.click()
  82  |             await this.clickAlertOk.waitFor()
  83  |             await this.clickAlertOk.click()
  84  |         }
  85  | 
  86  |         //method for supplier table
  87  |          async stockCategories() {
  88  | 
  89  |         if (!await this.searchTextbox.isVisible()) {
  90  |             await this.searchPanel.click();
  91  |         }
  92  |          await this.searchTextbox.clear()
  93  |         await this.searchTextbox.fill(this.expNumber)
  94  | 
  95  |         await this.seacrhButton.click();
  96  | 
  97  |         const categoryname =this.page.locator('#tbl_a_stock_categorieslist tbody tr',
  98  |                 {
  99  |                     hasText: this.expNumber
  100 |                 })
  101 | 
  102 |         await expect(categoryname).toBeVisible();
  103 | 
  104 |         console.log(`Category Name Found in Table: ${this.expNumber}`)
  105 |         await expect(categoryname).toContainText(this.expNumber)
  106 |     }
  107 | 
  108 | }
```