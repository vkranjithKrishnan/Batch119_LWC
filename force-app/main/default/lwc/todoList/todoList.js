import { LightningElement, api } from 'lwc';

export default class TodoList extends LightningElement {
   priorityFilter = false;
   filteredTodos = [];     
    _todos = [];


    @api 
    get todos(){
        return this._todos;
    }
    set todos(value){
        this._todos = value;
        this.filterTodos();
    }

    handleFiltered(event){
        this.priorityFilter = event.target.checked;
        this.filterTodos();
    }

    filterTodos(){
        if(this.priorityFilter){
            this.filteredTodos = this._todos.filter(
              (todo) => todo.priority === true  
            );
        } else {
            this.filteredTodos = this._todos;
        }
    }
}