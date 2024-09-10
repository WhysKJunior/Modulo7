const database = require('./database');

function menuConsulta(rl, callback) {
    console.log(`
    1. Adicionar Consulta
    2. Listar Consultas
    3. Atualizar Consulta
    4. Remover Consulta
    0. Voltar
    `);
    rl.question('Escolha uma opção: ', (opcao) => {
        switch (opcao) {
            case '1':
                adicionarConsulta(rl, callback);
                break;
            case '2':
                listarConsultas(callback);
                break;
            case '3':
                atualizarConsulta(rl, callback);
                break;
            case '4':
                removerConsulta(rl, callback);
                break;
            case '0':
                callback();
                break;
            default:
                console.log('Opção inválida');
                menuConsulta(rl, callback);
                break;
        }
    });
}

function adicionarConsulta(rl, callback) {
    rl.question('Digite o ID da consulta: ', (id) => {
        rl.question('Digite a data da consulta (dd/mm/aaaa): ', (data) => {
            rl.question('Digite o ID do médico: ', (idMedico) => {
                rl.question('Digite o ID do paciente: ', (idPaciente) => {
                    rl.question('Digite a descrição da consulta: ', (descricao) => {
                        database.consultas.push({ id, data, idMedico, idPaciente, descricao });
                        console.log('Consulta adicionada com sucesso!');
                        callback();
                    });
                });
            });
        });
    });
}

function listarConsultas(callback) {
    console.log('Lista de Consultas:');
    database.consultas.forEach(consulta => {
        console.log(`ID: ${consulta.id}, Data: ${consulta.data}, Médico: ${consulta.idMedico}, Paciente: ${consulta.idPaciente}, Descrição: ${consulta.descricao}`);
    });
    callback();
}

function atualizarConsulta(rl, callback) {
    rl.question('Digite o ID da consulta a ser atualizada: ', (id) => {
        const consulta = database.consultas.find(c => c.id === id);
        if (consulta) {
            rl.question(`Nova data (${consulta.data}): `, (data) => {
                rl.question(`Novo ID do médico (${consulta.idMedico}): `, (idMedico) => {
                    rl.question(`Novo ID do paciente (${consulta.idPaciente}): `, (idPaciente) => {
                        rl.question(`Nova descrição (${consulta.descricao}): `, (descricao) => {
                            consulta.data = data || consulta.data;
                            consulta.idMedico = idMedico || consulta.idMedico;
                            consulta.idPaciente = idPaciente || consulta.idPaciente;
                            consulta.descricao = descricao || consulta.descricao;
                            console.log('Consulta atualizada com sucesso!');
                            callback();
                        });
                    });
                });
            });
        } else {
            console.log('Consulta não encontrada.');
            callback();
        }
    });
}

function removerConsulta(rl, callback) {
    rl.question('Digite o ID da consulta a ser removida: ', (id) => {
        const index = database.consultas.findIndex(c => c.id === id);
        if (index !== -1) {
            database.consultas.splice(index, 1);
            console.log('Consulta removida com sucesso!');
        } else {
            console.log('Consulta não encontrada.');
        }
        callback();
    });
}

module.exports = { menuConsulta };
