class Hero {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
        this.attack = '';   
    }

    atacar() {

        if (this.type === 'mage'){
            this.attack = 'usou magia';
        }
        else if (this.type === 'warrior'){
            this.attack = 'usou espada';
        }
        else if (this.type === 'monk'){
            this.attack = 'usou artes marciais';
        }
        else if (this.type === 'ninja'){
            this.attack = 'usou shuriken';
        }
        
        console.log(`O ${this.type} atacou usando ${this.attack}`)
    }
}
