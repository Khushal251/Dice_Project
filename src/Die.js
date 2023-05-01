import React, { Component } from 'react';
import './Die.css'

// class Die extends Component {
//     render() {
//         return (
//         // <h1>DIE!</h1>
//         <i className='fas fa-dice-one'/>
//         )
//     }
// }

class Die extends Component {
    render() {
        return (
        // <h1>DIE!</h1>
        <i className={`Die fas fa-dice-${this.props.face} ${this.props.rolling?'shaking':""}`}/>
        )
    }
}

export default Die ;