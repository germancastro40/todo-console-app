require('colors')

const inquirer = require('inquirer')

const preguntas= [
    {
        type:'list',
        name:'opcion',
        message:'Accion:',
        choices: [
            {
                value: '1',
                name:'1. Crear tareas'
            },
            {
                value:'2',
                name:'2. Listar tareas'
            },
            {
                value:'3',
                name:'3. Listar tareas completas'
            },
            {
                value:'4',
                name:'4. Listar tareas pendientes'
            },
            {
                value:'5',
                name:'5. Completar tarea(s)'
            },
            {
                value:'6',
                name:'6. Borrar tarea'
            },
            {
                value:'0',
                name:'0. Salir'
            }
        ]
    }
]

const inquirerMenu= async()=>{
    console.clear()
    console.log('=============================');
    console.log('   Seleccione un opcion: '.green)
    console.log('=============================');

   const {opcion}= await inquirer.prompt(preguntas)
   return opcion
}

const pausa=async()=>{
    const question=[
        {
            type: 'input',
            name:'enter',
            message:`Presione ${'ENTER'.red} para continuar`
        }
    ]
    await inquirer.prompt(question)
}

const leerInput= async(message)=>{

    const question =[
        {
            type: 'input',
            name:'desc',
            message,
            validate(value){
                if(value.length === 0){
                    return 'Ingrese un valor'
                }
                return true
            }
        }
    ]

    const {desc} = await inquirer.prompt(question)
    return desc
}

const listadoBorrarTareas=async(tareas=[])=>{

    const choices= tareas.map( (tarea, i)=>{
        const idx = `${i+1}.`
        return{
            value: tarea.id,
            name: `${idx} ${tarea.descripcion}`
        }
    })
    const preguntas=[
        {
            type: 'list',
            name: 'id',
            message:'Borrar tarea',
            choices: choices    
        }
    ]

    const {id}= await inquirer.prompt(preguntas)
    return id

}

const confirmar= async(message)=>{
    
    const question=[
        {
            type:'confirm',
            name: 'ok',
            message: message
        }
    ]

    const {ok}= await inquirer.prompt(question)
    return ok;

}

const mostrarListadoCheckList=async(tareas=[])=>{

    const choices= tareas.map( (tarea, i)=>{
        const idx = `${i+1}.`
        return{
            value: tarea.id,
            name: `${idx} ${tarea.descripcion}`,
            checked:(tarea.completadoen) ? true : false
        }
    })
    const pregunta=[
        {
            type: 'checkbox',
            name: 'ids',
            message:'Seleccione',
            choices  
        }
    ]

    const {ids}= await inquirer.prompt(pregunta)
    return ids

}



module.exports={
    inquirerMenu, pausa, leerInput, listadoBorrarTareas, confirmar, mostrarListadoCheckList
}
