const { expect } = require("chai");
const sinon = require('sinon');
const ProductsController = require("../../../controllers/productController");
const ProductsService = require('../../../services/productsService');

  describe("Products controller", () => {

    describe('getAllProducts', () => {
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
    });

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
    });

    describe('createProduct',() => {
      const response = {}
      const request = {};

    before(() => {
      request.body = {
        "name": "Armadura Homem de ferro",
        "quantity": 30
    };

      response.status = sinon.stub()
        .returns(response);
      response.json = sinon.stub()
        .returns(response);

      sinon.stub(ProductsService, 'createProduct')
        .resolves([{
          "insertId": 4,
          "name": "Armadura Homem de ferro",
          "quantity": 30
      }]);
      sinon.stub(ProductsService, 'getAllProducts')
        .resolves([[]]);
    })

    after(() => {
      ProductsService.createProduct.restore();
    });
      it('verifica se o retorno é o da função é o status 201', async () => {
        const resultExpected = {
          "id": 4,
          "name": 'Armadura Homem de ferro',
          "quantity": 30
      }
         
        await ProductsController.createProduct(request, response);
        expect(response.status.calledWith(201)).to.be.equal(true);
        sinon.assert.calledWith(response.json, sinon.match(resultExpected))
      })
    });

    describe('updateProduct', () => {
      const response = {}
      const request = {};

      before(() => {
        request.params = { id: 1}
        request.body = {
          "name": "Martelo de Thor",
          "quantity": 20
        };

        response.status = sinon.stub()
          .returns(response);
        response.json = sinon.stub()
          .returns(response);

        sinon.stub(ProductsService, 'updateProduct')
          .resolves([{
            "id": 1,
            "name": "Martelo de Thor",
            "quantity": 20
        }]);
        sinon.stub(ProductsService, 'getProductsById')
          .resolves([[{
            "id": 1,
            
        }]]);
      });

      after(() => {
        ProductsService.updateProduct.restore();
      });

    it('verifica se possui o retorno de 200 e o objeto', async () => {

        await ProductsController.updateProduct(request, response);
        expect(response.status.calledWith(200)).to.be.equal(true);
      });
    });
  });

