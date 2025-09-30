import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Card from './components/Card';
function App() {

  return (
    <>
      <Navbar/>
      <div className="cards">
        <Card title="JS" content="Javascript study material" price="26 "/>
        <Card title="Java" content="Java and DSA study material" price="30 "/>
        <Card title="Python" content="Python for Data Science" price="28 "/>
      </div>
      <div className="cards">
        <Card title="JS" content="Javascript study material" price="26 "/>
        <Card title="Java" content="Java and DSA study material" price="30 "/>
        <Card title="Python" content="Python for Data Science" price="28 "/>
      </div>
      <div className="cards">
        <Card title="JS" content="Javascript study material" price="26 "/>
        <Card title="Java" content="Java and DSA study material" price="30 "/>
        <Card title="Python" content="Python for Data Science" price="28 "/>
      </div>
      <Footer/>
    </> 
  )
}

export default App
