/**
 * A callback function the will executed after a operation was executed.
 * 
 */

const suma = (n1, n2, callback) => {
    const result = n1 + n2;
    callback(result);
}

suma(1, 2, (result) => console.log('result ', result))