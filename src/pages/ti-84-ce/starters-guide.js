import React from 'react'
// import PropTypes from 'prop-types'

import Layout from '../../components/layout'
import CalcLayout from '../../components/calc-layout'

import * as styles from '../../styles/styles.js'

const StartersGuide = () => (
    <Layout>
        <CalcLayout title="TI-84 CE Starter's Guide" titleHref="/ti-84-ce/">
          <div css={[styles.container, styles.calcContainer]}>
            <h2>Getting Started</h2>
          </div>
        </CalcLayout>
    </Layout>
)

export default StartersGuide
