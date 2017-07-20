import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'

@Component({
    selector: 'add-user',
    templateUrl: './adduser.component.html',
    providers: [UserService]

})

export class addUserComponent {

    constructor(private _UserService: UserService) { }
    email: string = "";
    first_name: string = "";
    last_name: string = "";
    parsedMessage: any = [];
    showErrorMessage: boolean = false;
    success: boolean = false;

    //validating the fields in form based on the userService json.
    onSubmit() {
        let response: any = JSON.parse(this._UserService.getServerResponse());
        this.showErrorMessage = false;
        this.success = false;
        this.parsedMessage = [];
        this.validateUserInputs(response);
        if (this.parsedMessage.length == 0) {
            this.parsedMessage.push("User Added Successfully");
            this.resetingFormValues();
            this.success = true;
        } else {
            this.showErrorMessage = true;
        }
    }

    //Preparing the error message based on the error in the form
    validateUserInputs(response) {
        if (this.email == "") {
            this.parsedMessage.push("Email " + response.email[0]);
        }
        if (this.first_name == "") {
            this.parsedMessage.push("FirstName " + response.first_name[0]);
        }
        if (this.last_name == "") {
            this.parsedMessage.push("LastName " + response.last_name[0]);
        }
    }

    resetingFormValues() {
        this.email = "";
        this.first_name = "";
        this.last_name = "";
    }
}