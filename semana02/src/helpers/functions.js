//Crear una funcion llamadad totalVentas  que reciba como parametro un objeto con ventas y devuelva el total de ventas

/**
 * 
 * @param {Object} ventas - Ventas de electricos
 * @returns {Number} total - Suma de los electricos vendidos
 */
export const totalVentas = ((ventas = {}) => Object.values(ventas)
        .reduce((suma, venta) => suma + venta, 0));
