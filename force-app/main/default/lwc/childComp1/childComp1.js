import { LightningElement } from 'lwc';

export default class ChildComp1 extends LightningElement {
    nameValue;

    handleChange(event){
        console.log('in child');
        this.nameValue = event.target.value;
        const eventVar = new CustomEvent('myevent', {detail: this.nameValue});
        this.dispatchEvent(eventVar);
    }
}