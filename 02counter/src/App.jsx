import { useState } from 'react'

import './App.css'

function App() {


  let Value = 5;

  const addValue = () => {
  value =  value +1;
    console.log("its working")
  }
  const removeValue = () => {
  value =  value-1;
    console.log("its working")
  }
  

  return (



    <>
      
     <h1>
         Value count {Value}
     </h1>

     <button onClick={addValue}>
                  AddValue      
     </button>
     <br/>
     <button onClick={removeValue}>
                 Remove value     
     </button>
    </>
  )
}

export default App
