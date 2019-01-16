import variables from './variables'

import arrowIcon from '../images/arrow.png'
import headerImg from '../images/header-bg.png'
import underlineImg from '../images/underline.png'

export const defaultMobilePadding = {
    '@media(max-width: 767px)': {
        padding: '24px 16px'
    },
}

export const defaultPadding = {
    padding: '48px 32px',
    ...defaultMobilePadding
}

export const link = {
    color: variables.lightBlue,
    textDecoration: 'underline',
}

export const center = {
    textAlign: 'center'
}

export const bold = {
    fontWeight: 600,
}

export const textSmall = {
    fontSize: '.9em'
}

export const clearLink = {
    color: variables.black,
    textDecoration: 'none'
}

export const active = {
    ':before': {
        transform: 'scale(-1)'
    },
    ':after': {
        transformOrigin: 'left !important',
        transform: 'scaleX(1) !important',
    }
}

export const hover = {
    position: 'relative',

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

export const underline = {
    position: 'relative',

    ':after': {
        content: '""',
        position: 'absolute',
        bottom: '-4px',
        left: '2px',
        height: '3px',
        width: '30px',
        backgroundColor: variables.lightBlue,
    },
}

export const selected = {
    borderBottom: `3px solid ${variables.lightBlue}`
}

export const container = {
    margin: '0 auto',
    maxWidth: 960,
    ...defaultPadding
}

export const nav = {
    padding: '24px 32px',
    position: 'absolute',
    width: '100%',

    '@media(max-width: 767px)': {
        padding: '24px 16px',
        position: 'relative',
    },
}

export const navOpen = {
      '@media(max-width: 767px)': {
        background: variables.blue
    },  
}

export const navLogo = {   
    height: 42,
    margin: 0,
}

export const navLogoMobile = {
    display: 'none',
    '@media(max-width: 767px)': {
        display: 'block'
     }
}

export const navLinks = {
    listStyle: 'none',
    float: 'right',
    margin: 0,

    '& li': {
        display: 'inline-block',
        padding: '0 16px',
        lineHeight: '42px',
        margin: 0,
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

export const hamburger = {
    display: 'none',

    '@media(max-width: 767px)': {
        display: 'block',
        width: '35px',
        height: '35px',
        position: 'absolute',
        top: 32,
        right: 16,
        transform: 'rotate(0deg)',
        transition: '.5s ease-in-out',
        cursor: 'pointer',

        '& span': {
            display: 'block',
            position: 'absolute',
            height: 3,
            width: '100%',
            background: variables.black,
            opacity: 1,
            left: 0,
            transform: 'rotate(0deg)',
            transition: '.25s ease-in-out',

            ':nth-of-type(1)': {
                top: 0
            },
            ':nth-of-type(2), :nth-of-type(3)': {
                top: 12
            },
            ':nth-of-type(4)': {
                top: 24
            }
        }
    }
}

export const hamburgerOpen = {
    '@media(max-width: 767px)': {
        '& span': {
            background: variables.white,

            ':nth-of-type(1), :nth-of-type(4)': {
                top: 12,
                width: '0%',
                left: '50%',
            },
            ':nth-of-type(2)': {
                transform: 'rotate(45deg)',
            },
            ':nth-of-type(3)': {
                transform: 'rotate(-45deg)',
            }
        }
    }
}

export const navLinksMobile = {
    '@media(max-width: 767px)': {
        display: 'none',
        float: 'none',
        textAlign: 'center',
        marginTop: '16px',

        '& li': {
            display: 'block',
            fontWeight: '300',
            fontSize: '1.5em',
            padding: '12px 16px',

            ':last-of-type': {
                paddingRight: '16px'
            },

            '& a, & button': {
                color: variables.white,
            }
        }
    },
}

export const navLinksMobileOpen = {
    '@media(max-width: 767px)': {
        display: 'block'
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
            top: 'calc(50% - .5em)',
            width: 10,
            height: '1em',
            background: `url(${arrowIcon}) no-repeat center center`,
            backgroundSize: '100%',
            transition: 'all .2s ease-in-out',
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

export const dropdownLinkMobile = {
     '@media(max-width: 767px)': {
        '& button:before': {
            content: 'none'
        },
         '& ul': {
            display: 'block',
            position: 'relative',
            width: '100%',
            background: 'transparent',
            border: 'none',
            padding: 0,
            left: 0,

            '& li': {
                width: '100%',
                padding: '8px 0',
                fontSize: '1em',
                lineHeight: 1.2,
                border: 'none',

                ':last-of-type': {
                    paddingRight: '0'
                },
            }
         }
     }
}

export const header = {
    textAlign: 'center',
    padding: '160px 32px 200px',
    background: `url(${headerImg}) bottom no-repeat`,
    backgroundSize: '100%',

    '@media(max-width: 1024px)': {
        padding: '160px 32px'
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
    fontSize: '1.2em',
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

export const calcHeader = {
    ...defaultPadding,
    paddingTop: 100,
    paddingBottom: 100,
    textAlign: 'center',
    background: variables.lightBlueBg,
    '& h1': {
        position: 'relative',
        display: 'inline-block',
        marginBottom: 0,

        ':after': {
            content: '""',
            background: `url(${underlineImg}) repeat-x`,
            height: 4,
            backgroundSize: 'contain',
            width: '100%',
            position: 'absolute',
            bottom: 0,
            left: 0,
        }
    }
}

export const calcContainer = {
    borderBottom: `1px solid ${variables.black}`,
    '& h2': {
        ...underline,
        fontSize: '1.2em',
        lineHeight: 1.2,
        marginBottom: 32
    },
    '& p.body': {
        width: '90%',
        margin: '0 auto 32px'
    }
}

export const whereToFindContainer = {
    borderBottom: 'none'
}

export const noBorder = {
    border: 'none'
}

export const definitionsNav = {
    '& ul': {
        listStyle: 'none',
        margin: '1em auto 2em',
        textAlign: 'center',
        '& li': {
            display: 'inline',
            '& span': {
                cursor: 'pointer'
            },
            '& a': {
                textDecoration: 'none',
                color: variables.black
            }
        }
    }
}

export const definitions = {
    '& p': {
        fontWeight: 600,
        fontSize: '1.6em'
    },
    '& ul': {
        maxWidth: 600,
        margin: '0 auto',
        columnCount: 3,
        columnGap: 4,
        listStylePosition: 'inside',
        '& li': {
            marginBottom: 4,
        }
    }
}

export const definitionsList = {
    '& p.title': {
        fontWeight: 600,
        fontSize: '1.6em'
    },
    '> ul': {
        maxWidth: '85%',
        margin: '0 auto',
        listStyle: 'none',
        '> li': {
            margin: 0,
            padding: '.8em 0',
            borderBottom: `3px solid ${variables.teal}`,
        },
        '& .active': {
            '& .title:before': {
                transform: 'rotate(0)',
            },
            '& .definition': {
                display: 'block',
            }
        }
    }
}

export const definition = {
    '& .term': {
        '> a': {
            ...clearLink
        },
        ':before': {
            content: '""',
            background: `url(${arrowIcon}) no-repeat center center`,
            backgroundSize: '.7em',
            display: 'inline-block',
            height: '.9em',
            width: '.9em',
            transform: 'rotate(-90deg)',
            marginRight: 4,
        },
    },

    '& .definition': {
        padding: '1em',
        '& p': {
            marginBottom: '1em',
        },
        '& em': {
            fontStyle: 'normal',
            fontWeight: 700,
            color: variables.teal
        },
        '& strong > em': {
            fontStyle: 'normal',
            fontWeight: 700,
            color: variables.lightGreen
        },
        '*:last-child': {
            marginBottom: 0
        }
    }
}

export const showDefinition = {
    '& .term': {
        ':before': {
            transform: 'rotate(0)',
        }
    },
    '& .definition': {
        display: 'block'
    }
}

export const hideDefinition = {
    '& .definition': {
        display: 'none'
    }
}

export const mathProblems = {
    listStyle: 'none',
    margin: '1em auto',
    columnCount: 3,
    columnGap: 16,
    maxWidth: 600,
    '@media(max-width: 767px)': {
        columnCount: 2,
    },
    '& li': {
        '& a': {
            display: 'inline-block',
            width: '100%',
            padding: '42px 12px',
            backgroundColor: variables.lightBlue,
            fontWeight: 600,
            border: `2px solid ${variables.black}`,
            textAlign: 'center',
            color: variables.white,
            textDecoration: 'none',
            '@media(max-width: 767px)': {
                padding: '32px 6px'
            }
        }
    }
}

export const programming = {
    listStyle: 'none',
    margin: '1em auto',
    maxWidth: 600,
    '& .wrapper': {
        padding: '1em 0',
        borderBottom: `3px solid ${variables.teal}`,
    },
    '& .title': {
        cursor: 'pointer',
        ':before': {
            content: '""',
            background: `url(${arrowIcon}) no-repeat center center`,
            backgroundSize: '.7em',
            display: 'inline-block',
            height: '.9em',
            width: '.9em',
            transform: 'rotate(-90deg)',
            marginRight: 4,
        }
    },
    '& .definition': {
        display: 'none',
        padding: '1em 0 0',
        textAlign: 'center',
        width: '90%',
        margin: '0 auto'
    },
    '& .active': {
        '& .title:before': {
            transform: 'rotate(0)',
        },
        '& .definition': {
            display: 'block'
        }
    }
}
