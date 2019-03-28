import React from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Menu from '../views/common/menu'
// import Hello from '../views/base/helloword'
// import Install from '../views/base/install'
// import JsxIntroduce from '../views/base/jsxIntroduce'

const router = () => {
    return (
        <Menu/>
    // <Router>
    //     <Menu/>
    //     <Route path="/" component={Hello}/>
    //     <Route path="/JsxIntroduce" component={JsxIntroduce}/>
    //     <Route path="/Install" component={Install}/>
    // </Router>
    )
}

export default router;