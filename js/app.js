import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./view/Layout";
import Index from "./view/Index";
import Visitas from "./view/Visitas";
import Statistics from "./view/Statistics";

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Layout}>
			<IndexRoute component={Index}></IndexRoute>
			<Route path="/visitas" component={Visitas} />
			<Route path="/statistics" component={Statistics} />
		</Route>
	</Router>,
	document.getElementById('container')
);