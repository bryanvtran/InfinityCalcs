import variables from './variables'

import arrowIcon from '../images/arrow.png'
import headerImg from '../images/header-bg.png'

export const active = {
    ':after': {
        transformOrigin: 'left !important',
        transform: 'scaleX(1) !important',
    }
}

export const hover = {
    ':after': {
        content: '""',
        position: 'absolute',
        bottom: '-4px',
        left: '2px',
        height: '2px',
        width: '20px',
        backgroundColor: variables.blue,
        transitionOrigin: 'right',
        transform: 'scaleX(0)',
        transition: 'transform .3s',
    },
    ':hover': {
        ':after': {
            transformOrigin: 'left',
            transform: 'scaleX(1)',
        }
    }
}


export const container = {
    margin: '0 auto',
    maxWidth: 960,
    padding: '48px 32px',
    '@media(max-width: 767px)': {
        padding: '24px 16px'
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
        padding: '0 16px',
        lineHeight: '42px',
        ':last-of-type': {
            paddingRight: 0
        },
        '& a, & button': {
            color: variables.black,
            textDecoration: 'none',
            position: 'relative',
            background: 'transparent',
            padding: 0,
            ...hover
        }
    }
}

export const dropdownLink = {
    position: 'relative',
    'li &': {
        paddingRight: 14
    },
    '& button': {
        border: 'none',
        cursor: 'pointer',
        outline: 'none',
        zIndex: 2,
        ':before': {
            content: '""',
            position: 'absolute',
            right: -16,
            top: 4,
            width: 10,
            height: '1em',
            background: `url(${arrowIcon}) no-repeat center center`,
            backgroundSize: '100%'
        },
    },
    '& ul': {
        display: 'none',
        position: 'absolute',
        top: 0,
        left: -6,
        margin: 0,
        paddingTop: '2em',
        width: 'calc(100% + 14px)',
        border: `1px solid ${variables.black}`,
        textAlign: 'center',
        background: variables.white,

        '& li': {
            width: '85%',
            padding: 0,
            zIndex: 1,
            borderTop: `1px solid ${variables.black}`,
            margin: 0,

            ':first-of-type': {
                border: 'none'
            },

            '& a': {
                ':hover': {
                    ':after': {
                        transform: 'scaleX(0)'
                    }
                }
            }
        }
    },
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
    textAlign: 'center',
    padding: '16px 0',
}

export const footerBar = {
    height: '3px',
    border: 0,
    borderTop: `3px solid ${variables.black}`,
    background: 'none',
    padding: '0 32px',
    margin: '0 auto',
    marginBottom: '12px',
        
    '@media(max-width: 767px)': {
        padding: '0 16px'
    },
}

export const footerBarSmall = {
    ...footerBar,
    width: '60%',
    marginBottom: '64px'
}

export const youtubeImg = {
    width: '60%',
    maxWidth: '250px',
    margin: '0 auto',
    marginBottom: '64px'
}

export const heartIcon = {
    height: '1em',
    lineHeight: 1,
    paddingTop: '2px'
}

export const sectionHeader = {
    fontSize: '1em',
    fontWeight: 600,
    border: `3px solid ${variables.black}`,
    display: 'inline-block',
    boxShadow: '2px 2px 4px 0 rgba(0,0,0,0.50)',
    padding: '0 8px',
    lineHeight: 1.5,
    marginBottom: '32px'
}

export const bgBlue = {
    backgroundColor: variables.lightBlue
}

export const bgRed = {
    backgroundColor: variables.red
}

export const bgGreen = {
    backgroundColor: variables.green
}

export const bgPurple = {
    backgroundColor: variables.purple
}

export const calcLinkWrapper = {
    width: '80%',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',

    '@media(max-width: 767px)': {
        width: '100%'
    },

    '& a': {
        border: `3px solid ${variables.black}`,
        padding: '48px 0',
        borderRadius: '12px',
        textAlign: 'center',
        color: variables.black,
        fontWeight: 600,
        margin: '32px',
        width: '35%',
        textDecoration: 'none',
        transition: 'all .2s ease-in-out',
        ':hover': {
            transform: 'scale(1.03)'
        },
        '@media(max-width: 767px)': {
            width: '100%',
            margin: '18px'
        },
    }
}