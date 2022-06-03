const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../../models/connection');
const { getAllSales, 
        getSalesById, 
        createSales } = require('../../../models/salesModel')

describe('Sales Model Testes', () => {

    describe('getAllSales',() => {
        before( async () => {
            sinon.stub(connection, 'execute').resolves(
                {
                    "saleId": 1,
                    "date": "2022-06-02T19:34:59.000Z",
                    "productId": 1,
                    "quantity": 5
                }
        )
        });
        after(() => {
            connection.execute.restore();
        })
        it('verifica se a função retorna um objeto, se não está vazio e possui as propriedades', async () => {
            const response = await getAllSales();
            expect(response).to.be.an('object');
            expect(response).not.to.be.empty;
            expect(response).to.includes.all.keys("saleId", "date", "productId", "quantity")
        });
    });

    describe('getSalesById', () => {
        before( async () => {
            sinon.stub(connection, 'execute').resolves([
                {
                    "date": "2022-06-02T19:34:59.000Z",
                    "productId": 1,
                    "quantity": 5
                },
                {
                    "date": "2022-06-02T19:34:59.000Z",
                    "productId": 2,
                    "quantity": 10
                }
            ])
        });
        after(() => {
            connection.execute.restore();
        })
        it('verifica se a funçao retorna um objeto e se a função nao está vazia', async () => {
            const response = await getSalesById(1)
            expect(response).to.be.an('array');
            expect(response).not.be.empty;
        });
    });

    describe('createSales', () => {
        const sale = [
            {
              "productId": 1,
              "quantity": 7
            },
            {
              "productId": 1,
              "quantity": 6
            }
          ];

          before( async () => {
            sinon.stub(connection, 'execute').resolves({
                "id": 3,
                "itemsSold": [
                    {
                        "productId": 1,
                        "quantity": 7
                    },
                    {
                        "productId": 1,
                        "quantity": 6
                    }
                ]
            })
        });
        after(() => {
            connection.execute.restore();
        })

        it('verifica se a função retorna um objeto e se possui o id inserido', async () => {
            const response = await createSales(sale);
            expect(response).to.be.an('object');
            expect(response).to.have.a.property('id');
        })
    });
});