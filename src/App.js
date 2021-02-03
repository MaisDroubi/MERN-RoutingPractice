import { Router } from '@reach/router';
import HomeComponent from './components/HomeComponent'
import RandomComponent from './components/RandomComponent'
import ColorComponent from './components/ColorComponent'



function App() {

  return (
    <div className="App">
        <Router>
            <HomeComponent path="/home"/>
            <RandomComponent path="/:id" />
            <ColorComponent path="/:id/:color1/:color2" /> 
        </Router>
    </div>
  );
}

export default App;

