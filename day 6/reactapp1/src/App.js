import HOC from './components/HOC';
import Person1 from './components/Person1';
import Person2 from './components/Person2';
import './App.css';

function App() {
  return (
    <div className="App">
     <Person1/>
     <Person2/>
     <HOC/>
    </div>
  );
}

export default App;
