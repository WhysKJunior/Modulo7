
const { createProduct }  = require('./productData');

const products = [];

function createProductEntry(rl, callback) {
  rl.question('ID do Produto: ', id => {
    rl.question('Nome do Produto: ', name => {
      rl.question('Categoria do Produto: ', categoria => {
        rl.question('Preço do produto: ', preco => {
          rl.question('Quantidade em Estoque: ', estoque => {
            const product = createProduct(id, name, categoria, preco, estoque);
            products.push(product);
            console.log(product)
            console.log('Produto Adicionado com Sucesso.! ');
            callback();
          });
        });
      });
    });
  });
}

function listaProduct() {
  if (products.length === 0) {
    console.log('Nenhum Produto encontrado');
    return;
  }
  console.log('Lista dos produtos : ');
  products.forEach(product => {
    console.log(`ID: ${product.id}, Nome: ${product.name}, Categoria: ${product.categoria}, Preço: ${product.preco}, Estoque: ${product.estoque}`);
  });
}

function updateProduct(rl, callback) {
  rl.question('Acesse com o ID do Produto para Atualizar: ', id => {
    const product = products.find(products => products.id === id);
    if (!product) {
      console.log('Produto não encontrado. ');
      callback();
      return;
    }

    rl.question(`Entre com o novo Nome (Nome antigo, ${product.name}): `, name => {
        product.name = name || product.name;
        rl.question(`Entre com a nova Categoria (Categoria Antigo, ${product.categoriacategoria}): `,categoria => {
          product.categoriacategoria = categoria || product.categoriacategoria;
          rl.question(`Entre com o novo Preço (Preço Antigo, ${product.preco}): `, preco => {
            product.preco = preco || product.preco;
            console.log('Produto atualizado com sucesso. ');
            callback();
          });
        });
      });
    });
  };


function deleteProduct(rl, callback) {
  rl.question('Informe o ID do Produto para ser deletado: ', id => {
    const index = products.findIndex(products => products.id === id);
    if (index === -1) {
      console.log('Produto não encontrado');
      callback();
      return;
    }
    products.splice(index, 1);
    console.log('Produto deletado com Sucesso');
    callback();
  });
}

function searchProduct(rl, callback) {
  console.log('Procurar por :');
  console.log('1. Nome');
  console.log('2. Categoria');
  console.log('3. Preço');
  console.log('4. Estoque');

  rl.question('Escolha uma Opção por favor: ', option => {
    switch (option) {
      case '1':
        rl.question('Entre com o Nome que procura:  ', name => {
          const result = products.filter(product => product.name.toLowerCase().includes(name.toLowerCase()));
          if (result.length > 0) {
            console.log('Produtos encontrados');
            console.log(result);
          } else {
            console.log('Nenhum Produto com esse nome');
          }
          callback();
        });
        break;

      case '2':
        rl.question('Qual Categoria procura : ', categoria => {
          const result = products.filter(product => product.categoria.includes(categoria));
          if (result.length > 0) {
            console.log('Produto encontrados:');
            console.log(result);
          } else {
            console.log('Nenhum Produto com essa Categoria');
          }
          callback();
        });
        break;

      case '3':
        rl.question('Insira o Preço: ', preco => {
          const result = products.filter(product => product.preco === preco);
          if (result.length > 0) {
            console.log('Produtos encontrados:');
            console.log(result);
          } else {
            console.log('Nenhum Produto nesse preço.');
          }
          callback();
        });
        break;
      
      case '4':
        rl.question('Insira a Quantidade em Estoque: ', estoque => {
          const result = products.filter(product => product.estoque);
          if (result.length >= 0) {
            console.log('Produto encontrados:');
            console.log(result);
          } else {
            console.log('Nenhum producte desse ano.');
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
  createProductEntry,
  listaProduct,
  updateProduct,
  deleteProduct,
  searchProduct
};
