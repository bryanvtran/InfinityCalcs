import React from 'react'
import PropTypes from 'prop-types'

import * as styles from '../styles/styles.js'

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
        this.onMouseEnter = this.onMouseEnter.bind(this)
        this.onMouseLeave = this.onMouseLeave.bind(this)
    }

    onMouseEnter(e) {
        e.preventDefault()
        this.setState(state => ({
            active: true
        }))
    }
    onMouseLeave(e) {
        e.preventDefault()
        this.setState(state => ({
            active: false
        }))
    }

    render() {
        return (
            <div onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} css={styles.dropdownLink}>
                <button css={this.state.active ? styles.active : {}} href="#">{this.props.title}</button>
                <ul style={this.state.active ? {display: 'block'} : {display: 'none'}}>
                    {React.Children.map(this.props.children, (child) => (<li>{child}</li>))}
                </ul>
            </div>
        )
    }
}


Dropdown.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

export default Dropdown