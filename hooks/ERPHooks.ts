import { test as base, expect } from '@playwright/test';
import { AdminLoginPage } from '../Pages/AdminLoginPage';
import { AdminLogoutPage } from '../Pages/AdminLogoutPage';

export const test = base;

test.beforeEach(async ({ page }) => {
 const loginpage = new AdminLoginPage(page)
   //call launch url method
   await loginpage.launchUrl(process.env.BASE_URL!)
   //call login method
   await loginpage.ERPLogin(process.env.BASE_USER!,process.env.BASE_PASS!)

});

test.afterEach(async ({ page }) => {
if (page.isClosed()) {
  return
}

const logoutpage = new AdminLogoutPage(page)
await logoutpage.ERpLogout()
    
})

export { expect };