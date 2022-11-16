class Usuario{
    name;
    surname;
    books;
    pets;
    constructor (nombre, apellido, nombreLibro, autorLibro, mascotas){
        this.name=nombre;
        this.surname=apellido;
        this.books= [{nombre: nombreLibro, autor: autorLibro}];
        this.pets=[mascotas];
    }
getFullName (){
return `${this.name} ${this.surname}`;
}
addPets(newPet){
    this.pets.push(newPet);
}
countPets (){
    return this.pets.length;
}
addBook (nombre, autor){
    this.books.push({nombre, autor});
}
getBookNames(){
    return this.books.map(autor=>autor.nombre);
}
}
const usuario=new Usuario('Sergio', 'Garcia', 'Como hacer que te pasen cosas buenas', 'Marian Rojas', 'gatito');
console.log(usuario.getFullName());
console.log(usuario.pets);
console.log(usuario.countPets());
usuario.addPets("perrito");
console.log(usuario.pets);
console.log(usuario.countPets());
console.log(usuario.books);
usuario.addBook("Los dones de la imperfeccion","Brene Brown");
console.log(usuario.books);
console.log(usuario.getBookNames());