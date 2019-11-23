import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.css'

// class Square extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             value: null
//         };
//     }

//     render() {
//         return (
//             <button
//                 className='square'
//                 onClick={() => this.setState({value: 'X'})}>
//                 {this.state.value}
//             </button>
//         );
//     }

// }

function Square(props) {
    return (
        <button
            className='square'
            onClick={props.onClick}>
            {props.value}
        </button>
    );
}

function calculateWinner(squares) {
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < winningConditions.length; ++i) {
        const [a, b, c] = winningConditions[i];
        if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

class Board extends React.Component {

    renderSquare(i) {
        return (
            <Square
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    render() {
        return (
            <div>
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

class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null)
            }],
            stepNumber: 0,
            xIsNext: true
        }
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        // slice method returns the shallow copy of the original array
        // Hence immutability can be achieved
        const squares = current.squares.slice();

        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        // Unlike the push method, concat method doesn't mutate the original array
        this.setState({
            history: history.concat([{
                squares: squares
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext
        });
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0
        })
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        const moves = history.map((step, move) => {
            const desc = move ? `Go to move #${
                move }` : 'Go to game start';
            return (
                // Warning: Each child in a list should have a unique "key" prop.
                // If no key is defined, then react will throw the above warning
                // and by default uses array index as key.
                // This key will not be present in the props object.
                // Using array index has problems in inserting, modifyinf or ordering.
                // So use a unique key within this componenet for each list item.
                // For our purpose, we are not going to add, reorder items.
                // Hence index is fine but for production, don't use index.
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}
                        >{desc}</button>
                </li>
            );
        });

        let status = winner ? `Winner: ${
            winner }` : `Next player: ${
                this.state.xIsNext ? 'X' : 'O'}`;
        return (
            <div className="game">
                <div className="game-board">
                    <Board squares={current.squares}
                        onClick={(i) => this.handleClick(i)}/>
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
