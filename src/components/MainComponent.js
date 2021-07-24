import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Gardens from './GardensComponent';
import Animals from './AnimalsComponent';
import { Switch, Route, Redirect} from 'react-router-dom';
import { GARDENS } from '../shared/gardens';
import { COMMENTS } from '../shared/comments';
import { ANIMALS } from '../shared/animals';
import { BEES } from '../shared/bees';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gardens: GARDENS,
      animals: ANIMALS,
      bees: BEES,
      comments: COMMENTS
    };
  }

  render() {

      const HomePage = () => {
        return (
          <Home 
            garden={this.state.gardens.filter(garden => garden.featured)[0]}
            bee={this.state.bees.filter(bee => bee.featured)[0]}
            animal={this.state.animals.filter(animal => animal.featured)[0]}
          />
        );
      }

      return (
          <div>
              <Header />
              <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route path='/gardens' component={Gardens} />
                    <Route path='/animals' component={Animals} />
                    <Redirect to='/home' />
              </Switch>
              <Footer />
          </div>
      );
  }
}

export default Main;
