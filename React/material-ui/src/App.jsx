import React from "react";
import Button from '@material-ui/core/Button';
import BoxComponent from './components/BoxComponent';
import "./App.css";

function App() {
    return (
		<>
			<Button variant="contained" color="primary">
				Click Me!
			</Button>
			<BoxComponent />
		</>
    );
}

export default App;
