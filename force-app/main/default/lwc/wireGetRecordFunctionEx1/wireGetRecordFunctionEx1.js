import { LightningElement, track, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';

export default class WireGetRecordFunctionEx1 extends LightningElement {
    @api recordId;
    @track accRecord;

    @wire (getRecord, {recordId: '$recordId', fields: ['Account.Name', 'Account.Phone']}) 
    wiredAccountFunc({error, data}){
        if(data){            
            this.accRecord = data;
        }
    }

    get name(){
        return this.accRecord.fields.Name.value;
    }

    get phone(){
        return this.accRecord.fields.Phone.value;
    }
}