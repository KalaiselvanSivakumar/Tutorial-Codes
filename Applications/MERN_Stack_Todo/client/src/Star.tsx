import React, { Component } from 'react';

type StarProps = {
    height: string,
    width: string,
    isSelected: boolean,
    iconType?: string
}

function getIconClassName(isSelected: boolean, iconType?: string) {
    return `${ iconType ? iconType : 'default-star'
        } ${ isSelected ? 'selected' : ''}`;
}

export default class Star extends Component<StarProps> {
    
    render() {
        const iconClassName = getIconClassName(
            this.props.isSelected, this.props.iconType
        );
        return (
            <i className={ iconClassName }></i>
        );
    }

}
