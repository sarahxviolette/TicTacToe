import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

// Class square
class Square extends React.Component {
  render() {
    return (
      <div>
        <button className="square">{this.props.value}</button>
      </div>
    );
  }
}

class Board extends React.Component {
  // render square for tic tac toe
  renderSquare(i) {
    return <Square value={i} />;
  }

  render() {
    const status = "Next player : X";

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

// Game render
class Game extends React.Component {
  render() {
    return (
      <div>
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      </div>
    );
  }
}
// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));
