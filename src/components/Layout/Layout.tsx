// use layout component to repeat the layout across different pages.
// this can include header, footer, nav etc.

import React from "react"
import * as styles from "./Layout.module.scss";

const Layout: React.FC = ({ children }) => {
  return <div className={styles.testing}><h1>what is going on</h1><p>all is weird</p>
    {children}</div>
}

export default Layout
