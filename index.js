class Stack {
    constructor(){
        this.dataStore = [];
        this.top = 0;
    }

    push(element){
        this.dataStore[this.top++] = element
    }

    pop(){
        return this.dataStore[--this.top]
    }

    peek(){
        return this.dataStore[this.top-1]
    }

    clear(){
        this.top = 0
    }

    length(){
        return this.top
    }

}

