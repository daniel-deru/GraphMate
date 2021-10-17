
import Plot from "react-plotly.js"
import { jsPDF } from "jspdf"
import html2canvas from "html2canvas"
import * as htmlToImage from "html-to-image"
import download from "downloadjs"
import './App.css';
import { Switch, Route } from "react-router-dom"
import { bindActionCreators } from "redux"
import { actionCreators } from "./state/actionCreators/export"

// Hooks
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

// Import the components
import Header from "./components/jsx/Header"
import Home from "./components/jsx/Home"
import Chart from "./components/jsx/Chart"
import Bar from "./components/jsx/Bar"
import Line from "./components/jsx/Line"
import Pie from "./components/jsx/Pie"
import Histogram from "./components/jsx/Histogram"
import Scatter from "./components/jsx/Scatter"

function App() {

  // go to these websites to read more about the libs
  //https://plotly.com/javascript/react/

  useEffect(() => {
    
  }, [])

  const state = useSelector( (state) => state)
  const dispatch = useDispatch()
  const AC = bindActionCreators(actionCreators, dispatch)

  const make_image = () => {
    const graph = document.querySelector("#data")
    htmlToImage.toPng(graph).then((dataURL) => {
      const image = new Image()
      image.src = dataURL
      // download(dataURL, "node.png")
      const doc = new jsPDF('p', 'mm', 'a4')
      doc.addImage(dataURL, "png", 10, 78)
      doc.save("image")
    })
  }
  console.log(window.location)
  return (
      <div className="App">
          <Header/>
          <div id="main">
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/line" component={Line}/>
              <Route exact path="/bar" component={Bar}/>
              <Route exact path="/pie" component={Pie}/>
              <Route exact path="/histogram" component={Histogram}/>
              <Route exact path="/scatter" component={Scatter}/>
            </Switch>
            {window.location.pathname == "/" ? null : <Chart/>}
            
          </div>

      </div>
  );
}

export default App;
