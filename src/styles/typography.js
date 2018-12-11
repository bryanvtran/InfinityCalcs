import Typography from "typography"
import bootstrapTheme from "typography-theme-bootstrap"

import variables from './variables'

bootstrapTheme.color = variables.black

const typography = new Typography(bootstrapTheme)

export default typography