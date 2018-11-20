const argv = require('./config/yargs').argv;
const colors = require("colors");

const { crearArchivo, listarTabla } = require('./Multuplicar/multiplicar' );
//let base = '7';
let commando = argv._[0];

switch (commando){
    case 'listar':
        listarTabla(argv.base, argv.limite).then(data=>console.log(data)).catch(e=>console.log(e));
    break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo Creado: ${archivo}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('No se reconoce el comando ');
}