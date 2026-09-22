import {test} from '../hooks/ERPHooks'
import { SuppliersPage } from '../Pages/SuppliersPage'
import { CustomersPage } from '../Pages/CustomersPage'
import { StockItemsPage } from '../Pages/StockItemsPage'

import erpdata  from '../TestData/ERpData.json'

// console.log(erpdata.Suppliers)
// console.log(erpdata.customers)
test.describe('ERP Managent Modules',()=>{
    for(const supdata of erpdata.Suppliers)
    {
        test(`Supplier With json file ${supdata.Suppliername}`,async({page})=>{
            const sup = new SuppliersPage(page)
            await sup.NavigateToSupplier()
            await sup.AddSupplierDeatils(
                supdata.Suppliername,
                supdata.Address,
                supdata.City,
                supdata.Country,
                supdata.ContactPerson,
                supdata.PhoneNumber,
                supdata.Email,
                supdata.MobileNumber,
                supdata.Notes
            )
            await sup.handleAlerts()
            await sup.supplierTable()

        })
        
    }
    for(const cusdata of erpdata.customers)
        {
         test(`Customer Using Json ${cusdata.Customername}`,async({page})=>{
            const cus = new CustomersPage(page)
            await cus.NavigateToCustomer()
            await cus.AddcustomerDeatils(
                cusdata.Customername,
                cusdata.Address,
                cusdata.City,
                cusdata.Country,
                cusdata.ContactPerson,
                cusdata.PhoneNumber,
                cusdata.Email,
                cusdata.MobileNumber,
                cusdata.Notes
            )
            await cus.handleAlerts()
            await cus.customerTable()
               
            })
        }

        for(const stdata of erpdata.stockitems)
        {
            test(`Stock With Json data ${stdata.Stocknumber}`,async({page})=>{
                const st = new StockItemsPage(page)
                await st.NavigateToStockItems()

                await st.AddCategoryName(
                    stdata.Category,
                    stdata.Suppliernumber,
                    stdata.Stocknumber,
                    stdata.Stockname,
                    stdata.Unitofmeasurement,
                    stdata.Purchasingprice,
                    stdata.Sellingprice,
                    stdata.Notes
                )
                await st.handleAlerts()
                await st.stockCategories()
            })
        }
})