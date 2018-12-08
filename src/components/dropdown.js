import React from 'react'
import PropTypes from 'prop-types'

import * as styles from '../styles/styles.js'

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        e.preventDefault()
        this.setState(state => ({
            active: !state.active
        }))
    }

    render() {
        return (
            <div css={styles.dropdownLink }>
                <button css={this.state.active ? styles.active : {}} onClick={this.handleClick} href="#">{this.props.title}</button>
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