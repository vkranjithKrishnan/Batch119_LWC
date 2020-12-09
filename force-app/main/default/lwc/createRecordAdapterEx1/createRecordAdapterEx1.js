import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';

export default class CreateRecordAdapterEx1 extends LightningElement {
    name = '';
    accountId = '';

    handleOnChange(event){
      this.name = event.target.value;
      console.log('name: ', this.name);
    } 

    insertAccount()  {
        const fields = {} ;
        fields[NAME_FIELD.fieldApiName] = this.name;
        const recordInput = {apiName: ACCOUNT_OBJECT.objectApiName, fields};

       createRecord(recordInput)
           .then(account => {
              this.accountId = account.id;
              console.log('account.Id: ', account.id);
              console.log('Id: ', this.accountId);
           })
           .catch(error => {
                console.log('message ' , error.body.message);
           });
    }
}