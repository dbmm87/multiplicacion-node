const fs = require("fs");
const colors = require("colors");
let data = '';
let mensaje = '';

let listarTabla = (base,limite) =>{
  return new Promise((resolve, reject) => {
      if(!Number(base)){
          reject (`La base no es un numero`.red);
          return;
      }if(!Number(limite)){
          limite = 10;
      }
      for (let index = 1; index <= limite; index++) {
         mensaje += `${base} *  ${index} = ${base * index}\n`;
        }
        resolve(mensaje);
    })
}

let crearArchivo = (base, limite=10)=>{
     return new Promise((resolve, reject) => {
         if(!Number (base)){
             reject('La base no es un mumero');
             return ;
         }
         for (let index = 1; index <= limite; index++) {

             let mensaje = `${base} *  ${index} = ${(base * index)}\n`;

             data += mensaje;
         }

         fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
             if (err) 
                reject( err);
            else 
                resolve(`tabla-${base}.txt`)
         });
     })
     
}
module.exports = {
  crearArchivo,
  listarTabla
};