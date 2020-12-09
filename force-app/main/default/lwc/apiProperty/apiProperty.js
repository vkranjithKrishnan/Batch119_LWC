import { LightningElement } from 'lwc';

export default class ApiProperty extends LightningElement {
    percentage = 50;

    handlePercentage(event){
        this.percentage = event.target.value;
    }
}