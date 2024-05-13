class BaseException {
    public message: string;
    constructor (message: string) {
        this.message = message;
    }

}

class UserNotValidException extends BaseException {
    
}
class PasswordNotValidException extends BaseException {

}

class Account {
    public username:string;
    public password:string;
    
    constructor (username: string, password: string) {
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

    // username tối thiểu 8 ký tự
    // username phải có ký tự @
    
    // password tối thiểu 8 ký tự
    // password phải có ký tự viết hoa tối đa 15 ký tự

    // admin@itlearn.edu.vn
    // admin123

    // admin2@itlearn.edu.vn
    // admin124
}


class Facebook {
    public accounts: Account[];

    constructor(accounts: Account[]) {
        this.accounts = accounts;
    }

    // check(username: string, password: string): boolean {
    //     for (let account of this.accounts) {
    //         account.check();
    //     }

    //     return true;
    // }
}


   
let facebook = new Facebook([
    new Account(
        'admin@topcv.vn',
        'Admin123'
    ),
    new Account(
        'admin@itlearn.vn',
        'aDmin123'
    ),
    new Account(
        'quyettv@itlearn.vn',
        'quyeTsdsds'
    ),
]);

let buttonLogin = document.getElementById('btn_login');
buttonLogin?.addEventListener('click', (e) => {
    e.preventDefault();
   
    let usernameEle = <HTMLInputElement>document.getElementById('username');
    let username = usernameEle.value;
    let passwordEle = <HTMLInputElement>document.getElementById('password');
    let password = passwordEle.value;
    let usernameErr = <HTMLElement>document.getElementById('username_err');
    usernameErr?.style.setProperty('display', 'none');

    let passwordErr = <HTMLElement>document.getElementById('password_err');
    passwordErr?.style.setProperty('display', 'none');
    let sucessMessage = document.getElementById('login_success');
    let loginFailMessage = document.getElementById('login_fail');
    sucessMessage?.style.setProperty('display', 'none');
    loginFailMessage?.style.setProperty('display', 'none');
    
    try {
        let account: Account = new Account(username, password);
    } catch (e) {
        console.log(e);
        console.log(typeof e);
        if (e instanceof UserNotValidException) {
            usernameErr?.style.setProperty('display', 'block');
            usernameErr.innerText = e.message;
        }
        if (e instanceof PasswordNotValidException) {
            passwordErr?.style.setProperty('display', 'block');
            passwordErr.innerText = e.message;
        }
        return;
    }

    

    for (let account of facebook.accounts) {
        // console.log(account)
        if (username == account.username && password == account.password) {
            sucessMessage?.style.setProperty('display', 'block');
            return;
        }
    }

    loginFailMessage?.style.setProperty('display', 'block');
});