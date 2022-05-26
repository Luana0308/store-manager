const sinon = require('sinon');
const { expect } = require('chai');
const { getAllProducts } = require('../../../models/productsModel');
const connection = require('../../../models/connection');

describe('busca todos os produtos no banco de dados', () => {
    
    describe('verifica quando tem produtos no banco de dados', () => {

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
    describe('verifica quando nao tem produtos', () => {

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
    })
})