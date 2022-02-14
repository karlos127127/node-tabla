

const argv = require('yargs').option('b',{
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe : 'Es la base de la tabla de multiplicar'
})
.option('l',{
    alias: 'listar',
    type: 'boolean',
    demandOption: true,
    default: false,
    describe : 'Muestra la tabla de multiplicar en consola'
})
.option('h',{
    alias: 'hasta',
    type: 'number',
    default : 10,
    describe : 'Delimita hasta que valor se multiplicara la base'
})
.check((argv, options) =>{

    if(isNaN(argv.b)){
        throw 'El valor de la base debe ser un número';
    }
    
    return true; 
})
.argv;

module.exports = argv;