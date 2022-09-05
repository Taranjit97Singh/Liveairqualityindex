import HomeScreen from './HomeScreen'
import OtherScreen from './OtherScreen';
import React,{useState} from 'react';


const App = () => {
    const [screen, setScreen] = React.useState("home");
  
    return (
      <div>
        <nav>
           { screen=== "home"
            ?
                <button onClick={() => setScreen("otherScreen")}>Other Screen</button>
            :
                <button onClick={() => setScreen("home")}>Home</button>
        }
        </nav>
        { screen === "home" ?
        <HomeScreen/>
        :  screen === "otherScreen" ?
        <OtherScreen/>
        : null }
      </div>
      );
  };

  export default App;