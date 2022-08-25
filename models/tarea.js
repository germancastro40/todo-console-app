const {v4:uuidv4}= require('uuid')
class Tarea{
    id=''
    descripcion=''
    completadoen= null

    constructor(descripcion){
        this.id= uuidv4()
        this.descripcion= descripcion
    }
}

module.exports= Tarea