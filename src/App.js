// import logo from './logo.svg';
import './App.css';
import Barc from './comp/Barc';
import CArea from './comp/CArea';
import Clock from './comp/Clock';
import Left from './pages/Left';
import Right from './pages/Right';
import Quiz from './comp/Quiz';
// import Arrea from './comp/Area.js';

function App() {
 
  return (
   
    <div className="App">

<div className="left">
  <Left></Left>
</div>
<div className="right">
  <Right></Right>
  
</div>
      
      
    </div>
  );
}

export default App;
