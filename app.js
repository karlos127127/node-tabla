const { boolean } = require("yargs");
const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./config/yargs");
const colors = require("colors");

console.clear(); 


//console.log(process.argv);
//console.log(argv); 

/*const [ , , arg3] = process.argv;
const [ , base] = arg3.split("=");*/


crearArchivo(argv.b, argv.l, argv.h).then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
                  .catch(error => console.log(error));


