require("colors");

const { inquirerMenu, pausa, leerInput, listadoBorrarTareas, confirmar, mostrarListadoCheckList } = require("./helpers/inquirer");
const Tarea = require("./models/tarea");
const Tareas = require("./models/tareas");
const { guardarDb, leerDb } = require("./helpers/guardar");

const main = async () => {
  //console.clear()
  let opt = "";
  const tareas = new Tareas();
  const tareasDb = leerDb();

  if (tareasDb) {
   tareas.cargarTareas(tareasDb)
  }
  //await pausa();
  do {
    opt = await inquirerMenu();
    //console.log(opt);

    switch (opt) {
      case "1":
        const desc = await leerInput("Descipcion:");
        tareas.crearTarea(desc);
        break;

      case "2":
        tareas.listaCompletada()
        break;
      case "3":
        tareas.listacompletada()
        break;
      case "4":
        tareas.listaPendiente()
        break;

      case '5':
        const ids=  await mostrarListadoCheckList(tareas.listadoArr)    
        tareas.toogleCompletadas( ids )
      break;

      case'6':
        const id = await listadoBorrarTareas(tareas.listadoArr)
        const ok = await confirmar('¿Estas seguro?')
        if(ok== true){
          tareas.borrarTarea(id)
          console.log('Tarea eliminada');
        }
        break;        
    }

    guardarDb(tareas.listadoArr)
    await pausa();
  } while (opt !== "0");
};

main();
