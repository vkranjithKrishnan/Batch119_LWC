import { LightningElement, wire } from 'lwc';
import getContacts  from '@salesforce/apex/ContactController.getContacts';

export default class ContactList extends LightningElement {
    selectedContact;

    @wire (getContacts) contacts;

    handleSelected(event){
        const contactId = event.detail;
        console.log('contact Id ' + contactId);
        console.log('this.contacts.data: ' + this.contacts.data);
        this.selectedContact = this.contacts.data.find( contact => contact.Id === contactId );
    }

    get listIsNotEmpty(){
        return this.contacts && Array.isArray(this.contacts.data) && this.contacts.data.length > 0;
    }
}