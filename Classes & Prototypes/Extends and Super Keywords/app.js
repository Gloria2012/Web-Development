class Pet {
    constructor(name, age) {
        console.log('IN PET CONSTRUCTOR');
        this.name = name;
        this.age = age;
    }
    eat(){
        return `${this.name} is eating!`;
    }
}

class Cat extends Pet{
    constructor(name, age, livsleft = 9){
        console.log('IN CAT CONSTRUCTOR');
        super(name, age);
        //this.name = name;
        //this.age = age;
        this.livsleft = 9;
    }
    meow() {
        return 'MEOW!!!!'
    }
}

class Dog extends Pet{
    bark(){
        return 'WOOF!!!'
    }
}


/*
class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat(){
        return `${this.name} is eating!`;
    }
    meow() {
        reutrn 'MEOW!!!!'
    }
}

class Dog {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat(){
        return `${this.name} is eating!`;
    }
    bark(){
        return 'WOOF!!!'
    }
}*/
