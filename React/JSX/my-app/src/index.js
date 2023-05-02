import Clock from "./components/clock";
import Counter from "./components/counter"
import Destruct from "./components/destruct";
var React = require("react");
var ReactDom = require("react-dom");
const { default: App } = require("./App");



ReactDom.render(
<div>
<h1>hello </h1>
<Clock />
<Destruct />
<Counter />
<App />
</div>
,document.getElementById("root"));