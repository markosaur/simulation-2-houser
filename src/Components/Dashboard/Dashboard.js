import React, { Component } from 'react'
import House from '../House/House'
import {Link} from 'react-router-dom'
import Axios from 'axios'

export default class Dashboard extends Component {
    constructor () {
        super()
        this.state = {
            houses: []
        }
        console.log(this.state.houses)
    }
    
    componentDidMount = () =>{
        this.getHouses();
        console.log('attempting to mount')
    }
    getHouses(){
        Axios.get('/api/houses').then((response)=>{
            this.setState({houses: response.data})
        })
    }
    


    render() {

        const mappedHouses = this.state.houses.map((house, i) => {
            return( <House house = {house} getHouses = {this.getHouses} /> )
        })

        return (
            <div>
                Dashboard
                {mappedHouses}
                <Link to='/wizard'><button>Add New Property</button></Link>
            </div>
        )
    }
}