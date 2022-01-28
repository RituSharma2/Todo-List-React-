import { useState } from "react"

export function Counter(){
    const [counter,changeConut]= useState(0)

    function incrementClick(){
       changeConut(counter+1)
    }
    function decrementClick(){
       changeConut(counter-1)
    }
   return(
    <div className="app">
    <div>
      <div class="count">
        <h3>Count:{counter}</h3>
        
      </div>
      <div class="buttons">
      <input type="button" value="+" action={incrementClick}/>
        <input type="button" value="-" action={decrementClick}/> 
      </div>
    </div>
  </div>
   )
}

