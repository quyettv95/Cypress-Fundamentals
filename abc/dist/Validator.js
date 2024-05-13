"use strict";
class BaseException {
    constructor(message) {
        this.message = message;
    }
}
class UserNotValidException extends BaseException {
}
class PasswordNotValidException extends BaseException {
}
class Account {
    constructor(username, password) {
        if (username.length < 8) {
            throw new UserNotValidException("Username phải trên 8 ký tự");
        }
        if (!username.includes('@')) {
            throw new UserNotValidException("Username phải chưa ký tự @");
        }
        if (password.length < 8) {
            throw new PasswordNotValidException("Password phải trên 8 ký tự");
        }
        if (password.length > 15) {
            throw new PasswordNotValidException("Password Password tối đa 15 ký tự");
        }
        if (!/[A-Z]/.test(password)) {
            throw new PasswordNotValidException("Password Phải có 1 ký tự viết hoa");
        }
        this.username = username;
        this.password = password;
    }
}
class Facebook {
    constructor(accounts) {
        this.accounts = accounts;
    }
}
let facebook = new Facebook([
    new Account('admin@topcv.vn', 'Admin123'),
    new Account('admin@itlearn.vn', 'aDmin123'),
    new Account('quyettv@itlearn.vn', 'quyeTsdsds'),
]);
let buttonLogin = document.getElementById('btn_login');
buttonLogin === null || buttonLogin === void 0 ? void 0 : buttonLogin.addEventListener('click', (e) => {
    e.preventDefault();
    let usernameEle = document.getElementById('username');
    let username = usernameEle.value;
    let passwordEle = document.getElementById('password');
    let password = passwordEle.value;
    let usernameErr = document.getElementById('username_err');
    usernameErr === null || usernameErr === void 0 ? void 0 : usernameErr.style.setProperty('display', 'none');
    let passwordErr = document.getElementById('password_err');
    passwordErr === null || passwordErr === void 0 ? void 0 : passwordErr.style.setProperty('display', 'none');
    let sucessMessage = document.getElementById('login_success');
    let loginFailMessage = document.getElementById('login_fail');
    sucessMessage === null || sucessMessage === void 0 ? void 0 : sucessMessage.style.setProperty('display', 'none');
    loginFailMessage === null || loginFailMessage === void 0 ? void 0 : loginFailMessage.style.setProperty('display', 'none');
    try {
        let account = new Account(username, password);
    }
    catch (e) {
        console.log(e);
        console.log(typeof e);
        if (e instanceof UserNotValidException) {
            usernameErr === null || usernameErr === void 0 ? void 0 : usernameErr.style.setProperty('display', 'block');
            usernameErr.innerText = e.message;
        }
        if (e instanceof PasswordNotValidException) {
            passwordErr === null || passwordErr === void 0 ? void 0 : passwordErr.style.setProperty('display', 'block');
            passwordErr.innerText = e.message;
        }
        return;
    }
    for (let account of facebook.accounts) {
        // console.log(account)
        if (username == account.username && password == account.password) {
            sucessMessage === null || sucessMessage === void 0 ? void 0 : sucessMessage.style.setProperty('display', 'block');
            return;
        }
    }
    loginFailMessage === null || loginFailMessage === void 0 ? void 0 : loginFailMessage.style.setProperty('display', 'block');
});
