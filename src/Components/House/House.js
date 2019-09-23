import React, { Component } from 'react'

export default class House extends Component {
    render() {
        const { name, address, city, state, zip } = this.props.house
        return (
            <div>
                <h3>{name}</h3>
                <h2>{address}</h2>
                <p>{city}</p>
                <p>{state}</p>
                <h4>{zip}</h4>
                <button>Delete</button>
            </div>
        )
    }
}
