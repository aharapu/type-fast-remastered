"use strict";
// use layout component to repeat the layout across different pages.
// this can include header, footer, nav etc.
exports.__esModule = true;
var react_1 = require("react");
// import * as styles from "./Layout.module.css";
var styles = require('./Layout.module.scss');
var Layout = function (_a) {
    var children = _a.children;
    return <div className={styles.testing}><h1>what is going on</h1><p>all is weird</p>
    {children}</div>;
};
exports["default"] = Layout;
