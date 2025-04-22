
export class LoginPage {

    constructor(page){

        this.page = page;
        this.username = '#user-name';
        this.password = '#password';
        this.loginButton = '#login-button';
    }

    async loginToApplication(){

        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();

    }

}

module.exports = LoginPage
