const sinon = require('sinon');
const { expect } = require('chai');
const { getAllProducts, 
        getProductsById, 
        createProduct,
        updateProduct, 
        deleteProduct} = require('../../../models/productsModel');
const connection = require('../../../models/connection');

describe('busca todos os produtos no banco de dados', () => {
    
    describe('getAllProducts', () => {

        before( async () => {
            sinon.stub(connection, 'execute').resolves([
                {
                    "id": 1,
                    "name": "Martelo de Thor",
                    "quantity": 10,
                }
        ])
        });
        after(() => {
            connection.execute.restore();
        })

        it('verifica se é um objeto',async  () => {
            const [resultado] = await getAllProducts(); 
            expect(resultado).to.be.an('object');
        });
        it('verifica se o objeto não está vazio', async () => {
            const resultado = await getAllProducts(); 
            expect(resultado).to.not.be.empty;
        })
        it('verifica se o objeto possui as propriedades, "id", "name", "quantity"', async () => {
            const [resultado] = await getAllProducts(); 
            expect(resultado).to.includes.all.keys("id", "name", "quantity");
        });
    })
    describe('getAllProducts vazio', () => {

        before( async () => {
            sinon.stub(connection, 'execute').resolves([{}])
        });
        after(() => {
            connection.execute.restore();
        })

        it('verifica se é um objeto', async () => {
            const [resultado] = await getAllProducts(); 
            expect(resultado).to.be.an('object');
        });
        it('verifica se o objeto está vazio', async () => {
            const [resultado] = await getAllProducts(); 
            expect(resultado).to.be.empty;
        });
    });

    describe('getProductsById' ,() => {
        before( async () => {
            sinon.stub(connection, 'execute').resolves(
                {
                    "id": 1,
                    "name": "Martelo de Thor",
                    "quantity": 10,
                }
        )
        });
        after(() => {
            connection.execute.restore();
        })
      
        it('verfica se a função retorna um objeto e se não está vazio', async () => {
            const response = await getProductsById(1)
            expect(response).to.be.an('object');
            expect(response).not.be.empty;
        })
    });

    describe('createProduct',() => {
        const product =  {
            "name": "Martelo de Thor",
            "quantity": 10,
        }

        before(async () => {
            sinon.stub(connection, 'execute').resolves( {
                "id": 1,
                "name": "Martelo de Thor",
                "quantity": 10,
            });
          });
    
          after(async () => {
            connection.execute.restore();
          });

          it('retorna um objeto a função', async () => {
            const response = await createProduct(product);
     
            expect(response).to.be.a('object');
          });
     
          it('tal objeto possui o "id" do novo produto inserido', async () => {
            const response = await createProduct(product);
     
            expect(response).to.have.a.property('id');
          });

    });

    describe('updateProduct',() => {
        const product =  {
            "id": 1,
            "name": "Martelo de Thor",
            "quantity": 10,
        }

        before(async () => {
            sinon.stub(connection, 'execute').resolves( {
                "id": 1,
                "name": "Martelo de Thor",
                "quantity": 10,
            });
          });
    
          after(async () => {
            connection.execute.restore();
          });

        it('verifica se a função retorna um objeto e se possui as propriedades "id", "name" e "quantity"', async () => {
            const response = await updateProduct(product);
            expect(response).to.be.an('object');
            expect(response).to.includes.all.keys("id", "name", "quantity");
        });
    });

    describe('deleteProduct' ,() => {
        const product =  {
            "id": 1,
            "name": "Martelo de Thor",
            "quantity": 10,
        }

        before(async () => {
            sinon.stub(connection, 'execute').resolves({});
          });
    
          after(async () => {
            connection.execute.restore();
          });

        it('verifica se a função retorna um objeto vazio', async () => {
            const response = await deleteProduct(product);
            expect(response).to.be.empty;
        });
    });
})