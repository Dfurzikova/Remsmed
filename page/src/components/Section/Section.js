import React, { Component } from 'react';
import './Section.scss'

class Section extends Component {

    render() {
        return (
            <section id={this.props.id} className="section">
                {this.props.children}
            </section>
        )
    }
}
export default Section;

