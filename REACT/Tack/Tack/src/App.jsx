import { useState } from 'react'
import './App.css'
import Ifelse from './Condition/Ifelse'
import SwitchCase from './Condition/SwitsCase'
import LOgical from './Condition/LOgical'
import Object from './Object State/Object'
import Tonggle from './Toggle State (Boolean)/Tonggle'
import Arrays from './State with Arrays/Arrays'
import StatePrevious from './Counter with Previous State/StatePrevious'
import FromMultipleFiels from './Form Input with Multiple Fields/FromMultipleFiels'
import Timer from './TImer/TimeExample'

function App() {


  return (
    <>
      {/* <section className="flex h-full justify-center  gap-20">
        <div>
          <p className="text-center py-5">IF Else</p>
          <Ifelse />
        </div>

        <div>
          <p className="text-center py-5">Switch Case</p>
          <SwitchCase />
        </div>
        <div>
          <p className="text-center py-5">Logical</p>
          <LOgical />
        </div>
      </section> */}

      <Object/>
      {/* <Tonggle/> */}
      <Arrays/>
      {/* <StatePrevious /> */}
      {/* <FromMultipleFiels/> */}
      {/* <Timer/> */}
    </>
  );
}

export default App
