import { LightningElement, api } from 'lwc';

import NAME_FIELD from '@salesforce/schema/Account.Name';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import RATING_FIELD from '@salesforce/schema/Account.Rating';

export default class RecordEditFormExample1 extends LightningElement {
    //exposing to html
    nameField = NAME_FIELD;
    phoneField = PHONE_FIELD;
    industryField = INDUSTRY_FIELD;
    ratingField = RATING_FIELD;

    //global - get record id and object name using flexipage
    @api objectApiName;
    @api recordId;   
    //ownerNameField = OWNERNAME_FIELD;
}