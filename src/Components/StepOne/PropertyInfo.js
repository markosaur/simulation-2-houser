import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Axios from 'axios';
import store, { UPDATE_NAME, UPDATE_ADDRESS, UPDATE_CITY, UPDATE_STATE, UPDATE_ZIP } from './../../ducks/store'
export default class Wizard extends Component {
    constructor(props){
        super(props);
        const reduxState = store.getState();
        this.state = {
            name: reduxState.name,
            address: reduxState.address,
            city: reduxState.city,
            state: reduxState.state,
            zip: reduxState.zip
        };
    }

    componentDidMount() {
        store.subscribe(()=> {
          const reduxState = store.getState();
        //   const {name, address, city, state, zip} = this.props
          this.setState({
            name: reduxState.name,
            address: reduxState.address,
            city: reduxState.city,
            state: reduxState.state,
            zip: reduxState.zip
          })
        })
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

        saveChanges(){
            store.dispatch({
                type:UPDATE_NAME,
                payload: this.state.name
            })
            store.dispatch({
                type:UPDATE_ADDRESS,
                payload: this.state.address
            })
            store.dispatch({
                type:UPDATE_CITY,
                payload: this.state.city
            })
            store.dispatch({
                type:UPDATE_STATE,
                payload: this.state.state
            })
            store.dispatch({
                type:UPDATE_ZIP,
                payload: this.state.zip
            })
        }

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
    
    render() {
        console.log(this.state)
        return (
            <div>
                Wizard
                {/* <button onClick = {this.handleNewHouse}> Complete </button> */}
                <input placeholder='name' onChange={(event)=>this.handleName(event.target.value)} value={this.state.name} />
                <input placeholder='address' onChange={(event)=>this.handleAddress(event.target.value)} value={this.state.address}/>
                <input placeholder='city' onChange={(event)=>this.handleCity(event.target.value)} value={this.state.city}/>
                <input placeholder='state' onChange={(event)=>this.handleState(event.target.value)} value={this.state.state}/>
                <input placeholder='zip' onChange={(event)=>this.handleZip(event.target.value)} value={this.state.zip}/>
                <Link to='/Wizard/Step2'><button onClick = {()=> this.saveChanges()}>Next</button></Link>
            </div>
        )
    }
}
