import Header from "./components/Header"
import {CgEnter} from 'react-icons/cg'
import {useState, useEffect} from 'react'
import Listado from "./components/Listado";
function App() {
 
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [faltantes, setFaltantes] = useState(0)
  const [active, setActive] = useState(false)
  const [completed, setCompleted] = useState(false)
  const [all, setAll] = useState(true)
  const [darkModeActivo, setDarkModeActivo] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
  
      const newItem = { id: new Date().getTime().toString(), title: name , estado:false };  //Genera un id unico con metodo date y get time
      setList([...list, newItem]);  //No pieerdo la referencia del valor anterior y lo anado como un arreglo de objetos
      setName('');
    
  };

  //Funcion para eliminar el id devulve todos aquellos que no coincidan
  const removeItem = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  //Limpia el arreglo dejando vacio
  const clearList = () => {
    setList([])
  }

  //Marcar como tarea realizada
  const checked = (id) => {
    const specificItem = list.find((item) => item.id === id);
    specificItem.estado = true
    comprobarItems()
}

//Funcion que comprueba cuantos objetivos faltar por cumplirse
  const comprobarItems = () => {
    const cumplidos = list.filter((item) => item.estado !== true);
    setFaltantes(cumplidos.length)
  }

  useEffect(() => {
    comprobarItems()
  },[list])
  

  //Cambiar de color 
  const cambiarContenido = (e) => {
    e.preventDefault()
    const resultado = e.target.value;
    if(resultado === 'active'){
      setActive(true)
      setCompleted(false)
      setAll(false)
    }else if(resultado === 'completed'){
      setActive(false)
      setCompleted(true)
      setAll(false)
    }else{
      setAll(true)
      setActive(false)
      setCompleted(false)
    }

  }
  return (
    <main className={`${darkModeActivo ? 'bg-VeryDarkBlue h-screen' : 'h-screen'}`}>
      <Header darkModeActivo={darkModeActivo} setDarkModeActivo = {setDarkModeActivo} />
      <div className={`mb-10 contenedor bg-white shadow-xl p-5 rounded-lg hacia-arriba ${darkModeActivo ? 'bg-VeryDarkGrayishBlue2' : ''} `}>
        <form onSubmit={handleSubmit} className={`flex justify-between`}>
        <input 
              type="text" 
              placeholder="Create a new todo..." 
              className={`w-full focus:outline-none ${darkModeActivo ? 'bg-VeryDarkGrayishBlue2 text-gray-300' : ''}`}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          <button type="submit" className={`${darkModeActivo ? 'text-gray-500' : ''}`}><CgEnter  size={50}/></button>
        </form>
      </div>
      {/*Contenedor de resultados despues de ingresar una tarea por hacer */}
      {list.length > 0 && (
        <div className={`bg-white contenedor shadow-xl py-5 rounded-lg hacia-abajo ${darkModeActivo && 'bg-VeryDarkGrayishBlue2'}`}>
          <div className="divide-y">
            <Listado
                  
                  items={list} 
                  removeItem={removeItem}
                  checked={checked}
                  active={active}
                  completed={completed}
                  all={all}
                  darkModeActivo={darkModeActivo}
                
                 
            />
            <p></p> {/*Para que agregue la linea final el divide-y*/}
          </div>
          
          <div className="flex justify-between text-gray-400 text-xl p-5">
            <span className="flex justify-start gap-x-3">{faltantes}<p>Items left</p></span>
            <button onClick={clearList}>Clear Completed</button>
          </div>

      </div>
      )}
      {list.length > 0 && (
        <>
          {/**Borones para filtrar entre las tareas */}
          <div className={`flex justify-center gap-x-10 text-gray-500 hacia-abajo bg-white contenedor shadow-xl py-5 rounded-lg hacia-abajo ${darkModeActivo && 'bg-VeryDarkGrayishBlue2'}`}>
              <button className={all ? 'text-blue-600 font-semibold' : 'font-semibold '} value='all' onClick={cambiarContenido} >All</button>
              <button className={active ? 'text-blue-600 font-semibold' : 'font-semibold'} value='active' onClick={cambiarContenido} >Active</button>
              <button className={completed ? 'text-blue-600 font-semibold' : 'font-semibold'} value='completed' onClick={cambiarContenido} >Completed</button>
          </div>
        </>
      )}
      <p className="text-center text-gray-400 mt-10 text-xl">Drag and drop to reorder list</p>
      
    </main>
      
  )
}

export default App
