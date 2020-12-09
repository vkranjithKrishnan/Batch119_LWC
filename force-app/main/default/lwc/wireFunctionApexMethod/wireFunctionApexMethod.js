import { LightningElement, wire } from 'lwc';
import getAccountRecords from '@salesforce/apex/AccountHelperClass.getAccountRecords';

export default class WireFunctionApexMethod extends LightningElement {
    accounts;
    accountsError;
    
    @wire (getAccountRecords) 
    wiredAccounts({error, data}){
        if(data){
            this.accounts = data;
            this.accountsError = undefined;
        } else if(error){
            this.accounts = undefined;
            this.accountsError = error;
        }

    }
}