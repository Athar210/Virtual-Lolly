import * as React from "react"
import "./layout.styles.css"

const Layout = ({ children }) => {
  return (
    <>
      <main className="lollymain">
        <h1 className="lolly-page__index-heading">Virtual Lollypop</h1>
        <p className="lolly-page__index-subheading">
          Developed by Athar Rasool
        </p>
        {children}
      </main>
    </>
  )
}

export default Layout
