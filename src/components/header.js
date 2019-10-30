import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Children } from "react"
const Header = (props) => {
  console.log(props.children)
  return (
  <header
    style={{
      background: `#00325b`,
      marginBottom: `1.5rem`,
    }}
  >
    <div
      style={{
      padding: `4rem`,
      margin: `0 auto`
      }}
    >
      <div>{props.children}</div>
    </div>
  </header>
)
        }

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
