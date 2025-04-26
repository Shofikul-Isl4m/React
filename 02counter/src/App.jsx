import { useState } from 'react'

import './App.css'

function App() {

const [value , setValue] = useState(15);

  const addValue = () => {
  setValue(value +1)  ;
    
  }
  const removeValue = () => {
  setValue (value-1)  ;
       
  }
  

  return (



    <>
      
     <h1>
         Value count {value}
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
