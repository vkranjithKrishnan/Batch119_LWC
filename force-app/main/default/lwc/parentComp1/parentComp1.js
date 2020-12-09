import { LightningElement } from 'lwc';

export default class ParentComp1 extends LightningElement {
    prop;

    handleEventVar(event){
        this.prop = event.detail;
        console.log('handle by parent: ');
    }
}