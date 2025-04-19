const { saludar } = require('./index');

test('La función saludar retorna "¡Hola DevSecOps!"', () => {
    expect(saludar()).toBe('¡Hola DevSecOps!');
});
