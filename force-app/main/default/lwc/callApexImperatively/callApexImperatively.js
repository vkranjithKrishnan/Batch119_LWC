import { LightningElement } from 'lwc';
import getAccountRecords from '@salesforce/apex/AccountHelperClass.getAccountRecords';

export default class CallApexImperatively extends LightningElement {
    accounts;
    accountsError;
    
    handleGetAccounts(){
        getAccountRecords()
            .then( accResult => {
                this.accounts = accResult;
            })
            .catch( error => {
                this.accountsError = error;
            });
    }
}