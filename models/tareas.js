const Tarea = require("./tarea")
const {leerDb}= require('../helpers/guardar')
require('colors')
class Tareas{
    listado={}

    get listadoArr(){

        const lista=[]

        Object.keys(this.listado).forEach(key=>{
            const tarea= this.listado[key]
            lista.push(tarea)
        })
        return lista
    }
    constructor(){
        this.listado={}
    }
    borrarTarea(id = ''){

        if(this.listado[id]){
            delete this.listado[id]
        }

    }

    cargarTareas(tarea=[]){

        tarea.forEach(tarea=>{
            this.listado[tarea.id]= tarea
        })

    }

    crearTarea(desc=''){
        const tarea = new Tarea(desc)
        this.listado[tarea.id]= tarea
    }


    listaCompletada(){
        console.log();
        this.listadoArr.forEach((tarea, i)=>{
            const idx = `${i+1}`.green
            const {descripcion, completadoen}= tarea

            const estado = (completadoen) ? 'Completada'.green : 'Pendiente'.red
            console.log(`${idx} ${descripcion} | ${estado}` );
        })
    }

    listacompletada(){
        //const listaCompletadas=[]
        let idx= ''
        let indice=0
        this.listadoArr.forEach((tarea)=>{
            const {descripcion, completadoen}= tarea
            const estado = (completadoen) ? 'Completada'.green : 'Pendiente'.red
            if(completadoen != null){
                indice+=1
                idx=(`${indice}. ${descripcion} | ${estado} fecha: ${completadoen}` )
                console.log(idx);
            }
        })
    }

    listaPendiente(){
        let idx = ''
        let indice= 0
        this.listadoArr.forEach((tarea)=>{
            const {descripcion, completadoen}= tarea
            const estado = (completadoen) ? 'Completada'.green : 'Pendiente'.red
            if(completadoen === null){
                indice+=1
                idx= `${indice}. ${descripcion} | ${estado}`
                console.log(idx);
            }
        })

    }

    toogleCompletadas(ids=[]){

        ids.forEach(id=>{

            const tarea = this.listado[id]

            if(!tarea.completadoen){
                tarea.completadoen = new Date().toISOString()
            }

        })

        this.listadoArr.forEach(tarea => {

            if(!ids.includes(tarea.id)){
                this.listado[tarea.id].completadoen=null
            }

        });
    }

    
    
}

module.exports= Tareas



