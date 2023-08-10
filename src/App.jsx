// import './App.css'
import {useState} from 'react'
import {puppyList} from './data.js'
// import './path-to-css.css'


function App() {
  const [puppies, setPuppies] = useState(puppyList);
  console.log(puppyList)
  const [featPupId, setFeatPupId] = useState("");
  const featuredPup = puppies.find((pup)=> pup.id === featPupId);


    return (
      <div className="App">  
      {puppies.map((puppy) => {
        return (
          <p onClick={() => {setFeatPupId(puppy.id);}} key={puppy.id}>{puppy.name}
            </p>
  	);
  })}

  {featPupId && (
              <div>
                <h2>{featuredPup.name}</h2>
                    <ul>
                    <li>Age: {featuredPup.age}</li>
                    <li>Email: {featuredPup.email}</li>
                    </ul>
                    </div>
			)}
      </div>
    );
  }
  

export default App;














//did not work code - had help 


// import {puppyList} from './data.js'
// import { useState } from 'react'
// import './App.css'


// function App() {
//   const [puppies, setPuppies] = useState(puppyList)
//   console.log(puppyList)


//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>

//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


//og here
// import './App.css'

// function App() {


//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>

//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App