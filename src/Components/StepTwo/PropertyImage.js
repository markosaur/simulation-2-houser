import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Axios from 'axios';
import store, { UPDATE_IMAGE } from './../../ducks/store'

export default class Wizard extends Component {
    constructor(){
        super();
        const reduxState = store.getState();
        this.state = {
            image: reduxState.image
        }
    }

    componentDidMount() {
        store.subscribe(()=> {
          const reduxState = store.getState();
          this.setState({
            image: reduxState.image,
          })
        })
      }

        handleImage = (value) => {
            this.setState({
                image:value
            })
        }

        saveChanges(){
            store.dispatch({
                type: UPDATE_IMAGE,
                payload: this.state.image
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
                <input placeholder='image' onChange={(event)=>this.handleImage(event.target.value)} />
                <Link to= '/Wizard/Step1'><button onClick={()=>this.saveChanges()}>Previous</button></Link>
                <Link to= '/Wizard/Step3'><button onClick={() => this.saveChanges()}>Next</button></Link>
            </div>
        )
    }
}