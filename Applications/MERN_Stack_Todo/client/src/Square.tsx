import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

type SquareProps = {
    height: string,
    width: number
}

class Square extends React.Component<SquareProps> {

    constructor(props: SquareProps) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <span style={{
                backgroundColor: 'red',
                display: "inline-block",
                height: this.props.height,
                width: `${this.props.width}px`
            }}></span>
        );
    }

}

ReactDOM.render(<Square width={100} height="200px" />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
