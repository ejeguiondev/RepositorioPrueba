//Formas de agregarle nuevas variables a un objet

let person = {
    Name:"hola",
    Edad:12 
}

//person.Pais =  "argentina"
//person = {...person,Pais:"argentina"}
//person["Pais"] = "Argentina"
Object.defineProperty(person,"Pais",{value:"Argentina"})

console.log(person)

//Otra forma de crear un array

let arrayAux = []

let arrayAux2  = new Array(22);

//Usar la interpolacion 

let myStrig = "Mundo abierto"

let strigPrueba = `Este es un ${myStrig}`
