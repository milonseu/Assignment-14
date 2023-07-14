import './App.css';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from "./components/Header"

function App() {

  return (
    <>
      <div className='bg-light'>
        <Header title="Ecommerce Shop"/>
        <Content/>
        <Footer/>
      </div>
    </>
  )
}

export default App
