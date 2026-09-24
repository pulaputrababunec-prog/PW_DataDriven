import {test} from '../hooks/ERPHooks'
import { AdminLoginPage } from "../Pages/AdminLoginPage";
import { AdminLogoutPage } from "../Pages/AdminLogoutPage";
import { SuppliersPage } from '../Pages/SuppliersPage'
import { CustomersPage } from '../Pages/CustomersPage'
import { StockItemsPage } from '../Pages/StockItemsPage'
import { ExcelFileUtil } from '../Utils/ExcelFileUtil'
import path from 'path'

let login: AdminLoginPage
let sup: SuppliersPage
let cus: CustomersPage
let logout:AdminLogoutPage
let st:StockItemsPage

//declare varibales to store sheets
let supSheet:any
let cusSheet:any
let stSheet:any

//read path of excel 
const Excelpath =path.join(__dirname,'../TestData/ERpExcelData.xlsx')
try {
   supSheet =ExcelFileUtil.getCelldata(Excelpath,'suppliers')  
   cusSheet = ExcelFileUtil.getCelldata(Excelpath,'customer')
   stSheet= ExcelFileUtil.getCelldata(Excelpath,'stockitems')

} catch (error) {
    console.log(error)
}
// console.log(supSheet)
// console.log(cusSheet)
//console.log(stSheet)
// test.beforeEach(async({page})=>{
//     login = new AdminLoginPage(page)
//     await login.launchUrl(process.env.BASE_URL!)
//     await (login as any).login(process.env.BASE_USER!,process.env.BASE_PASS!)
// })

test.describe('ERp Management Module',()=>{

    for(const supdata of supSheet)
    {
      test(`Supplier With Excel data ${supdata.suppliername}`,async({page})=>{
        const sup = new SuppliersPage(page)
        await sup.NavigateToSupplier()
        await sup.AddSupplierDeatils(
            supdata.suppliername,
            supdata.Address,
            supdata.City,
            supdata.Country,
            supdata.Contactperson,
            supdata.phoneNumber,
            supdata.Email,
            supdata.MobileNumber,
            supdata.Notes

        )
        await sup.handleAlerts()
        await sup.supplierTable()
      })  
    }
    for(const cusdata of cusSheet)
    {
       test(`Customer data using Excel ${cusdata.City}`,async({page})=>{
        const cus = new CustomersPage(page)
        await cus.NavigateToCustomer()
        await cus.AddcustomerDeatils(
            cusdata.customername,
            cusdata.Address,
            cusdata.City,
            cusdata.Country,
            cusdata.contactPerson,
            cusdata.PhoneNumber,
            cusdata.Email,
            cusdata.MobileNumber,
            cusdata.Notes
        )
        await cus.handleAlerts()
        await cus.customerTable()
        
       }) 

    }

    // for(const stdata of stSheet)
    // {
    //   test(`Stock With Excel data ${stdata.Stockname}`,async({page})=>{

    for (const [index, stdata] of stSheet.entries()) {
         test(`Stock Test ${stdata.Category} ${index + 1}`,async({page})=>{

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