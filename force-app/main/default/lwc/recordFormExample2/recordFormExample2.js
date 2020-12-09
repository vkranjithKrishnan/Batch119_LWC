import { LightningElement, api } from 'lwc';
import  NAME_FIELD   from '@salesforce/schema/Contact.Name';
import  TITLE_FIELD   from '@salesforce/schema/Contact.Title';
import  PHONE_FIELD   from '@salesforce/schema/Contact.Phone';
import  EMAIL_FIELD   from '@salesforce/schema/Contact.Email';
import  ACCOUNTID_FIELD   from '@salesforce/schema/Contact.AccountId';

export default class RecordFormExample2 extends LightningElement {
    @api recordId;
    @api objectApiName;

    fields = [NAME_FIELD, TITLE_FIELD, PHONE_FIELD, EMAIL_FIELD, ACCOUNTID_FIELD];
}