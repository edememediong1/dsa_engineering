//Some important  Concept to note 
// 1. Reference 2.Comcept vs Scope 3. Instantiation

// 1. Reference
let object1 = { value: 10}
let object2 = object1
let object3 = { value: 10 }


// 2. Context vs Scope

//scope
function b(){
    let a= 4;
}

console.log(a) //a will be undefined here because this is requested outside the scope

//context 
const object4 = {
    a: function() {
        console.log(this)
    }
}



//Instantiation
class Player {
    constructor (name, type) {
        console.log('Player', this);
        this.name = name;
        this.type = type;
    }

    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`)
    }
}


class Wizard extends Player {
    constructor (name, type ){
        super(name, type)
        console.log('Wizard', this)
    }

    play(){
        console.log(`Weeee I'm a ${this.type}`)
    }
}

const wizard1 = new Wizard('Shelly', 'Computer')
const wizard2 = new Wizard('Michelle', 'AI')