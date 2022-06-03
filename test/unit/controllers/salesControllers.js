const { expect } = require("chai")
const sinon = require('sinon');
const SalesController = require("../../../controllers/salesController");
const SalesService = require("../../../services/salesService");

describe('Sales Controllers Testes', () => {

  describe('getAllSales', () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {};

      response.status = sinon.stub()
        .returns(response);
      response.json = sinon.stub()
        .returns(response);

      sinon.stub(SalesService, 'getAllSales')
        .resolves([{
            "saleId": 1,
            "date": "2022-06-01T17:16:29.000Z",
            "productId": 1,
            "quantity": 5
        }]);
    })

    after(() => {
        SalesService.getAllSales.restore();
      });

    it('should getAllSales returns expected status and result', async () => {
        const expectedResult = {
            "saleId": 1,
            "date": "2022-06-01T17:16:29.000Z",
            "productId": 1,
            "quantity": 5
        }
        const expectedStatus = 200;

        await SalesController.getAllSales(request, response)

        expect(response.status.calledWith(expectedStatus)).to.be.equal(true)
        expect(response.json.calledWith(expectedResult)).to.be.equal(true)
    });
  });

  describe('getSalesById',() => {
      const response = {};
      const request = {};

      before(async () => {
        request.params = {id: 2};

        response.status = sinon.stub()
          .returns(response);
        response.json = sinon.stub()
          .returns(response);

        sinon.stub(SalesService, 'getSalesById')
          .resolves([[
            {
                "date": "2022-06-02T19:34:59.000Z",
                "productId": 3,
                "quantity": 15
            }
          ]]);
      })

      after(() => {
          SalesService.getSalesById.restore();
      });
        
    it('verifica se o retorno tem o status 200 com o id', async () => {
      const expectedResult = 
        {
            "date": "2022-06-02T19:34:59.000Z",
            "productId": 3,
            "quantity": 15
        }
    

    await SalesController.getSalesById(request, response)

    expect(response.status.calledWith(200)).to.be.equal(true)
    //  expect(response.json.calledWith(expectedResult)).to.be.equal(true)
    });
  });
});

