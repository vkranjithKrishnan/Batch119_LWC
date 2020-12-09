import { LightningElement } from 'lwc';

export default class ApiSetterGetter extends LightningElement {
    lastItem = 3;

    todos = [
        {id:1, description: 'LWC basics', priority: true},
        {id:2, description: 'LWC LDS', priority: true },
        {id:3, description: 'Data Service', priority: false}
    ];

    description;

    priority = false;

    handleDescription(event){
        this.description = event.target.value;
    }

    handlePriority(event){
        this.priority = event.target.checked;
    }

    handleAddTodo(){
        this.lastItem = this.lastItem + 1;
        this.todos = [
            ...this.todos,
            {
               id: this.lastItem,
               description: this.description,
               priority: this.priority 
            }
        ];
    }
}