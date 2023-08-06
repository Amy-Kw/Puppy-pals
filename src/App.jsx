import './App.css'
import { useState } from 'react'
import {puppyList} from './data.js'
import './path-to-css.css'


function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  function handleClick() {
    const featuredPup = puppies.find((pup)=> pup.id === featPupId)

    return (
            <p onClick={()=>{ setFeatPupId(puppy.id)}}
            >
             featuPupID && {
              <div>
                <h2>{featuredPup.name}</h2>
                    <ul>
                    <li>Age: {featuredPup.age}</li>
                    <li>Email: {featuredPup.email}</li>
                    </ul>
              </div>
              }
            </p>

            );
  }

    // some logic here
  }

  return (
    <div className="App">
      {puppies.map((puppy) => {
        return (
          <p onClick={handleClick} key={puppy.id}>
            {puppy.name}
          </p>
        );
      })}
    </div>
  );

export default App






      //  // <p onClick={handleClick} key={puppy.id}>
      //  {puppy.name}












//did not work code


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