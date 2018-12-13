import { observable, computed } from 'mobx';

let nextId = 0;

export default class Todo {
    constructor(text) {
        this.text = text;
    }
    
    id = nextId++;
    @observable done = false;
    @observable text = "";
    @computed
    get description() {
        const checkOrNah = this.done ? '✔️' : ' ';
        return `(${checkOrNah}) ${this.text}`;
    }
}