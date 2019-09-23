import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Axios from 'axios';
export default class Wizard extends Component {
    constructor(){
        super();

        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: 0
        }
        console.log(this.state)
    }

        handleName = (value) => {
            this.setState({
                name:value
            })
        }
        
        handleAddress = (address) => {
            this.setState({
                address:address
            })
        }

        handleCity = (city) => {
            this.setState({
                city:city
            })
        }

        handleState = (state) => {
            this.setState({
                state:state
            })
        }

        handleZip = (zip) => {
            this.setState({
                zip:zip
            })
        }

        handleNewHouse = () => {
            const {name, address, city, state, zip} = this.state
            const {history} = this.props
            const newHouse = {
                name,
                address,
                city,
                state,
                zip
            }
            Axios.post('api/houses', newHouse)
            .then(() => {
                history.push('/')
            });
        }
    
    render() {
        console.log(this.state)
        return (
            <div>
                Wizard
                <Link to= '/'><button>Cancel</button></Link>
                <button onClick = {this.handleNewHouse}> Complete </button>
                <input placeholder='name' onChange={(event)=>this.handleName(event.target.value)} />
                <input placeholder='address' onChange={(event)=>this.handleAddress(event.target.value)} />
                <input placeholder='city' onChange={(event)=>this.handleCity(event.target.value)} />
                <input placeholder='state' onChange={(event)=>this.handleState(event.target.value)} />
                <input placeholder='zip' onChange={(event)=>this.handleZip(event.target.value)} />
            </div>
        )
    }
}
