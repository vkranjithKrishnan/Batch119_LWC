import { LightningElement, api } from 'lwc';

export default class AccountTile extends LightningElement {
    @api acc; //this property is now public to other modules
}