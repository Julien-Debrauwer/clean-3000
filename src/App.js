import React, { Component } from 'react'
import actionCards from './actionCards';
import Header from './components/Header'
import Card from './components/Card'
import './main.scss';


export default class App extends Component {
  handleClick(action) {
    this.props.history.push(action);
  }

  render() {
    const actionCardsList = actionCards.map(card => (
      // pour le onClick ne pas oublier la fonction fléchée sinon la fonction associée au onClick s'éxécute immédiatement
      <Card
        key={card.action}
        name={card.name}
        description={card.description}
        bgColor={card.bgColor}
        action={() => this.handleClick(card.action)} />
    ));

    return (
      <div>
        <Header/>
        <main>
          <div className="container">
            <div className="tiles-wrapper">
              {actionCardsList}
            </div>
          </div>
        </main>
      </div>
    );
  }
}