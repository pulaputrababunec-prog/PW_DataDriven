# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ERPSingleData.spec.ts >> ERP Inventroy Management >> StockItems
- Location: tests\ERPSingleData.spec.ts:51:9

# Error details

```
Error: locator.waitFor: Target page, context or browser has been closed
Call log:
  - waiting for locator('button.ajs-button btn btn-primary') to be visible

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
  44  |         this.clickConformOk = page.locator('button.ajs-button btn btn-primary')
  45  |         this.clickAlertOk = page.locator('button.ajs-button btn btn-primary')
  46  | 
  47  |         //old below
  48  |         // this.clickConformOk = page.locator('button.ajs-button btn btn-primary')
  49  |         // this.clickAlertOk = page.locator('button.ajs-button btn btn-primary')
  50  |         this.searchPanel = page.locator('[data-caption="Search Panel"]')
  51  |         this.searchTextbox = page.locator('#psearch')
  52  |         this.seacrhButton = page.locator('#btnsubmit')
  53  |     }
  54  |      //method for navigate to Stock Items page
  55  |         async NavigateToStockItems()
  56  |         {
  57  |             await this.clickStockItemsLink.waitFor()
  58  |             //await this.clickStockItemsLink.hover()
  59  |             await this.clickStockItemsLink.click()
  60  |             await this.clickAddIcon.waitFor()
  61  |             await this.clickAddIcon.click()
  62  |         }
  63  | 
  64  |      //Method for add category name
  65  |         async AddCategoryName(category:string,supnumber:string,stnumber:string,stname:string,
  66  |         measure:string,pprice:string,sprice:string,notes:string)
  67  |         {
  68  |             await this.clickCategory.waitFor()
  69  |             await this.clickCategory.selectOption(category)
  70  |             await this.clickSupplierNumber.selectOption(supnumber)
  71  |             this.expNumber = await this.clickStockNumber.inputValue()
  72  |             //await this.clickStockNumber.fill(stnumber)
  73  |             await this.clickStockName.fill(stname)
  74  |             await this.UnitOfMeasurement.selectOption(measure)
  75  |             await this.PurchasingPrice.fill(pprice)
  76  |             await this.SellingPrice.fill(sprice)
  77  |             await this.Notes.fill(notes)
  78  |             await this.clickAddButton.click()
  79  |             //this.expNumber = await this.clickStockNumber.inputValue()
  80  |         
  81  |         } 
  82  |         
  83  |          //method for confirm and alert dialog
  84  |         async handleAlerts()
  85  |         {
> 86  |             await this.clickConformOk.waitFor()
      |                                       ^ Error: locator.waitFor: Target page, context or browser has been closed
  87  |             await this.clickConformOk.click()
  88  |             await this.clickAlertOk.waitFor()
  89  |             await this.clickAlertOk.click()
  90  |         }
  91  | 
  92  |         //method for supplier table
  93  |          async stockCategories() {
  94  | 
  95  |         if (!await this.searchTextbox.isVisible()) {
  96  |             await this.searchPanel.click();
  97  |         }
  98  |          await this.searchTextbox.clear()
  99  |         await this.searchTextbox.fill(this.expNumber)
  100 | 
  101 |         await this.seacrhButton.click();
  102 | 
  103 |         const categoryname =this.page.locator('#tbl_a_stock_categorieslist tbody tr',
  104 |                 {
  105 |                     hasText: this.expNumber
  106 |                 })
  107 | 
  108 |         await expect(categoryname).toBeVisible();
  109 | 
  110 |         console.log(`Category Name Found in Table: ${this.expNumber}`)
  111 |         await expect(categoryname).toContainText(this.expNumber)
  112 |     }
  113 | 
  114 | }
```