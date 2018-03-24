import React from 'react';

export default class Tabs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
    this.tabs = props.tabs;

    this.handleClick = this.handleClick.bind(this);

  }


  handleClick (index) {
    this.setState( {activeIndex: index} );
  }



  render() {

    let results = this.tabs.map((object,idx) => {
      let active = "";
      let onClickHandler = () => this.handleClick(idx);
      if(idx === this.state.activeIndex){
        active = "active";
      } else {
        active = "inactive";
      }

      return (
        <div className={active}>
          <h1 onClick={onClickHandler}>{object.title}</h1>
          <p>{object.content}</p>
        </div>
      );
    }) ;

    return (
      <div className ="tabs">
        <ul className ="tab-list">
          {results}
        </ul>
    </div>
    );
  }

}

class Header extends React.Component {

}
