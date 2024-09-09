
const readline = require('readline');

const { createStudentEntry, listStudents, updateStudent, deleteStudent, searchStudent } = require('./studentManager');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function mainMenu() {
  console.log('Sistema Estudantes');
  console.log('1. Add Estudante');
  console.log('2. Listar Estudantes');
  console.log('3. Atualizar Estudante');
  console.log('4. Deletar Estudante');
  console.log('5. Procurar Estudante');
  console.log('6. Exit');

  rl.question('Enter your choice: ', choice => {
    switch (choice) {
      case '1':
        createStudentEntry(rl, mainMenu);
        break;
      case '2':
        listStudents();
        mainMenu();
        break;
      case '3':
        updateStudent(rl, mainMenu);
        break;
      case '4':
        deleteStudent(rl, mainMenu);
        break;
      case '5':
        searchStudent(rl, mainMenu);
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
