import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';
import store, { UPDATE_MORTGAGE, UPDATE_RENT, CANCEL_HOUSE } from './../../ducks/store'

export default class MortgageAndRent extends Component {
    constructor(){
        super();
        // const reduxState = store.getState();        
        this.state = {
           mortgage: 0,
           rent: 0
        }
    }

    // componentDidMount() {
    //     store.subscribe(()=> {
    //       const reduxState = store.getState();
    //       this.setState({
    //         mortgage: reduxState.mortgage,
    //         rent: reduxState.rent
    //       })
    //     })
    //   }

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

        // saveChanges(){
        //     store.dispatch({
        //         type: UPDATE_MORTGAGE,
        //         payload: this.state.mortgage
        //     })
        //     store.dispatch({
        //         type: UPDATE_RENT,
        //         payload: this.state.rent
        //     })
        // }

        handleNewHouse = () => {
            // const {name, address, city, state, zip, image, mortgage, rent} = this.state
            const reduxState = store.getState();        
            const {history} = this.props
            const newHouse = {
                name: reduxState.name,
                address: reduxState.address,
                city: reduxState.city,
                state: reduxState.state,
                zip: reduxState.zip,
                image: reduxState.image,
                mortgage: this.state.mortgage,
                rent: this.state.rent
            }
            axios.post('/api/houses', newHouse)
            .then(() => {
                store.dispatch({
                    type: CANCEL_HOUSE,
                })
                history.push('/')
            });

            //need to add code here to update state so that the values go back to zero , dispatch for cancel before history.push
        }
    
    render() {
        console.log(this.state)
        return (
            <div>
                {/* Wizard */}
                <input placeholder='mortgage' onChange={(event)=>this.handleMortgage(event.target.value)} value={this.state.mortgage}/>
                <input placeholder='rent' onChange={(event)=>this.handleRent(event.target.value)} value={this.state.rent}/>
                <Link to= '/Wizard/Step2'><button onClick={()=> this.saveChanges}>Previous</button></Link>
                <button onClick ={this.handleNewHouse}> Complete </button>
            </div>
        )
    }
}