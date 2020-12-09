import { LightningElement, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';

import RECORD_SELECTED_CHANNEL from '@salesforce/messageChannel/Record_Selected__c';
import { subscribe, unsubscribe, MessageContext } from 'lightning/messageService';

import NAME_FIELD from '@salesforce/schema/Contact.Name';
import TITLE_FIELD from '@salesforce/schema/Contact.Title';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import PHONE_FIELD from '@salesforce/schema/Contact.Phone';

const fields = [
    NAME_FIELD,
    TITLE_FIELD,
    EMAIL_FIELD,
    PHONE_FIELD
];

export default class LmsSubcriberWebComponent extends LightningElement {
    subcription = null;
    contactId;

  @wire (getRecord, {recordId : '$contactId', fields})
  wireRecord({error, data})  {
        if(error){
            console.log('error');
        } else if(data){
            fields.forEach(
                (item) => (this[item.fieldApiName] = getFieldValue(data, item))
            );
        }
  }

  @wire (MessageContext)
  messageContext;

  subcribeToMessageChannel(){
     this.subcription = subscribe(this.messageContext,RECORD_SELECTED_CHANNEL, (message) => this.handleMessageChannel(message));
  }

  handleMessageChannel(message){
     this.contactId = message.recordId;
  }
  //

  connectedCallback(){
      this.subcribeToMessageChannel();
  }
}