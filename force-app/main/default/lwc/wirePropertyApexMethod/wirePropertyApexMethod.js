import { LightningElement, wire } from 'lwc';
import getAccountRecords from '@salesforce/apex/AccountHelperClass.getAccountRecords';

export default class WirePropertyApexMethod extends LightningElement {
    @wire (getAccountRecords) 
    accounts;
}