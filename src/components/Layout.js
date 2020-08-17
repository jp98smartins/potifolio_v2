import React from "react"
import Header from "./Navbar"
import Footer from "./Footer"
import SocialMedia from "./SocialMedia"

const Layout = props => {
  return (
    <div>
      <Header />
      <SocialMedia />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
