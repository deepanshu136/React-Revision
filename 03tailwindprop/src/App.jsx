
import './App.css';
import Card from './components/Card'; 

function App() {
  let myobj={
    username:'deepanshu',
    age:21
  }
  return (
    <>
    <div className="max-w-lg mx-auto bg-green-400 text-black p-4 rounded-xl">
      <h1>Tailwind</h1>
      
    </div>
    <Card username='deepanshu'btnText='click me'/>
    <Card username='Aadarsh' btnText='visit me'/>
    
  </>
    

  );
}

export default App;



