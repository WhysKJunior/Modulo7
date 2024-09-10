const database = require('./database');

function menuMedico(rl, callback) {
    console.log(`
    1. Adicionar Médico
    2. Listar Médicos
    3. Atualizar Médico
    4. Remover Médico
    0. Voltar
    `);
    rl.question('Escolha uma opção: ', (opcao) => {
        switch (opcao) {
            case '1':
                adicionarMedico(rl, callback);
                break;
            case '2':
                listarMedicos(callback);
                break;
            case '3':
                atualizarMedico(rl, callback);
                break;
            case '4':
                removerMedico(rl, callback);
                break;
            case '0':
                callback();
                break;
            default:
                console.log('Opção inválida');
                menuMedico(rl, callback);
                break;
        }
    });
}

function adicionarMedico(rl, callback) {
    rl.question('Digite o ID do médico: ', (id) => {
        rl.question('Digite o nome do médico: ', (nome) => {
            rl.question('Digite a especialidade do médico: ', (especialidade) => {
                database.medicos.push({ id, nome, especialidade });
                console.log('Médico adicionado com sucesso!');
                callback();
            });
        });
    });
}

function listarMedicos(callback) {
    console.log('Lista de Médicos:');
    database.medicos.forEach(medico => {
        console.log(`ID: ${medico.id}, Nome: ${medico.nome}, Especialidade: ${medico.especialidade}`);
    });
    callback();
}

function atualizarMedico(rl, callback) {
    rl.question('Digite o ID do médico a ser atualizado: ', (id) => {
        const medico = database.medicos.find(m => m.id === id);
        if (medico) {
            rl.question(`Novo nome (${medico.nome}): `, (nome) => {
                rl.question(`Nova especialidade (${medico.especialidade}): `, (especialidade) => {
                    medico.nome = nome || medico.nome;
                    medico.especialidade = especialidade || medico.especialidade;
                    console.log('Médico atualizado com sucesso!');
                    callback();
                });
            });
        } else {
            console.log('Médico não encontrado.');
            callback();
        }
    });
}

function removerMedico(rl, callback) {
    rl.question('Digite o ID do médico a ser removido: ', (id) => {
        const index = database.medicos.findIndex(m => m.id === id);
        if (index !== -1) {
            database.medicos.splice(index, 1);
            console.log('Médico removido com sucesso!');
        } else {
            console.log('Médico não encontrado.');
        }
        callback();
    });
}

module.exports = { menuMedico };
