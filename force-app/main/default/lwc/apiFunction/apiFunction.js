import { LightningElement } from 'lwc';

export default class ApiFunction extends LightningElement {

    callChildFunction(){
        this.template.querySelector('c-clock').refresh();
    }
}