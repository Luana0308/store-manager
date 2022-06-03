const sinon = require('sinon');
const { expect } = require('chai');
const { getAllProducts, 
        getProductsById, 
        createProduct,
        updateProduct, 
        deleteProduct } = require('../../../services/productsService');
const productsModel = require('../../../models/productsModel')

describe('Products Services Testes', () => {
    
    describe('getAllProducts services', () => {

        before( async () => {
            sinon.stub(productsModel, 'getAllProducts').resolves([
                {
                    "id": 1,
                    "name": "Martelo de Thor",
                    "quantity": 10,
                }
            ])
        });
        after(() => {
            productsModel.getAllProducts.restore();
        })

        it('verifica se é um objeto',async  () => {
            const [resultado] = await getAllProducts(); 
            expect(resultado).to.be.an('object');
        });
        it('verifica se o objeto não está vazio', async () => {
            const [resultado] = await getAllProducts(); 
            expect(resultado).to.not.be.empty;
        })
        it('verifica se o objeto possui as propriedades, "id", "name", "quantity"', async () => {
            const [resultado] = await getAllProducts(); 
            expect(resultado).to.includes.all.keys("id", "name", "quantity");
        });
    });

    describe('getAllProducts vazio', () => {

        before( async () => {
            sinon.stub(productsModel, 'getAllProducts').resolves([{}])
        });
        after(() => {
            productsModel.getAllProducts.restore();
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

    describe('getProductsById',() => {
        before( async () => {
            sinon.stub(productsModel, 'getProductsById').resolves(
                {
                    "id": 1,
                    "name": "Martelo de Thor",
                    "quantity": 10,
                }
        )
        });
        after(() => {
            productsModel.getProductsById.restore();
        })
        it('verifica se o retorno da funçao é um objeto, e não está vazio e possui a propriedade "id"', async () => {
            const response = await getProductsById(1)
            expect(response).to.be.an('object');
            expect(response).not.to.be.empty;
            expect(response).to.have.a.property('id')
        });
    });

    describe('createProduct', () => {
        const product =  {
            "name": "Martelo de Thor",
            "quantity": 10,
        }

        before(async () => {
            sinon.stub(productsModel, 'createProduct').resolves({
                "id": 1,
                "name": "Martelo de Thor",
                "quantity": 10,
            });
          });
    
          after(async () => {
            productsModel.createProduct.restore();
          });

        it('verifica se a função retorna um objeto e se possui um id', async () => {
            const response = await createProduct(product);
     
            expect(response).to.be.a('object');
            expect(response).to.have.a.property('id');
        })
    });

    describe('updateProduct',() => {
        const product =  {
            "id": 1,
            "name": "Martelo de Thor",
            "quantity": 10,
        }

        before(async () => {
            sinon.stub(productsModel, 'updateProduct').resolves( {
                "id": 1,
                "name": "Martelo de Thor",
                "quantity": 10,
            });
          });
    
          after(async () => {
            productsModel.updateProduct.restore();
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
            sinon.stub(productsModel, 'deleteProduct').resolves({});
          });
    
          after(async () => {
            productsModel.deleteProduct.restore();
          });

        it('verifica se a função retorna um objeto vazio', async () => {
            const response = await deleteProduct(product);
            expect(response).to.be.empty;
        });
    });

})