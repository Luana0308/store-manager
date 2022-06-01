const { expect } = require("chai");
const sinon = require('sinon');
const ProductsController = require("../../../controllers/productController");
const ProductsService = require('../../../services/productsService');

  describe("Products controller", () => {
    const response = {}
    const request = {};

    before(() => {
      request.body = {};

      response.status = sinon.stub()
        .returns(response);
      response.json = sinon.stub()
        .returns(response);

      sinon.stub(ProductsService, 'getAllProducts')
        .resolves([[]]);
//     });
    })

    after(() => {
      ProductsService.getAllProducts.restore();
    });

    it("should getAllProducts be a function", async () => {
        expect(ProductsController.getAllProducts).to.be.a('function'); 
    });

    it("should getAllProducts returns empty array", async() => {
     await ProductsController.getAllProducts(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
      expect(response.json.calledWith([])).to.be.equal(true);
    });

    describe('getProductsById', () => {
      const response = {}
      const request = {};

    before(() => {
      request.params = { id: 3 };

      response.status = sinon.stub()
        .returns(response);
      response.json = sinon.stub()
        .returns(response);

      sinon.stub(ProductsService, 'getProductsById')
        .resolves([[{
          "id": 3,
          "name": "Escudo do Capitão América",
          "quantity": 30
      }]]);
//     });
    })

    after(() => {
      ProductsService.getProductsById.restore();
    });


      it('should getProductsById returns expected result ', async () => {
        const expectedResult = {
          "id": 3,
          "name": "Escudo do Capitão América",
          "quantity": 30
      }

        await ProductsController.getProductsById(request, response);

        expect(response.status.calledWith(200)).to.be.equal(true);
        expect(response.json.calledWith(expectedResult)).to.be.equal(true);
      })
    })

  });

