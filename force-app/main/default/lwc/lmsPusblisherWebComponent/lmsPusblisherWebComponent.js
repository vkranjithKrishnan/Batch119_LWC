import { LightningElement, wire } from 'lwc';
import getContacts  from '@salesforce/apex/ContactController.getContacts';

import RECORD_SELECTED_CHANNEL from '@salesforce/messageChannel/Record_Selected__c';
import { publish, MessageContext } from 'lightning/messageService';

export default class LmsPusblisherWebComponent extends LightningElement {
    @wire (getContacts) contacts;

    @wire (MessageContext)
    messageContext;
 
    handleSelected(event){
        publish(this.messageContext, RECORD_SELECTED_CHANNEL, {recordId: event.target.contact.Id});
    }
}