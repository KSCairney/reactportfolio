import React, { Component } from 'react';
import './App.css';
import Title from './components/title';
import ParallaxCity from './components/city';
import Nav from './components/nav';
import Projects from './components/projects';
import Bio from './components/bio';
import Links from './components/links';
import Contact from './components/contact';
import Footer from './components/footer';
import projList from './data/projects.json';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      identifier: 0,
      numberOfProj: projList.projects.length - 1
    }
  }

  prevProject = () => {
    if (this.state.identifier === 0) {
      this.setState({
        identifier: this.state.numberOfProj
      })
    } else {
      this.setState({
        identifier: this.state.identifier - 1
      })
    }
  }

  nextProject = () => {
    if (this.state.identifier === this.state.numberOfProj) {
      this.setState({
        identifier: 0
      })
    } else {
      this.setState({
        identifier: this.state.identifier + 1
      })
    }
  }

  render() {
    return (
      <div className="App">
        <ParallaxCity city="laa" linker="home"/>
        <Title />
        <Nav />
        <ParallaxCity city="lad" linker="projects"/>
        <Projects identifier={this.state.identifier} clickLeft={this.prevProject} clickRight={this.nextProject} />
        <ParallaxCity city="london" linker="links"/>
        <Links />
        <ParallaxCity city="tokyo" linker="bio"/>
        <Bio />
        <ParallaxCity city="cork" linker="contact"/>
        <Contact />
        <ParallaxCity city="zibo" linker="foot"/>
        <Footer />
      </div>
    );
  }
}

export default App;
