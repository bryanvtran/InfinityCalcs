import React from 'react'

import * as styles from '../styles/styles'

import Layout from '../components/layout'
import Header from '../components/header'
import SectionHeader from '../components/section-header'
import CalcLink from '../components/calc-link'

const IndexPage = () => (
  <Layout>
    <Header title="TI-84 Graphing Calculator Help" subtitle="Tutorials | Programming | Games"/>
    <div css={styles.container}>
      <SectionHeader title="TI-84 Graphing Calculators" />
      <div css={styles.calcLinkWrapper}>
        <CalcLink title="TI-84 Plus" href="ti-84-plus/" color={styles.bgBlue} />
        <CalcLink title="TI-84 CE" href="ti-84-ce/" color={styles.bgRed} />
      </div>
      <div css={styles.calcLinkWrapper}>
        <CalcLink title="TI-83 Plus" href="ti-83-plus/" color={styles.bgGreen} />
        <CalcLink title="TI-89 Titanium" href="ti-89-titanium/" color={styles.bgPurple} />
      </div>
    </div>
  </Layout>
)

export default IndexPage
