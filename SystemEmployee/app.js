
const readline = require('readline');

const { createEmployeeEntry, listEmployees, updateEmployee, deleteEmployee, searchEmployee } = require('./employeeManager');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function mainMenu() {
  console.log('Sistema de Funcionarios');
  console.log('1. Add Funcionario');
  console.log('2. Listar Funcionarios');
  console.log('3. Atualizar Funcionario');
  console.log('4. Deletar Funcionario');
  console.log('5. Procurar Funcionario');
  console.log('6. Exit');

  rl.question('Enter your choice: ', choice => {
    switch (choice) {
      case '1':
        createEmployeeEntry(rl, mainMenu);
        break;
      case '2':
        listEmployees();
        mainMenu();
        break;
      case '3':
        updateEmployee(rl, mainMenu);
        break;
      case '4':
        deleteEmployee(rl, mainMenu);
        break;
      case '5':
        searchEmployee(rl, mainMenu);
        break;
      case '6':
        console.log('Exiting...');
        rl.close();
        break;
      default:
        console.log('Escolha invalida. tente novamente! ');
        mainMenu();
    }
  });
}

mainMenu();
