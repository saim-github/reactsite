import React, { Component } from 'react'
// import Todo from "./Todo";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";



// export default class App extends Component {
//   render() {
//     return (
//       <div>App</div>
//     )
//   }
// }


// function App() {
//     return(
//         <>
//             <div>
//                 <h1>TODO List</h1>
//             </div>
//         </>
//     )
// }

class App extends Component {
    state = {
        items: [],
        text: ""
    }
    render() {
        return (
            <>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6 mx-auto text-white">
                            <h2>TODO List</h2>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default App;