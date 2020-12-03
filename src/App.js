import luna1 from './images/lunaPic.JPG';
import luna2 from './images/luna1month.JPG';
import luna3 from './images/luna2month.JPG';
// import MenuOpenOutlinedIcon from '@material-ui/icons/MenuOpenOutlined';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2 className="header">Luna Rae's Desktop App</h2>
        {/* <MenuOpenOutlinedIcon /> */}
        <button>Randomize Pictures</button>
      </header>
      <div className="imgContainer">
        <img src={luna1} className="App-logo" alt="logo" />
        <img src={luna2} className="App-logo2" alt="logo" />
        <img src={luna3} className="App-logo3" alt="logo" />
      </div>
     
    </div>
  );
}

export default App;
