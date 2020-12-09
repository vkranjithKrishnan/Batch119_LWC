import { LightningElement, wire } from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContacts';

export default class ContactBubbleExample extends LightningElement {
    selectedContact;

    @wire (getContacts) contacts;

    handleOnSelected(event){
        this.selectedContact = event.target.contact;
    }
}