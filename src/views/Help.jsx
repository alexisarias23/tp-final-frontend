import { Link } from "react-router-dom"

const Help = () => {
  return (
    <main className="main-help" >
      <h1 className="h1-help">Bienvenidos a la pagina de ayuda del servicio de mensajeria de la UTN</h1>
      <h3 className="h3-help">Funcionamiento general</h3>
      <p className="p-help" >Este servicio funciona de manera local es nuestro PC. Requiere de un inicio de sesion, el cual tambien se puede cerrar, elegir al chat al cual quieras enviarle un mensaje y un popUp.</p>
      <h3 className="h3-help" >Las tecnologias utilizadas son </h3> <p className="p-help" >HTML, CSS, Javascript y frameworks como React y LocalStorage</p>
      <h3 className="h3-help" >Posibles mejoras a futuro</h3>
      <p className="p-help" >Funciones avanzadas como reacciones a los mensajes, enviar fotografias y videos</p>

      <p className="text-info">Ir a <Link to="/chat">Chat</Link></p>
    </main>
  )
}

export default Help