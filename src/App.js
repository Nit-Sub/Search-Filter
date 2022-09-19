import JSONDATA from "./MOCK_DATA.json"
import "./App.css"
import { useState } from "react"
const App =()=>{
  const [searchTerm , setSearchTerm]= useState();
  
  return (
    <>
    <div className="App" >
      <input  className="input" type="text" placeholder="Search...."
      onChange={e=>{setSearchTerm(e.target.value)}}/>
      {
        JSONDATA.
        filter((val =>{
          if(searchTerm==="" ){
            return val
          } else if (val.first_name.toLowerCase().toLowerCase().includes(searchTerm)){
            return val
          }
        }))
        .map((val, key)=>{
          return (<>
          <div className="user" key={key}>
          <p >   {val.first_name}</p>
          <p>MOdule</p>
          </div>
          </>)
        })
      }
    </div> 
    </>
  )

}
export default App;