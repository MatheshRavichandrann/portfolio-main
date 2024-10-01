import React from 'react';
import './App.css';
import { Maxcom } from './component/Maxcom';
import { Mincom } from './component/Mincom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth
    };
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);

    // Add the event listener for preventing default click action on image
    const imageElement = document.querySelector('.image img');
    if (imageElement) {
      imageElement.addEventListener('click', function(event) {
        event.preventDefault();  // Prevent default behavior like opening in a new tab
      });
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);

    // Remove the event listener to avoid memory leaks
    const imageElement = document.querySelector('.image img');
    if (imageElement) {
      imageElement.removeEventListener('click', function(event) {
        event.preventDefault();  // Clean up the event listener
      });
    }
  }

  handleResize() {
    this.setState({ width: window.innerWidth });
  }

  render() {
    const { width } = this.state;
    return (
      <div className="App w-screen">
        {width <= 600 ? <Mincom /> : <Maxcom />}
      </div>
    );
  }
}

export default App;
