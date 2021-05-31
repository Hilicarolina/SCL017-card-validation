// importamos el objeto `validator`, que contiene las funciones `isValid` y `maskify`
import validator from '../src/validator';

describe('validator', () => {
  it('debería ser un objeto', () => {
    expect(typeof validator).toEqual('object');
  });

  describe('validator.isValid', () => {
    it('debería ser una función', () => {
      expect(typeof validator.isValid).toEqual('function');
    });

    it('debería retornar true para "4083952015263"', () => {
      let creditCardNumber = "4083952015263".split("");
      expect(validator.isValid(creditCardNumber)).toBe(true);
    });

    it('debería retornar true para "79927398713"', () => {
      let creditCardNumber = "79927398713".split("");
      expect(validator.isValid(creditCardNumber)).toBe(true);
    });

    it('debería retornar false para "1234567890"', () => {
      let creditCardNumber = "1234567890".split("");
      expect(validator.isValid(creditCardNumber)).toBe(false);
    });
  });

  describe('validator.maskify', () => {
    it('debería ser una función', () => {
      expect(typeof validator.maskify).toEqual('function');
    });

    it('Debería retornar "############5616" para "4556364607935616"', () => {
      let creditCardNumber = "4556364607935616";
      expect(validator.maskify(creditCardNumber)).toBe("############5616");
    });

    it('Debería retornar "1" para "1"', () => {
      let creditCardNumber = "1";
      expect(validator.maskify(creditCardNumber)).toBe("1");
    });

    it('Debería retornar "######orld" para "helloworld"', () => {
      let creditCardNumber = "helloworld";
      expect(validator.maskify(creditCardNumber)).toBe("######orld");
    });
  });
});

/*import validator from '../src/validator';

describe('validator', () => {
  it('debería ser un objeto', () => {
    expect(typeof validator).toBe('object');
  });

  describe('validator.isValid', () => {
    it('debería ser una función', () => {
      expect(typeof validator.isValid).toBe('function');
    });

    it.skip('debería retornar true para "4083952015263"', () => {
      // escribe aquí tu test
    });

    it.skip('debería retornar true para "79927398713"', () => {
      // escribe aquí tu test
    });

    it.skip('debería retornar false para "1234567890"', () => {
      // escribe aquí tu test
    });
  });

  describe('validator.maskify', () => {
    it('debería ser una función', () => {
      expect(typeof validator.maskify).toBe('function');
    });

    it.skip('Debería retornar "############5616" para "4556364607935616"', () => {
      // escribe aquí tu test
    });

    it.skip('Debería retornar "1" para "1"', () => {
      // escribe aquí tu test
    });

    it.skip('Debería retornar "######orld" para "helloworld"', () => {
      // escribe aquí tu test
    });
  });
});
*/ 