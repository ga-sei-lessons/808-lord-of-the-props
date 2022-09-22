import React, { Component } from 'react'

export default class Movie extends Component {
    render() {
        return (
            <>
                <h2>{this.props.title}</h2>

                <p>{this.props.hours}h {this.props.minutes}m</p>
            </>
        )
    }
}