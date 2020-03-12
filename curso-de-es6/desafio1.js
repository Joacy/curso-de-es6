/* Exercício 1 */

class Usuario {
    constructor(email, senha) {
        this.email = email;
        this.senha = senha;
        this.admin = false;
    }

    isAdmin () {
        return this.admin;
    }
}

class Admin extends Usuario {
    constructor(email, senha) {
        super(email, senha);

        this.admin = true;
    }
}

const User1 = new Usuario("email@teste.com", "senha123");
const Adm1 = new Admin("email@teste.com", "senha123");

console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true

/* Exercício 2 */

const usuarios = [
    { nome: "Diego", idade: 23, empresa: "Rocketseat" },
    { nome: "Gabriel", idade: 15, empresa: "Rocketseat" },
    { nome: "Lucas", idade: 30, empresa: "Facebook" },
];

const idades = usuarios.map(function (item) {
    return item["idade"];
});

console.log(idades);

const maisQueDezoito = usuarios.filter(function (item) {
    return (item["empresa"] === "Rocketseat") && (item["idade"] > 18);
});

console.log(maisQueDezoito);

const trabalhaNoGoogle = usuarios.find(function (item) {
    return item["empresa"] === "Google";
});

console.log(trabalhaNoGoogle);

const usuariosIdadeDobro = usuarios.map(function (item) {
    item["idade"] = item["idade"] * 2;
    return item;
});

console.log(usuariosIdadeDobro);

const menosQue50 = usuariosIdadeDobro.filter(function (item) {
    return (item["idade"] <= 50);
});

console.log(menosQue50);

/* Exercício 3 */

