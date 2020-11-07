import React, { Component } from 'react';

import './App.css';
import CharComponent from './CharComponent/CharComponent';
import './ValidateComponent/ValidateComponent'
import './CharComponent/CharComponent'

import ValidationComponent from './ValidateComponent/ValidateComponent';

class App extends Component {

  state = {
    userInput: ''
  }

  handleChange = (event) => {

    this.setState({ userInput: event.target.value });


  }


  deleteCharHandler = (personIndex) => {
    const deleteCharHandler = this.state.userInput.split('');

    deleteCharHandler.splice(personIndex, 1);
    const text = deleteCharHandler.join('');
    this.setState({ userInput: text });




  }

  render() {

    const charList = this.state.userInput.split('').map((c, index) => {

      return <CharComponent
        character={c}
        key={index}
        clicked={() => this.deleteCharHandler(index)}>

      </CharComponent>
    });

    return (
      <div className="App">

        <h1 >React Assignment-2 <br /> List and Condtionals</h1>

        <h3>Enter the Text</h3>
        <input
          onChange={this.handleChange}
          value={this.state.userInput}

        />


        <div>
          {(() => {
            if (this.state.userInput.length < 20 && this.state.userInput.length>0 ) {
              return (
                <div>

                  <h3>Entered Text</h3>

                  <p>{this.state.userInput}</p>

                  <br></br>
                  <h3>Character Count</h3>

                  <p>{this.state.userInput.length}</p>
                  <h3>Text Length</h3>
                  <ValidationComponent txtlen={this.state.userInput.length}>

                  </ValidationComponent>
                  <br></br>

                  <h3>Click the Character to remove</h3>
                  <br></br>
                  {charList}


                </div>

                
              )
            } 

            else if (this.state.userInput.length <= 0) {
            
              return (
                <div>
                  <p>Please enter the text to continue...</p>
    
                  </div>
              )
            }
            
           else {
              return (
                <div>

                  <p>
                    
                  Limited Exceeded</p>

                </div>
              )
            }
          })()}
        </div>

       


      </div>


    );

  }
}


export default App;
