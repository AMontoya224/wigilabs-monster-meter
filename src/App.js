import React, { useState } from 'react';
import './App.css';
import Theme from './components/Theme/Theme';
import Message from './components/Message/Message';
import Odometer from './components/Odometer/Odometer';


function App() {
  const [valueOdometer, setValueOdometer] = useState( 0.00 );

  const onSubmitValue = valueNew => {
    setValueOdometer( valueNew.update );
  };

  return (
    <div className="App">
      <header>
        <h1>
          Monster Meter
        </h1>
        <Theme/>
      </header>
      <main>
        <Message onSubmitValue={onSubmitValue}/>
        <Odometer valueOdometer={valueOdometer}/>
      </main>
    </div>
  );
}

export default App;