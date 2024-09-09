
const { createStudent } = require('./student');

const students = [];

function createStudentEntry(rl, callback) {
  rl.question('Enter student ID: ', id => {
    rl.question('Enter student name: ', name => {
      rl.question('Enter student matricula: ', matricula => {
        rl.question('Enter student curso: ', curso => {
          rl.question('Enter student ano: ', ano => {
            const student = createStudent(id, name, matricula, curso, ano);
            students.push(student);
            console.log(student)
            console.log('Estudante Adicionado com Sucesso.! ');
            callback();
          });
        });
      });
    });
  });
}

function listStudents() {
  if (students.length === 0) {
    console.log('Nenhum Estudante encontrado');
    return;
  }
  console.log('Lista dos Estudantes : ');
  students.forEach(student => {
    console.log(`ID: ${student.id}, Nome: ${student.name}, Matricula: ${student.matricula}, Curso: ${student.curso}, Ano: ${student.ano}`);
  });
}

function updateStudent(rl, callback) {
  rl.question('Acesse com o ID do Estudante para Atualizar: ', id => {
    const student = students.find(students => students.id === id);
    if (!student) {
      console.log('Estudante não encontrado. ');
      callback();
      return;
    }

    rl.question(`Entre com o Novo Nome (${student.name}): `, name => {
      student.name = name || student.name;
      rl.question(`Entre com a nova Matricula (${student.matricula}): `, matricula => {
        student.matricula = matricula || student.matricula;
        rl.question(`Entre com o novo curso (${student.curso}): `, curso => {
          student.curso = curso || student.curso;
          rl.question(`Entre com o novo Ano (${student.ano}): `, ano => {
            student.ano = ano || student.ano;
            console.log('Estudante atualizado com sucesso. ');
            callback();
          });
        });
      });
    });
  });
}

function deleteStudent(rl, callback) {
  rl.question('Informe o ID do Estudante para ser deletado: ', id => {
    const index = students.findIndex(students => students.id === id);
    if (index === -1) {
      console.log('Estudante não encontrado');
      callback();
      return;
    }
    students.splice(index, 1);
    console.log('Estudante deletado com Sucesso');
    callback();
  });
}

function searchStudent(rl, callback) {
  console.log('Procurar por :');
  console.log('1. Nome');
  console.log('2. Matricula');
  console.log('3. Curso');

  rl.question('Escolha uma Opção por favor: ', option => {
    switch (option) {
      case '1':
        rl.question('Entre com o nome que procura:  ', name => {
          const result = students.filter(student => student.name.toLowerCase().includes(name.toLowerCase()));
          if (result.length > 0) {
            console.log('Estudantes encontrados');
            console.log(result);
          } else {
            console.log('Nenhum Estudante com esse nome');
          }
          callback();
        });
        break;

      case '2':
        rl.question('Insira a Matricula: ', matricula => {
          const result = students.filter(student => student.matricula.includes(matricula));
          if (result.length > 0) {
            console.log('Estudantes encontrados:');
            console.log(result);
          } else {
            console.log('Nenhum Estudante com essa matricula');
          }
          callback();
        });
        break;

      case '3':
        rl.question('Insira o curso: ', curso => {
          const result = students.filter(student => student.curso.toLowerCase().includes(curso.toLowerCase()));
          if (result.length > 0) {
            console.log('Estudantes encontrados:');
            console.log(result);
          } else {
            console.log('Nenhum Estudante nesse curso.');
          }
          callback();
        });
        break;

      default:
        console.log('Escolha uma opção valida!');
        callback();
    }
  });
}

module.exports = {
  createStudentEntry,
  listStudents,
  updateStudent,
  deleteStudent,
  searchStudent
};
