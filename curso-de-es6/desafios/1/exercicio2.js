/* Exercício 2 - Operações com Array */

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