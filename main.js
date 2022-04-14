class Person{
    #name
    #age
    constructor(obj){
        this.#name=obj.name
        this.#age=obj.age
    }
    getName(){
        return this.#name
    }
    setName(value){
        this.#name=value
    }
    getAge(){
        return this.#age
    }
    setAge(value){
        this.#age=value
    }
}

const vetor = [
    new Person({name: 'Renato', age: 27}),
    new Person({name: 'Ricardo', age: 28}),
    new Person({name: 'Tiago', age: 21}),
    new Person({name: 'MiguelLima', age: 15}),
    new Person({name: 'Joao', age: 26}),
    new Person({name: 'Camarao', age: 69}),
    new Person({name: 'Pedro', age: 27}),
    new Person({name: 'Tatiana', age: 32}),
    new Person({name: 'Antonio', age: 15}),
    new Person({name: 'Antonino', age: 6}),
]

function createPerson(name,age){
    clear();

    const p = new Person({name:name,age:age})
    vetor.push(p)
    
    print();
}

function clear(){
    vetor.forEach((p,index)=> {
        document.getElementById("li_" + index).remove();
        document.getElementById("but_" + index).remove();
    });
}

function print(){
    
    const tag = document.querySelector('ul')
    
    vetor.forEach((p,index)=> {
        const liEl = document.createElement('li');
        const but = document.createElement("button");
        const labelButton=but.textContent= "Delete";
        liEl.textContent=`${p.getName()} - ${p.getAge()}`;
        liEl.id = "li_" + index;
        but.id = "but_" + index;

        tag.append(liEl,but)
        
        const elem = document.getElementById(but.id);

        elem.onclick = function() {
            clear();
            vetor.splice(index, 1);
            print();
        };

    });
}

function onLoad(){
    print();
}