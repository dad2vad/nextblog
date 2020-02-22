import React from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

import styled from 'styled-components';

// some overly styled button
const MyButton = styled.button`
     background: #3d94f6;
     background-image: -webkit-linear-gradient(top, #3d94f6, #1e62d0);
     background-image: -moz-linear-gradient(top, #3d94f6, #1e62d0);
     background-image: -ms-linear-gradient(top, #3d94f6, #1e62d0);
     background-image: -o-linear-gradient(top, #3d94f6, #1e62d0);
     background-image: linear-gradient(to bottom, #3d94f6, #1e62d0);
     -webkit-border-radius: 20px;
     -moz-border-radius: 20px;
     border-radius: 20px;
     color: #ffffff;
     font-family: Open Sans;
     font-size: 40px;
     font-weight: 100;
     padding: 40px;
     box-shadow: 1px 1px 20px 0px #000000;
     -webkit-box-shadow: 1px 1px 20px 0px #000000;
     -moz-box-shadow: 1px 1px 20px 0px #000000;
     text-shadow: 1px 1px 20px #000000;
     border: solid #337fed 1px;
     text-decoration: none;
     display: inline-block;
     cursor: pointer;

  &:hover {
       background: #1e62d0;
       background-image: -webkit-linear-gradient(top, #1e62d0, #3d94f6);
       background-image: -moz-linear-gradient(top, #1e62d0, #3d94f6);
       background-image: -ms-linear-gradient(top, #1e62d0, #3d94f6);
       background-image: -o-linear-gradient(top, #1e62d0, #3d94f6);
       background-image: linear-gradient(to bottom, #1e62d0, #3d94f6);
       text-decoration: none;
  }
`;

const Header = styled.div`
  font-weight: bold;
  font-family: Helvetica;
`;

@observer
export default class extends React.Component {
  constructor() {
    super();
    this.randomPhrases = [
      'empower seamless eyeballs',
      'transition plug-and-play metrics',
      'expedite next-generation initiatives',
      'grow turn-key vortals',
      'orchestrate front-end architectures',
      'architect granular partnerships',
      'reintermediate compelling e-tailers',
      'deliver bleeding-edge schemas',
      'utilize cutting-edge infomediaries'
    ];
    this.changeState = this.changeState.bind(this);
  }

  // define the data we want to "watch"
  @observable chosenPhrase = this.randomPhrases[0];
  @observable counter = 0;

  // define an "action" -> we are saying what that we want to change a peice of "watched" data
  @action
  changeState() {
    // changing our data will trigger the re-render by mobx

    // just chosing a random phrase
    this.chosenPhrase = this.randomPhrases[
      Math.ceil(Math.random() * this.randomPhrases.length - 1)
    ];

    // increase the counter
    this.counter++;
  }

  render() {
    return (
      <React.Fragment>
        <Header className={this.props.className}>
          Lean MobX React bullshit generator
        </Header>
        <MyButton className={this.props.className} onClick={this.changeState}>
          Generate Some BS
        </MyButton>
        <h2>Go Tweet this:</h2>
        <div>{this.chosenPhrase}</div>
        <h3>Demonstration of Some Mobx state shit</h3>
        <div> {`Button Clicked ${this.counter} Times`}</div>
      </React.Fragment>
    );
  }
}
