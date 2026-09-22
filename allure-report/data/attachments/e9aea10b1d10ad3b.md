# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ERPSingleData.spec.ts >> ERP Inventroy Management >> Supplier With Single data
- Location: tests\ERPSingleData.spec.ts:6:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.waitFor: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#mi_a_suppliers') to be visible

```

# Test source

```ts
  1   | import { expect, Locator, Page } from "@playwright/test";
  2   | import { count } from "console";
  3   | export class SuppliersPage{
  4   |     //declare properties for suppliers
  5   |     page:Page
  6   |     readonly ClickSuppliersLink:Locator
  7   |     readonly ClikAddIconButton:Locator
  8   |     readonly supplierNumber:Locator
  9   |     readonly supplierNameInput:Locator
  10  |     readonly supplierAddress :Locator
  11  |     readonly supplierCity:Locator
  12  |     readonly supplierCountry:Locator
  13  |     readonly SupplierContactPerson : Locator
  14  |     readonly supplierPhoneNumber:Locator
  15  |     readonly supplierEmail: Locator
  16  |     readonly supplierMobileNumber:Locator
  17  |     readonly supplierNotes:Locator
  18  |     readonly clickAddButton:Locator
  19  |     readonly clickConformOk:Locator
  20  |     readonly clickAlertOk: Locator
  21  |     readonly searchPanel:Locator
  22  |     readonly searchTextbox: Locator
  23  |     readonly seacrhButton :Locator
  24  |     //readonly SupplierGrid:Locator
  25  |     private expNumber!: string
  26  |     constructor(page:Page)
  27  |     {
  28  |         this.page=page
  29  |         this.ClickSuppliersLink = page.locator('#mi_a_suppliers')
  30  |         this.ClikAddIconButton = page.locator('span[data-caption="Add"]').first()
  31  |         this.supplierNumber = page.getByLabel('Supplier Number')
  32  |         this.supplierNameInput= page.getByPlaceholder('Supplier Name')
  33  |         this.supplierAddress = page.getByPlaceholder('Address')
  34  |         this.supplierCity = page.getByPlaceholder('City')
  35  |         this.supplierCountry = page.getByPlaceholder('Country')
  36  |         this.SupplierContactPerson = page.getByPlaceholder('Contact Person')
  37  |         this.supplierPhoneNumber = page.getByPlaceholder('Phone Number')
  38  |         this.supplierEmail = page.getByPlaceholder('Email')
  39  |         this.supplierMobileNumber = page.getByPlaceholder('Mobile Number')
  40  |         this.supplierNotes = page.getByPlaceholder('Notes')
  41  |         this.clickAddButton = page.locator('#btnAction')
  42  |         this.clickConformOk = page.locator('button.ajs-button.btn.btn-primary')
  43  |         this.clickAlertOk = page.locator('button.ajs-button.btn.btn-primary')
  44  |         this.searchPanel = page.locator('[data-caption="Search Panel"]')
  45  |         this.searchTextbox = page.locator('#psearch')
  46  |         this.seacrhButton =page.locator('#btnsubmit')
  47  |     }
  48  |     //method for navigate to supplier add page
  49  |     async NavigateToSupplier()
  50  |     {
> 51  |         await this.ClickSuppliersLink.waitFor()
      |                                       ^ Error: locator.waitFor: Test timeout of 30000ms exceeded.
  52  |         await this.ClickSuppliersLink.click()
  53  |         await this.ClikAddIconButton.waitFor()
  54  |         await this.ClikAddIconButton.click()
  55  |     }
  56  |     //method for fill supplier deatils
  57  |     async AddSupplierDeatils(sname:string,address:string,city:string,country:string,
  58  |         cperson:string,pnumber:string,email:string,mnumber:string,notes:string)
  59  |         {
  60  |              await this.supplierNumber.waitFor()
  61  |             this.expNumber = await this.supplierNumber.inputValue()
  62  |             await this.supplierNameInput.fill(sname)
  63  |             await this.supplierAddress.fill(address)
  64  |             await this.supplierCity.fill(city)
  65  |             await this.supplierCountry.fill(country)
  66  |             await this.SupplierContactPerson.fill(cperson)
  67  |             await this.supplierPhoneNumber.fill(pnumber)
  68  |             await this.supplierEmail.fill(email)
  69  |             await this.supplierMobileNumber.fill(mnumber)
  70  |             await this.supplierNotes.fill(notes)
  71  |             await this.clickAddButton.click()
  72  |         }
  73  |         //method for confirm and alert dialog
  74  |         async handleAlerts()
  75  |         {
  76  |             await this.clickConformOk.waitFor()
  77  |             await this.clickConformOk.click()
  78  |             await this.clickAlertOk.waitFor()
  79  |             await this.clickAlertOk.click()
  80  |         }
  81  |         //method for supplier table
  82  |          async supplierTable() {
  83  | 
  84  |         if (!await this.searchTextbox.isVisible()) {
  85  |             await this.searchPanel.click();
  86  |         }
  87  |          await this.searchTextbox.clear()
  88  |         await this.searchTextbox.fill(this.expNumber)
  89  | 
  90  |         await this.seacrhButton.click();
  91  | 
  92  |         const supplierRow =this.page.locator('#tbl_a_supplierslist tbody tr',
  93  |                 {
  94  |                     hasText: this.expNumber
  95  |                 })
  96  | 
  97  |         await expect(supplierRow).toBeVisible();
  98  | 
  99  |         console.log(`Supplier Number Found in Table: ${this.expNumber}`)
  100 |         await expect(supplierRow).toContainText(this.expNumber)
  101 |     }
  102 | 
  103 | 
  104 | }
```