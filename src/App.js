import logo from './react.png'; //chemin relatif
import './App.css';

function App() {
  return (
    <div className="App">
     <div
  style={ 
    {
     border: '1px solid red',
     maxWidth: '100vw'
    
    }
  }
>
<h1 className="title red">Your name here</h1>

<img src="/images/github.png" alt="logo2"/> 
<br/>
<img src={logo} alt={"logo"}/> 
<br/>
<video width='750' height="500" controls >
      <source src="./videos/JSX Tuto.mp4" type="video/mp4"/>
     </video>
      </div>
</div>

  );
}

export default App;
