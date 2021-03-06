
const fs = require('fs');
const colors = require("colors");

const crearArchivo = async(base, listar, hasta) =>{
    
   // return new Promise ((resolve, reject) =>{

       try{
         
        
            let salida  = '';
            let consola = '';

            for(let i = 1; i<= hasta;i++){
        
                salida  += `${base} x ${i} = ${base * i} \n`;
                consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i} \n`;
            }
        
            if(listar){

                console.log('======================='.green);
                console.log(`   Tabla del: ${base}`.blue);
                console.log('======================='.green);

                console.log(consola);

            }
                       
            fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        
        // resolve(`tabla-${base}.txt`);
        return `tabla-${base}.txt`;



       }catch(error){
           throw error; 
       }
    
        

   // });
    

}

module.exports = {
    crearArchivo
}