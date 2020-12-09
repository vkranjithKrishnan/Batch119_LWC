import { LightningElement, wire } from 'lwc';
import findAccounts from '@salesforce/apex/AccountHelperClass.findAccounts';

export default class WirePropertyParamApexMethod extends LightningElement {
    inputKey = '';

    @wire (findAccounts, {searchText: '$inputKey'})
    accounts;

    handleOnChange(event){
        //to avoid large number of apex calls for every characters entered, implement the delay 
        //functionality 
        window.clearTimeout(this.delayTimeout);
        const userInput = event.target.value;
        this.delayTimeout = setTimeout(() => {
            this.inputKey = userInput;
        }, 300);
    }

}