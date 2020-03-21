class List {
    constructor() {
        this.data = [];
    }

    add (data) {
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List {
    constructor() {
        super();

        this.usuario = "Joacy";
    }

    mostraUsuario () {
        console.log(this.usuario);
    }
}

var MinhaLista = new TodoList();

document.getElementById("novotodo").onclick = function () {
    MinhaLista.add("Novo Todo");
}

MinhaLista.mostraUsuario();

import "../desafios/1/exercicio1";
import "../desafios/1/exercicio2";
import "../desafios/1/exercicio3";
import "../desafios/1/exercicio4";
import "../desafios/1/exercicio5";
import "../desafios/1/exercicio6";
import "../desafios/1/exercicio7";
import "../desafios/2/exercicio1";