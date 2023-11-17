import "./App.css";
import Helloworld from "./components/Helloworld";
import HelloWorld1 from "./components/HelloWorld1";
import Greetings from "./components/Greetings";
function App()
{
  return(
    <div className="App">
    <Greetings/>
    <Helloworld/>
    <HelloWorld1/>
    </div>
  );
}
export default App;

