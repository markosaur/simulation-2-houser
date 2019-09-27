import React, { Component } from 'react'

export default class House extends Component {
    render() {
        const { id, name, address, city, state, zip, image, mortgage, rent } = this.props.house
        return (
            <div>
                <h3>{name}</h3>
                <h2>{address}</h2>
                <p>{city}</p>
                <p>{state}</p>
                <h4>{zip}</h4>
                <img src={image} alt="house" />
                <h3>{mortgage}</h3>
                <h3>{rent}</h3>
                <button onClick = { () => this.props.deleteHouse(id)}>Delete</button>
            </div>
        )
    }
}
