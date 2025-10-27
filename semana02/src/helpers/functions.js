//Crear una funcion llamadad totalVentas  que reciba como parametro un objeto con ventas y devuelva el total de ventas

/**
 * 
 * @param {Object} ventas - Ventas de electricos
 * @returns {Number} total - Suma de los electricos vendidos
 */
export const totalVentas = ((ventas = {}) => Object.values(ventas)
        .reduce((suma, venta) => suma + venta, 0));

export const extraerInfoEstudiantes = (estudiantes= []) => {
        return estudiantes.map(({nombre, direccion:{ciudad}})=>{
                return {
                        nombre,
                        ciudad,
                };
        });
    //debe devolver el texto Nombre: Nombre_del_Estudiante, Ciudad: Ciudad_del_Estudiante
}