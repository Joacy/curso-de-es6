/* Exercício 1 - async/await */

// Funão delay aciona o .then após 1s
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

const umPorSegundo = async () => {
    await delay();
    console.log('1s');

    await delay();
    console.log('2s');

    await delay();
    console.log('3s');
}

umPorSegundo();


import axios from 'axios';

const getUserFromGithub = async (user) => {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`);

        console.log(response.data);
    } catch (error) {
        console.log('Usuário não existe');
    }
}

getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');

class Github {
    static async getRepositories (repo) {
        try {
            const response = await axios.get(`https://api.github.com/repos/${repo}`);

            conslole.log(response.data);
        } catch (error) {
            console.log('Repositório não existe');
        }
    }
}

Github.getRepositories('rocketseat/rocketseat.com.br');
Github.getRepositories('rocketseat/dslkvmskv');

const buscaUsuario = async (usuario) => {
    try {
        const response = await axios.get(`https://api.github.com/users/${usuario}`);

        console.log(response.data);
    } catch (error) {
        console.log('Usuário não existe');
    }
}

buscaUsuario('diego3g');