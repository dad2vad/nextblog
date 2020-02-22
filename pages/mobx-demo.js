import React from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

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
        <h1>Lean MobX React bullshit generator</h1>
        <button onClick={this.changeState}>Generate Some BS</button>
        <h2>Go Tweet this:</h2>
        <div>{this.chosenPhrase}</div>
        <h3>Demonstration of Some Mobx state shit</h3>
        <div> {`Button Clicked ${this.counter} Times`}</div>
      </React.Fragment>
    );
  }
}
