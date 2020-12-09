import { LightningElement, api } from 'lwc';

export default class ContactListItem extends LightningElement{
    @api contact;

    handleContactName(event){
        //
        event.preventDefault();
              
        const selectedConst = new CustomEvent('selected', {bubbles:true});
        this.dispatchEvent(selectedConst);
    }
}