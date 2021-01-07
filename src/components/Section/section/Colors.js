import React, { Component } from 'react'
import '../css/Details.css'

export default class Colors extends Component {
    render() {
        const {colors} = this.props;
        return (
            <div>
                {
                    colors.map((color, index) => (
                        <button key={index} className="buttonstyle" style={{ background: color }}>
                        </button>
                    ))
                }
            </div>
        )
    }
}
