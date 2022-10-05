import logo from './logo.svg';
import './App.css';
import Painting from "./components/Painting";

function App() {
  return (
    <div className="App">
        <Painting url={'https://collectionapi.metmuseum.org/public/collection/v1/objects/436121'}/>
    </div>
  );
}

export default App;
