import React from 'react'

import * as styles from '../styles/styles.js'

class Definition extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            opened: this.props.opened
        }
        this.toggleDefinition = this.toggleDefinition.bind(this)
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        this.setState({
            opened: nextProps.opened
        })
    }

    toggleDefinition() {
        this.setState({ 
            opened: !this.state.opened
        })
    }

    render() {
        const { term } = this.props
        const css = this.state.opened ? [styles.definition] : [styles.definition, styles.hideDefinition]
        return (
            <li css={css}>
                <div onClick={this.toggleDefinition} className="term">
                    {term.node.frontmatter.title}
                </div>
                <div className="definition" dangerouslySetInnerHTML={{ __html: term.node.html }}/>                         
            </li>
        )
    }
}

export default Definition