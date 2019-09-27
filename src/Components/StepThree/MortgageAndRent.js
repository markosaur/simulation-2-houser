import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Axios from 'axios';
import store, { UPDATE_MORTGAGE, UPDATE_RENT } from './../../ducks/store'

export default class MortgageAndRent extends Component {
    constructor(){
        super();
        const reduxState = store.getState();        
        this.state = {
           mortgage: reduxState.mortgage,
           rent: reduxState.rent
        }
    }

    componentDidMount() {
        store.subscribe(()=> {
          const reduxState = store.getState();
          this.setState({
            mortgage: reduxState.mortgage,
            rent: reduxState.rent
          })
        })
      }

        handleMortgage = (value) => {
            this.setState({
                mortgage:value
            })
        }
        
        handleRent = (value) => {
            this.setState({
                rent:value
            })
        }

        saveChanges(){
            store.dispatch({
                type: UPDATE_MORTGAGE,
                payload: this.state.mortgage
            })
            store.dispatch({
                type: UPDATE_RENT,
                payload: this.state.rent
            })
        }

        handleNewHouse = () => {
            const {name, address, city, state, zip, image, mortgage, rent} = this.state
            const reduxState = store.getState();        
            const {history} = this.props
            const newHouse = {
                name: reduxState.name,
                address: reduxState.address,
                city: reduxState.city,
                state: reduxState.state,
                zip: reduxState.zip,
                image: reduxState.name,
                mortgage: this.state.mortgage,
                rent: this.state.rent
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
                {/* Wizard */}
                <input placeholder='mortgage' onChange={(event)=>this.handleMortgage(event.target.value)} />
                <input placeholder='rent' onChange={(event)=>this.handleRent(event.target.value)} />
                <Link to= '/Wizard/Step2'><button onClick={()=> this.saveChanges}>Previous</button></Link>
                <Link to= '/'><button onClick={()=> this.saveChanges} onClick ={this.handleNewHouse}> Complete </button></Link>
            </div>
        )
    }
}