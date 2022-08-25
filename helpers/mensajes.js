require('colors')


const mostrarMenu = ()=>{

    return new Promise((resolve, reject) => {
        console.log('Seleccione una opcion:\n '.green)

        console.log(`${'1'.red}. Crear tareas`)
        console.log(`${'2'.red}Listar taeras`)
        console.log(`${'3'.red}.Listar tareas completadas`)
        console.log(`${'4'.red}.Listar tareas pendientes`)
        console.log(`${'5'.red}.Completar tareas`)
        console.log(`${'6'.red}.Borar tareas`)
        console.log(`${'0'.red}.Salir\n`)
    
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })
    
        readline.question('¿Que desea hacer?: ', (opt)=>{
            readline.close()
            resolve(opt)
        })

    })



}

const pausa=()=>{

    return new Promise((resolve, reject) => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })
    
        readline.question(`\nPresione ${'ENTER'.blue} para continuar`, (opt)=>{
            readline.close()
            resolve()
        })
    })

}




module.exports={mostrarMenu, pausa}