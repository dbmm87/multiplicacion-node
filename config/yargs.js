const opts={
    base: {
        demand: true,
        alias: 'b'
    }, limite: {
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')
    .command('listar', 'imprime en consola la tabla de Multiplicar', opts)
    .command('crear', 'Crea un archivo de la tabla',opts)
    .help()
    .argv;

    module.exports ={
        argv
    }