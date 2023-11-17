// Método: Função armazenada como propriedade de um objeto


let amigo = {nome: 'José', 
sexo: 'M',
peso: 80,
engordar(p=0){
    console.log('Engordou!')
    this.peso += p
}}

// amigo é o objeto
// nome, peso, sexo, engordar() são propriedades
// as strings e numbers atribuídos são os valores

amigo.engordar()
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)

const person = {
    fName: "Elon",
    lName: "Musk",
    fullName() {
        return `${this.fName} ${this.lName}`
    }
}
console.log(person.fullName())

/*  this  é uma keyword que refere-se a um OBJETO. 
Portanto,  this.fName  refere-se à propriedade  fName  DESTE (this) OBJETO (person). */