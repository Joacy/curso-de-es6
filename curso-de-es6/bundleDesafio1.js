"use strict";

/* Exercício 4 - Desestruturação */
var empresa = {
  nome: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC'
  }
};
var nome = empresa.nome,
    endereco = empresa.endereco;
var cidade = endereco.cidade,
    estado = endereco.estado;
console.log(nome); // Rocketseat

console.log(cidade); // Rio do Sul

console.log(estado); // SC

function mostraInfo() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : usuario,
      nome = _ref.nome,
      idade = _ref.idade;

  return "".concat(nome, " tem ").concat(idade, " anos.");
}

console.log(mostraInfo({
  nome: 'Diego',
  idade: 23
}));
