
const { createEmployee } = require('./employee');

const employees = [];

function createEmployeeEntry(rl, callback) {
  rl.question('ID do novo Funcionario: ', id => {
    const idExistente = employees.find(employee => employee.id === id);
    if (idExistente) {
      console.log('ID de funcionario já existente. Digite um novo.');
      callback(); 
      return;
    }
    rl.question('Nome do Funcionario: ', name => {
      rl.question('Cargo: ', cargo => {
        rl.question('Departamento: ', departamento => {
          rl.question('Salario: ', salario => {
            const employee = createEmployee(id, name, cargo, departamento, salario);
            employees.push(employee);
            console.log(employee)
            console.log('Funcionario Adicionado com Sucesso.! ');
            callback();
          });
        });
      });
    });
  });
}

function listEmployees() {
  if (employees.length === 0) {
    console.log('Nenhum Funcionario encontrado');
    return;
  }
  console.log('Lista dos Funcionarios : ');
  employees.forEach(employee => {
    console.log(`ID: ${employee.id}, Nome: ${employee.name}, Cargo: ${employee.cargo}, Departamento: ${employee.departamento}, Salario: ${employee.salario}`);
  });
}

function updateEmployee(rl, callback) {
  rl.question('Acesse com o ID do Funcionario para Atualizar: ', id => {
    const employee = employees.find(employees => employees.id === id);
    if (!employee) {
      console.log('Funcionario não encontrado. ');
      callback();
      return;
    }

    rl.question(`Entre com o Novo Nome (${employee.name}): `, name => {
      employee.name = name || employee.name;
      rl.question(`Entre com o novo Cargo (${employee.cargo}): `, cargo => {
        employee.cargo = cargo || employee.cargo;
        rl.question(`Entre com o novo Departamento (${employee.departamento}): `, departamento => {
          employee.departamento = departamento || employee.departamento;
          rl.question(`Entre com o novo Salario (${employee.salario}): `, salario => {
            employee.salario= salario || employee.salario;
            console.log('Funcionario atualizado com sucesso. ');
            callback();
          });
        });
      });
    });
  });
}

function deleteEmployee(rl, callback) {
  rl.question('Informe o ID do Funcionario para ser deletado: ', id => {
    const index = employees.findIndex(employees => employees.id === id);
    if (index === -1) {
      console.log('Funcionario não encontrado');
      callback();
      return;
    }
    employees.splice(index, 1);
    console.log('Funcionario deletado com Sucesso');
    callback();
  });
}

function searchEmployee(rl, callback) {
  console.log('Procurar por :');
  console.log('1. Nome');
  console.log('2. Cargo');
  console.log('3. Departamento');
  console.log('4. Salario');

  rl.question('Escolha uma Opção por favor: ', option => {
    switch (option) {
      case '1':
        rl.question('Entre com o Nome que procura:  ', name => {
          const result = employees.filter(employee => employee.name.toLowerCase().includes(name.toLowerCase()));
          if (result.length > 0) {
            console.log('Funcionarios encontrados');
            console.log(result);
          } else {
            console.log('Nenhum Funcionario com esse nome');
          }
          callback();
        });
        break;

      case '2':
        rl.question('Insira o Cargo: ', cargo => {
          const result = employees.filter(employee => employee.cargo.includes(cargo));
          if (result.length > 0) {
            console.log('Funcionarios encontrados:');
            console.log(result);
          } else {
            console.log('Nenhum Funcionario com esse cargo');
          }
          callback();
        });
        break;

      case '3':
        rl.question('Insira o departamento: ', departamento => {
          const result = employees.filter(employee => employee.departamento.toLowerCase().includes(departamento.toLowerCase()));
          if (result.length > 0) {
            console.log('Funcionarios encontrados:');
            console.log(result);
          } else {
            console.log('Nenhum Funcionario nesse departamento.');
          }
          callback();
        });
        break;
      case '4':
        rl.question('Insira o Salario: ', salario => {
          const result = employees.filter(employee => employee.salario >=parseFloat(salario))
          if (result.length > 0){
            console.log('Funcionarios acima desse salario :')
            console.log(result)
          } else {
            console.log('Nenhum Funcionario com esse salario')
          }
          callback()
        });
        break
      default:
        console.log('Escolha uma opção valida!');
        callback();
    }
  });
}

module.exports = {
  createEmployeeEntry,
  listEmployees,
  updateEmployee,
  deleteEmployee,
  searchEmployee
};
