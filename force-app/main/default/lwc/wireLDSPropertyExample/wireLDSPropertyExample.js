import { LightningElement, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import ACCOUNT_NAME_FIELD from '@salesforce/schema/Account.Name';
import ACCOUNT_PHONE_FIELD from '@salesforce/schema/Account.Phone';
import ACCOUNT_INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';

export default class WireLDSPropertyExample extends LightningElement {
    @api recordId;
    

    @wire (getRecord, {recordId: '$recordId', fields: [ACCOUNT_NAME_FIELD, ACCOUNT_PHONE_FIELD, ACCOUNT_INDUSTRY_FIELD]})
account; 
}