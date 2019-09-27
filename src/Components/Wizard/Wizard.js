import React, { Component } from 'react'
import {Link, Route, Switch} from 'react-router-dom'
import Axios from 'axios';
import PropertyInfo from '../StepOne/PropertyInfo';
import PropertyImage from '../StepTwo/PropertyImage';
import MortgageAndRent from '../StepThree/MortgageAndRent';
import store, { CANCEL_HOUSE} from './../../ducks/store'


export default class Wizard extends Component {
    constructor(){
        super();
        // const reduxState = store.getState();
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: 0,
            image: '',
            mortgage: 0,
            rent: 0
        }
    }
    // constructor(){
    //     super();

    //     this.state = {
    //         name: '',
    //         address: '',
    //         city: '',
    //         state: '',
    //         zip: 0
    //     }
    //     console.log(this.state)
    // }

        // handleName = (value) => {
        //     this.setState({
        //         name:value
        //     })
        // }
        
        // handleAddress = (address) => {
        //     this.setState({
        //         address:address
        //     })
        // }

        // handleCity = (city) => {
        //     this.setState({
        //         city:city
        //     })
        // }

        // handleState = (state) => {
        //     this.setState({
        //         state:state
        //     })
        // }

        // handleZip = (zip) => {
        //     this.setState({
        //         zip:zip
        //     })
        // }

        // handleNewHouse = () => {
        //     const {name, address, city, state, zip} = this.state
        //     const {history} = this.props
        //     const newHouse = {
        //         name,
        //         address,
        //         city,
        //         state,
        //         zip
        //     }
        //     Axios.post('api/houses', newHouse)
        //     .then(() => {
        //         history.push('/')
        //     });
        // }
    cancelChange(){
        store.dispatch({
            type: CANCEL_HOUSE
        })
    }
    
    render() {
        // console.log(this.state)
        return (
            <div>
                {/* Wizard */}
                <Link to= '/'><button>Cancel</button></Link>
                {/* <Link to = '/wizard/Step1'>
                    <h3>PropertyInfo</h3>
                </Link>
                <Link to = '/wizard/Step2'>
                    <h3>PropertyImage</h3>
                </Link>
                <Link to = '/wizard/Step3'>
                    <h3>Mortgage and Rent</h3>
                </Link> */} 
                <div>
                    <Switch>
                        <Route component={PropertyInfo} path='/Wizard/Step1' />
                        <Route component = {PropertyImage} path='/Wizard/Step2' />
                        <Route component = {MortgageAndRent} path='/Wizard/Step3' />
                    </Switch>
                </div>
               
                {/* <button onClick = {this.handleNewHouse}> Complete </button>
                <input placeholder='name' onChange={(event)=>this.handleName(event.target.value)} />
                <input placeholder='address' onChange={(event)=>this.handleAddress(event.target.value)} />
                <input placeholder='city' onChange={(event)=>this.handleCity(event.target.value)} />
                <input placeholder='state' onChange={(event)=>this.handleState(event.target.value)} />
                <input placeholder='zip' onChange={(event)=>this.handleZip(event.target.value)} /> */}
            </div> 
        )
    }
}
