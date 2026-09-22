import { expect, Locator, Page } from "@playwright/test"

export class StockItemsPage{

    //declare properties for suppliers
    page:Page
    readonly clickStockItemsLink:Locator
    //readonly clickstockcategoryLink:Locator
    //readonly clickunitofmeasurementLink:Locator
    readonly clickAddIcon:Locator
    readonly clickCategory:Locator
    readonly clickSupplierNumber:Locator
    readonly clickStockNumber:Locator
    readonly clickStockName:Locator
    readonly UnitOfMeasurement:Locator
    readonly PurchasingPrice:Locator
    readonly SellingPrice:Locator
    readonly Notes:Locator
    readonly clickAddButton:Locator

    readonly clickConformOk:Locator
    readonly clickAlertOk: Locator

    readonly searchPanel:Locator
    readonly searchTextbox: Locator
    readonly seacrhButton :Locator
    private expNumber!: string

    constructor(page:Page)
    {
        this.page=page
        this.clickStockItemsLink = page.locator('#mi_a_stock_items')
        this.clickAddIcon = page.locator('span[data-caption="Add"]').first()

        this.clickCategory=page.locator('#elh_a_stock_items_Category')
        this.clickSupplierNumber=page.locator('#elh_a_stock_items_Supplier_Number')
        this.clickStockNumber=page.locator("#elh_a_stock_items_Stock_Number")
        this.clickStockName=page.locator('#elh_a_stock_items_Stock_Name')
        this.UnitOfMeasurement=page.locator('#elh_a_stock_items_Unit_Of_Measurement')
        this.PurchasingPrice=page.locator('#elh_a_stock_items_Purchasing_Price')
        this.SellingPrice=page.locator('#elh_a_stock_items_Selling_Price')
        this.Notes=page.locator('#elh_a_stock_items_Notes')
        this.clickAddButton = page.locator('[type="submit"]')
        // this.clickConformOk = page.locator('button.ajs-button.btn.btn-primary')
        // this.clickAlertOk = page.locator('button.ajs-button.btn.btn-primary')

        this.clickConformOk = page.locator('button.ajs-button.btn.btn-primary');
        this.clickAlertOk = page.locator('button.ajs-button.btn.btn-primary');

        const stockRow = this.page.locator('table tbody tr', {
              hasText: this.expNumber});

        //await expect(stockRow).toBeVisible();
        this.searchPanel = page.locator('[data-caption="Search Panel"]')
        this.searchTextbox = page.locator('#psearch')
        this.seacrhButton = page.locator('#btnsubmit')
    }
     //method for navigate to Stock Items page
        async NavigateToStockItems()
        {
            await this.clickStockItemsLink.waitFor()
            await this.clickStockItemsLink.click()
            await this.clickAddIcon.waitFor()
            await this.clickAddIcon.click()
        }

     //Method for add category name
        async AddCategoryName(category:string,supnumber:string,stnumber:string,stname:string,
        measure:string,pprice:string,sprice:string,notes:string)
        {
            await this.clickCategory.waitFor()
            await this.clickCategory.selectOption(category)
            await this.clickSupplierNumber.selectOption(supnumber)
            this.expNumber = await this.clickStockNumber.inputValue()
            await this.clickStockName.fill(stname)
            await this.UnitOfMeasurement.selectOption(measure)
            await this.PurchasingPrice.fill(pprice)
            await this.SellingPrice.fill(sprice)
            await this.Notes.fill(notes)
            await this.clickAddButton.click() 
        
        } 
        
         //method for confirm and alert dialog
        async handleAlerts()
        {
            await this.clickConformOk.waitFor()
            await this.clickConformOk.click()
            await this.clickAlertOk.waitFor()
            await this.clickAlertOk.click()

        }

        //method for supplier table
         async stockCategories() {

        if (!await this.searchTextbox.isVisible()) {
            await this.searchPanel.click();
        }
         await this.searchTextbox.clear()
        await this.searchTextbox.fill(this.expNumber)

        await this.seacrhButton.click();

        const stname = this.page.locator('table tbody tr',
                {
                    hasText: this.expNumber
                })

        await expect(stname).toBeVisible();

        console.log(`Stock Name Found in Table: ${this.expNumber}`)
        await expect(stname).toContainText(this.expNumber)
    }

}