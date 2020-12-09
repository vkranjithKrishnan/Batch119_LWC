import { LightningElement, api } from 'lwc';

export default class ChartBar extends LightningElement {
    @api percentage;

    get styleCls(){
        return `width: ${this.percentage}%`;
    }
}