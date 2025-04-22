
export class CheckoutPage {
 
  
    constructor(page) {

      this.page = page;
      this.firstNameInput = page.locator('[data-test="firstName"]');
      this.lastNameInput = page.locator('[data-test="lastName"]');
      this.postalCodeInput = page.locator('[data-test="postalCode"]');
      this.continueButton = page.locator('[data-test="continue"]');
      this.finishButton = page.locator('[data-test="finish"]');
      this.confirmationMessage = page.locator('.complete-header');
      
    }
  
    async fillInformation(first, last, zip) {

        await this.firstNameInput.fill(first);
        await this.lastNameInput.fill(last);
        await this.postalCodeInput.fill(zip);
        await this.continueButton.click();

    }
  
    async finishOrder() {
      await this.finishButton.click();
    }
  
    async verifyConfirmation() {
      await this.confirmationMessage.waitFor();
    }
  }