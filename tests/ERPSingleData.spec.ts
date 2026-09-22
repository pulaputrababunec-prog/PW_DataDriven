import { test } from '../hooks/ERPHooks'
import { SuppliersPage } from '../Pages/SuppliersPage';
import { CustomersPage } from '../Pages/CustomersPage';
import {StockItemsPage} from '../Pages/StockItemsPage'

test.describe('ERP Inventroy Management',()=>{

    // first test case for supplier module

    test('Supplier With Single data',async({page})=>{
        
        const sup = new SuppliersPage(page)
        await sup.NavigateToSupplier()
        await sup.AddSupplierDeatils(
            "Ramu",
            "Hyd1",
            "Hyderabad",
            "India",
            "QedgeTech",
            "87654322",
            "Test@gmail.com",
            "986754321",
            "New Supplier"

        )
        await sup.handleAlerts()
        await sup.supplierTable()
    })
    
    //----------------------customer module----------------------
    test('Customer Module',async({page})=>{
        //create object for customerpage file
        const cus = new CustomersPage(page)
        await cus.NavigateToCustomer()
        await cus.AddcustomerDeatils(
            'New Customer',
            'Kadiri',
            'atp',
            'India',
            'ranga',
            '9876543432',
            'Test@gmail.com',
            '87654321',
            'Add new Customer'
        )
        await cus.handleAlerts()
        await cus.customerTable()

    })

    test('StockItems',async({page})=>{

        //create object for stockitems page file

        const stock = new StockItemsPage(page)
        await stock.NavigateToStockItems()
        await stock.AddCategoryName(
            'First Category',
            'Akbar',
            'Stock-000000042',
            'Mahi',
            'Item',
            '20.0',
            '25.0',
            'Add new Stock'
        )
        await stock.handleAlerts()
        await stock.stockCategories()

    })
    
})