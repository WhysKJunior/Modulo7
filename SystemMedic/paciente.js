const database = require('./database');

function menuPaciente(rl, callback) {
    console.log(`
    1. Adicionar Paciente
    2. Listar Pacientes
    3. Atualizar Paciente
    4. Remover Paciente
    0. Voltar
    `);
    rl.question('Escolha uma opção: ', (opcao) => {
        switch (opcao) {
            case '1':
                adicionarPaciente(rl, callback);
                break;
            case '2':
                listarPacientes(callback);
                break;
            case '3':
                atualizarPaciente(rl, callback);
                break;
            case '4':
                removerPaciente(rl, callback);
                break;
            case '0':
                callback();
                break;
            default:
                console.log('Opção inválida');
                menuPaciente(rl, callback);
                break;
        }
    });
}

function adicionarPaciente(rl, callback) {
    rl.question('Digite o ID do paciente: ', (id) => {
        rl.question('Digite o nome do paciente: ', (nome) => {
            rl.question('Digite a data de nascimento do paciente (dd/mm/aaaa): ', (dataNascimento) => {
                database.pacientes.push({ id, nome, dataNascimento });
                console.log('Paciente adicionado com sucesso!');
                callback();
            });
        });
    });
}

function listarPacientes(callback) {
    console.log('Lista de Pacientes:');
    database.pacientes.forEach(paciente => {
        console.log(`ID: ${paciente.id}, Nome: ${paciente.nome}, Data de Nascimento: ${paciente.dataNascimento}`);
    });
    callback();
}

function atualizarPaciente(rl, callback) {
    rl.question('Digite o ID do paciente a ser atualizado: ', (id) => {
        const paciente = database.pacientes.find(p => p.id === id);
        if (paciente) {
            rl.question(`Novo nome (${paciente.nome}): `, (nome) => {
                rl.question(`Nova data de nascimento (${paciente.dataNascimento}): `, (dataNascimento) => {
                    paciente.nome = nome || paciente.nome;
                    paciente.dataNascimento = dataNascimento || paciente.dataNascimento;
                    console.log('Paciente atualizado com sucesso!');
                    callback();
                });
            });
        } else {
            console.log('Paciente não encontrado.');
            callback();
        }
    });
}

function removerPaciente(rl, callback) {
    rl.question('Digite o ID do paciente a ser removido: ', (id) => {
        const index = database.pacientes.findIndex(p => p.id === id);
        if (index !== -1) {
            database.pacientes.splice(index, 1);
            console.log('Paciente removido com sucesso!');
        } else {
            console.log('Paciente não encontrado.');
        }
        callback();
    });
}

module.exports = { menuPaciente };
