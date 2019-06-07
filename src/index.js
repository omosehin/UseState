import React, {useState} from 'react';
import ReactDOM from "react-dom";

import "./styles.css";

const INITIAL_LIST = [
  {
    id: '0',
    title: 'React with RxJS for State Management Tutorial',
    url:
      'https://www.robinwieruch.de/react-rxjs-state-management-tutorial/',
  },
  {
    id: '1',
    title: 'A complete React with Apollo and GraphQL Tutorial',
    url: 'https://www.robinwieruch.de/react-graphql-apollo-tutorial',
  },
];
const App =()=>{
  const [list, setList] = useState(INITIAL_LIST)
  const removeList = (id) =>{
let filterList = list.filter(item=>item.id !==id)
setList(filterList)
  }
return (
      <div className="App">
        <ul>
        {list.map(item=>{
         return(
          <li key = {item.id}>
            <a href = {item.url}>
              {item.title}
            </a>
            <button onClick = {()=>removeList(item.id)}>Remove</button>
          </li>)
        })}
        </ul>
      </div>
    );
  }

export default App;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
