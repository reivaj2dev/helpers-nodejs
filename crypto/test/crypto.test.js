let assert = require('assert');
let crypto = require('../crypto')

describe('Test Crypto', function () {
    describe('Encrypt and Decrypt'  , function () {
        it('La cadena encriptada tiene que ser igual a la desencriptada', function () {
            const cadena = 'Esto es una prueba de encriptado';
            let cadenaFromDecrypt = crypto.decrypt(crypto.encrypt(cadena));
            assert.equal(cadena,cadenaFromDecrypt);
        });
    });
});