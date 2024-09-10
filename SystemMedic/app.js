const readline = require('readline');
const medico = require('./medico');
const paciente = require('./paciente');
const consulta = require('./consulta');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function menu() {
    console.log(`
    Sistema CRUD:
    1. Gerenciar Médicos
    2. Gerenciar Pacientes
    3. Gerenciar Consultas
    0. Sair
    `);
    rl.question('Escolha uma opção: ', (opcao) => {
        switch (opcao) {
            case '1':
                medico.menuMedico(rl, menu);
                break;
            case '2':
                paciente.menuPaciente(rl, menu);
                break;
            case '3':
                consulta.menuConsulta(rl, menu);
                break;
            case '0':
                rl.close();
                break;
            default:
                console.log('Opção inválida');
                menu();
                break;
        }
    });
}

menu();
