import './App.css';
import { Switch, Route } from "react-router-dom"


// Hooks
import { useEffect } from "react"

// Import the components
import Download from './components/jsx/Download';
import Header from "./components/jsx/Header"
import Home from "./components/jsx/Home"
import Chart from "./components/jsx/Chart"
import Bar from "./components/jsx/Graphs/Bar"
import Line from "./components/jsx/Graphs/Line"
import Pie from "./components/jsx/Graphs/Pie"
import Histogram from "./components/jsx/Graphs/Histogram"
import Scatter from "./components/jsx/Graphs/Scatter"

function App() {
  return (
      <div className="App">
          {/* All the components to be rendered are defined here. The header is always rendered
              The Home and Info pages render separately on their own and the graphs all render
              Alongside the chart Component
          */}
          <Header/>
          <div id="main">
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/line" component={Line}/>
              <Route exact path="/bar" component={Bar}/>
              <Route exact path="/pie" component={Pie}/>
              <Route exact path="/histogram" component={Histogram}/>
              <Route exact path="/scatter" component={Scatter}/>
              <Route exact path="/download" component={Download}/>
            </Switch>
            {window.location.pathname !== "/" && <Chart/>}
            
          </div>

      </div>
  );
}
// Export the App component
export default App;
