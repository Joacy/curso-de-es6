// import "../desafios/1/exercicio1";
// import "../desafios/1/exercicio2";
// import "../desafios/1/exercicio3";
// import "../desafios/1/exercicio4";
// import "../desafios/1/exercicio5";
// import "../desafios/1/exercicio6";
// import "../desafios/1/exercicio7";
// import "../desafios/2/exercicio1";
// import "../desafios/3/exercicio1";

// const minhaPromise = () => new Promise((resolve, reject) => {
//     setTimeout(() => { resolve("OK") }, 2000)
// });

// minhaPromise()
//     .then(response => {
//         console.log(response)
//     })
//     .catch(err => {

//     });

// const executaPromise = async () => {
//     console.log(await minhaPromise());
//     console.log(await minhaPromise());
//     console.log(await minhaPromise());
// };

// executaPromise();

class App {
    constructor() {
        this.repositories = [];

        this.formEl = document.getElementById('repo-form');
        this.listEl = document.getElementById('repo-list');

        this.registerHandlers();
    }

    registerHandlers () {
        this.formEl.onsubmit = event => this.addRepository(event);
    }

    addRepository (event) {
        event.preventDefault();

        this.repositories.push({
            name: 'Rocketseat',
            description: 'Tire a sua ideia do papel e dê vida à sua startup.',
            avatar_url: 'https://avatars0.githubusercontent.com/u/28929274?s=200&v=4',
            html_url: 'https://github.com/rocketseat',
        });

        this.render();
    }

    render () {
        this.listEl.innerHTML = '';

        this.repositories.forEach(repo => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.description));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target', '_blank');
            linkEl.appendChild(document.createTextNode('Acessar'));
            linkEl.setAttribute('href', repo.html_url);

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descriptionEl);
            listItemEl.appendChild(linkEl);

            this.listEl.appendChild(listItemEl);
        });
    }
}

new App();