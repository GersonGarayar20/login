import Form from "./components/Form"
import fondo from '../public/fondo.jpg'

function App() {

  return (
    <div className=" h-screen relative w-full bg-gradient-to-r from-gray-900 to-gray-900/80">
      <img className="absolute -z-10 h-full w-full object-cover" src={fondo} alt="" />
      <Form/>
    </div>
  )
}

export default App
