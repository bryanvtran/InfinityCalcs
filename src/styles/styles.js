import variables from './variables'

import headerImg from '../images/header-bg.png'

export const container = {
    margin: '0 auto',
    maxWidth: 960,
    padding: '0px 32px 24px',
    paddingTop: 0,
    '@media(max-width: 767px)': {
        padding: '0 24px 16px'
    },
}

export const nav = {
    padding: '24px 32px',

    '@media(max-width: 767px)': {
        padding: '24px 16px'
    },
}

export const navLogo = {   
    height: 42,
    margin: 0
}

export const navLinks = {
    listStyle: 'none',
    float: 'right',
    '& li': {
        display: 'inline-block',
        padding: '0 12px',
        lineHeight: '42px',
        ':last-of-type': {
            paddingRight: 0
        },
        '& a': {
            color: variables.black,
            textDecoration: 'none'
        }
    }
}

export const header = {
    textAlign: 'center',
    padding: '100px 32px 200px',
    background: `url(${headerImg}) bottom no-repeat`,
    backgroundSize: '100%',

    '@media(max-width: 1024px)': {
        padding: '80px 32px 160px'
    },


    '@media(max-width: 767px)': {
        padding: '32px 16px 64px'
    },

    '& h1': {
        color: variables.blue,
        marginBottom: '12px'
    }
}

export const footer = {
    textAlign: 'center'
}