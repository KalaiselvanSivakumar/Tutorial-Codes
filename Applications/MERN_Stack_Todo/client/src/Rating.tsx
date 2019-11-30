import React from 'react';
import Star from './Star';

type RatingProps = {
    iconHeight: string,
    iconWidth: string,
    totalStars: number,
    iconType?: string,
};

type RatingState = {
    totalSelected: number,
};

export class Rating extends React.Component<RatingProps, RatingState> {

    constructor(props: RatingProps) {
        super(props);
        this.state = {
            totalSelected: 0,
        };
    }

    render() {
        const totalStars = this.props.totalStars;
        const selectedStars = this.state.totalSelected;
        const starComponents = Array(totalStars).map(
            (value, index) => {
                const isSelected = index < selectedStars;
                return (
                    <Star
                        key={index}
                        height={this.props.iconHeight}
                        width={this.props.iconWidth}
                        isSelected={isSelected}
                        iconType={this.props.iconType}>    
                    </Star>
                );
            }
        );
        return (
        <div>{ starComponents }</div>
        );
    }

}
