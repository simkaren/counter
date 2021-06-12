import React from 'react';

function App() {
  return <Counter />
}

class Counter extends React.Component {
  constructor(props) {
      super(props);
      this.state = {count: 0};
  }

  Increment() {
      this.setState({count: this.state.count + 1});
  }

  Decrement() {
      this.setState({count: this.state.count - 1});
  }

  Reset() {
      this.setState({count: 0});
  }

  render() {
      const style = {
          background: "black",
          color: "white",
          borderRadius: 4,
          border: "none",
          padding: "0 16px",
          lineHeight: "32px"
      };
      return (
          <div>
              <div>
              <h1>Value : {this.state.count}</h1>
              </div>
              <div>
              <button style={style} onClick={() => {this.Increment()}}>+1</button>
              &nbsp;<button style={style} onClick={() => {this.Decrement()}}>-1</button>
              &nbsp;<button style={style} onClick={() => {this.Reset()}}>clear</button>
              </div>
          </div>
      );
  }
}

export default App;
