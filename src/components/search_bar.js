//using the { Component } pulls off the component part and makes it a variable
import React, { Component } from 'react';


//class based component - must render() and return - used when you have to extend
//Only class components have STATE
class  SearchBar extends Component{
  constructor(props){
    super(props);  //super calls the method of the same name on the parent class

    this.state = { term: ''}; //only used for initial SetState

  }

  render() {

    return (

    <div className="search-bar" >
<<<<<<< HEAD
=======

    

>>>>>>> 34614c1cfbd71b0c3db7e8f16613c31abdd65358
      <input type="text" id='searchBarInput'

        //onChange={inputBoxData => this.setState({term : inputBoxData.target.value} ) }  //updating state causes re-render and the click doesn't work.
        //value={this.state.term}
        //onChange={userInputValue => this.props.onSearchTermChange(userInputValue.target.value)}
        onChange={inputBoxData => this.handleInputChange(inputBoxData.target.value)}
        //onChange={ this.handleInputChange }
      />
      <input type="button"
        //onClick={this.props.onSearchTermChange(this.state.term)}
        onClick={ () => this.handleClick() }
      />

  </div>


  //onClick={this.state.term => this.props.onSearchTermChange(userInputValue.target.value)}
    //return <input onChange={event => console.log(event.target.value)}/>;
    //return <input onChange={this.onInputChange};
    );
  }

  handleClick() {
    //console.log(this.state.term);
    this.props.onSearchTermChange(this.state.term);
  }

//This below was the original example - line 20 above called this function, which set the state and then called the props.onSearchTermChange
  handleInputChange(termParam){
    this.setState({term: termParam});
    //console.log(this.state.term);
    //this.setState({term});  //can use this only if the param input is 'term'
    //this.props.onSearchTermChange(termParam);

  }


}

export default SearchBar;
