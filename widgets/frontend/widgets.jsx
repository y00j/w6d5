import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Tabs from './tabs';


const TABS = [
  {title:"racecars", content: "racecars are fast"},
  {title:"racecars2", content: "racecars are slow"},
  {title:"racecars3", content: "racecars are kinda of fast"}
];



class Root extends React.Component {

    render(){
      return(
        <div>
          <Clock />
          <Tabs tabs={ TABS } />
        </div>
      );
    }

}


document.addEventListener("DOMContentLoaded", ()=>{
  const root = document.getElementById('root');
  ReactDOM.render(<Root />, root);

});
