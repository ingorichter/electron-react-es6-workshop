import React from 'react';

class Clock extends React.Component {
    constructor (props) {
        super(props);
        this.state = {time: Date.now()};
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({time: Date.now()});
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        let time = new Date(this.state.time).toLocaleTimeString(this.props.locale, {timeZone: this.props.timezone});
        return (
            <div className="clock">
                <div className="clock-details">
                    <div className="clock-cityname">{this.props.city}</div>
                    <div className="clock-tzinfo">{this.props.timezone}</div>
                </div>
                <div className="clock-time">{time}</div>
            </div>
        );
    }
}

export default Clock;