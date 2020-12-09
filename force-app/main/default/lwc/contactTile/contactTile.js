import { LightningElement, api } from 'lwc';

export default class ContactTile extends LightningElement {
    @api contact
    contactId;

    handleContactName(event){
        event.preventDefault();
        this.contactId = this.contact.Id;
        const selectedConst = new CustomEvent('selected', {detail: this.contactId});
        this.dispatchEvent(selectedConst);
    }
}