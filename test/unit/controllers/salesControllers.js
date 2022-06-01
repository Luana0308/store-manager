const { expect } = require("chai")
const sinon = require('sinon');
const SalesController = require("../../../controllers/salesController");
const SalesService = require("../../../services/salesService");

describe('sales Controller', () => {
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
    })
})