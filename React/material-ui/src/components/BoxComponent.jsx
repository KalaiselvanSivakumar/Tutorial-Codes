import React from 'react';
import { Box, Button } from '@material-ui/core';

export default class BoxComponent extends React.Component {

	render() {
		return (
			<div id="box-components">
				<Box></Box>{/* Default div */}
				<Box component="span"></Box>
				<Box color="blue" clone>
					<Button>Blue</Button>
				</Box>
				<Box color="red">
					{props => <Button {...props} >Red</Button>}
				</Box>
				<Box color="blue">
					<Button>Blue</Button>
				</Box>
			</div>
		);
	}

}
