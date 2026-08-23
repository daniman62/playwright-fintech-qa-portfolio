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