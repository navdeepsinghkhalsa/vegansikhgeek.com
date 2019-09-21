import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        <footer>
          <a href="/archives">Archives</a>
          {' - '}
          <a href="https://twitter.com/vegansikhgeek" target="_blank" rel="noopener noreferrer">twitter</a>
          {' - '}
          <a href="https://facebook.com/vegansikhgeek" target="_blank" rel="noopener noreferrer">facebook</a>
          {' - '}
          <a href="https://instagram.com/vegansikhgeek" target="_blank" rel="noopener noreferrer">instagram</a>
          {' - '}
          <a href="https://t.me/vegansikhgeek" target="_blank" rel="noopener noreferrer">telegram</a>
          {' - '}
          <a href="/feed.xml" target="_blank">rss</a>
          {' - '}
          <a href="http://eepurl.com/bjtoFf" target="_blank" rel="noopener noreferrer">email</a>
          <br />
          &copy; Navdeep Singh - <a href="https://creativecommons.org/licenses/by-sa/4.0/legalcode" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
        </footer>
      </div>
    )
  }
}

export default Layout
