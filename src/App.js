import React, {useState} from 'react'


export const App = () => {
   const[input ,setInput] = useState([]);
   const[people,setPeople] = useState([]);

 const handleclick = (e) =>{
    e.preventDefault();
    if (input) {
        const person = {input};
        setPeople((people)=> {
            return [...people,person]
        });
        setInput('');
    }

 }
    return (
        <>
        
        <div className= 'title'>
            <h1>To Do list </h1>
        </div>
          <form onSubmit={handleclick}>
              <label className='input'><b> input: </b></label>
              <input type ='text' name = 'text' value={input} onChange={(e)=>setInput(e.target.value)}/>
              <button type='submit' className='btn'>Add items</button>
          </form>
          
      {people.map((person)=>{
          const {input} = person;
          return(

           
          <div className='item'>

              <h4>{input}</h4>
          </div>
    
          );
      })}
      <div className='clear'>
      <button className='btn'onClick={()=>setPeople([])}> clear</button>
      </div>
        </>
    )
}

export default App
