/* Exercício 5 - REST/SPREAD */

const arr = [1, 2, 3, 4, 5, 6];

const [x, ...y] = arr;

console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]

// function soma...
function soma (a, ...b) {
    return a + b.reduce((total, proximo) => total + proximo);
}

console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3

const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
};
console.log(usuario);

const usuario2 = { ...usuario, nome: 'Gabriel' };
console.log(usuario2);

const { endereco } = usuario;
const enderecoA = { ...endereco, cidade: 'Lontras' };
const usuario3 = { ...usuario, endereco: enderecoA };
console.log(usuario3);