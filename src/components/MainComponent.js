import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
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

      const CampsiteWithId = ({match}) => {
        return (
          <CampsiteInfo 
            campsite={this.state.campsites.filter(campsite => campsite.id === +match.params.campsiteId)[0]}
            comments={this.state.comments.filter(comment => comment.campsiteId === +match.params.campsiteId)} 
          />
        );
      }

      return (
          <div>
              <Header />
              <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/directory' render={() => <Directory campsites={this.state.campsites} />} />
                    <Route path='/directory/:campsiteId' component={CampsiteWithId} />
                    <Route exact path='/contactus' component={Contact} />
                    <Route path='/aboutus' render={() => <About partners={this.state.partners} />}/>
                    <Redirect to='/home' />
              </Switch>
              <Footer />
          </div>
      );
  }
}

export default Main;
