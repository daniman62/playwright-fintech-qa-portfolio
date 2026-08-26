# Authentication Test Cases

## AUTH-001 - Valid user can log in successfully

**Precondition:**  
The SauceDemo login page is available.

**Test Data:**  
Username: standard_user  
Password: secret_sauce

**Steps:**
1. Open SauceDemo.
2. Enter a valid username.
3. Enter a valid password.
4. Click Login.

**Expected Result:**  
The user is redirected to the inventory page.

---

## AUTH-002 - Invalid password

**Precondition:**  
The SauceDemo login page is available.

**Test Data:**  
Username: standard_user  
Password: invalidpass_sauce

**Expected Result:**  
Login is denied and an error message indicates that the username and password do not match.

---

## AUTH-003 - Password is required

**Test Data:**  
Username: standard_user  
Password: empty

**Expected Result:**  
An error message indicates that the password is required.

---

## AUTH-004 - Locked-out user cannot log in

**Test Data:**  
Username: locked_out_user  
Password: secret_sauce

**Expected Result:**  
Login is denied and the application indicates that the user is locked out.

---

## AUTH-005 - User can log out successfully

**Precondition:**  
A valid user is authenticated.

**Expected Result:**  
The user is redirected to the login page and the login form is displayed.

---

## E2E-001 - Complete a purchase successfully

**Precondition:**  
The SauceDemo application is available and a valid test user exists.

**Test Data:**  
Username: standard_user  
Password: secret_sauce  
Product: Sauce Labs Bike Light  
First Name: Daniel  
Last Name: Espinosa  
ZIP/Postal Code: 80123

**Steps:**
1. Open SauceDemo.
2. Log in with valid credentials.
3. Verify that the inventory page is displayed.
4. Add the Sauce Labs Bike Light to the cart.
5. Verify that the cart badge displays 1 item.
6. Open the shopping cart.
7. Verify that the Sauce Labs Bike Light is displayed in the cart.
8. Click Checkout.
9. Enter first name, last name, and ZIP/Postal Code.
10. Click Continue.
11. Verify that the selected product is displayed in the order overview.
12. Click Finish.

**Expected Result:**  
The Checkout: Complete page is displayed and the message **“Thank you for your order!”** is shown.

---

## E2E-002 - Checkout with missing First Name

**Precondition:**  
A valid user is logged in and a product has been added to the cart.

**Test Data:**  
First Name: empty  
Last Name: Espinosa  
ZIP/Postal Code: 80123

**Expected Result:**  
Checkout does not continue and the message **"Error: First Name is required"** is displayed.

---

## E2E-003 - Checkout with missing Last Name

**Precondition:**  
A valid user is logged in and a product has been added to the cart.

**Test Data:**  
First Name: Daniel  
Last Name: empty  
ZIP/Postal Code: 80123

**Expected Result:**  
Checkout does not continue and the message **"Error: Last Name is required"** is displayed.

---

## E2E-004 - Checkout with missing ZIP/Postal Code

**Precondition:**  
A valid user is logged in and a product has been added to the cart.

**Test Data:**  
First Name: Daniel  
Last Name: Espinosa  
ZIP/Postal Code: empty

**Expected Result:**  
Checkout does not continue and the message **"Error: Postal Code is required"** is displayed.