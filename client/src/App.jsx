import { useEffect } from "react"
import Plot from "react-plotly.js"
import { jsPDF } from "jspdf"
import html2canvas from "html2canvas"
import * as htmlToImage from "html-to-image"
import download from "downloadjs"
import './App.css';

// Import the components
import Header from "./components/jsx/Header";
import { downloadImage } from "plotly.js"

function App() {

  // go to these websites to read more about the libs
  //https://html2canvas.hertzen.com/
  //https://plotly.com/javascript/react/
  // useEffect(() => {
  //   const element = document.getElementById('element-to-print');
  //   const options = {
  //     margin:       1,
  //     filename:     'myfile.pdf',
  //     image:        { type: 'jpeg', quality: 0.98 },
  //     html2canvas:  { scale: 1 },
  //     jsPDF:        { unit: 'in', format: 'page', orientation: 'portrait' },
  //     source: element,
  //     download: true
  //   }
  //   Html2Pdf.getPdf(options)
    
  // })

  useEffect(() => {
    
  }, [])

  const make_image = () => {
    const graph = document.querySelector("#data")
    htmlToImage.toPng(graph).then((dataURL) => {
      const image = new Image()
      image.src = dataURL
      console.log(dataURL)
      // download(dataURL, "node.png")
      const doc = new jsPDF('p', 'mm', 'a4')
      doc.addImage(dataURL, "png", 10, 78)
      doc.save("image")
    })
  }
  
  return (
    <div className="App">
        <Header/>
        <div id="data">
            {/* <Plot
            data={[
              {
                x: [1, 2, 3],
                y: [2, 6, 3],
                type: 'scatter',
                mode: 'lines+markers',
                marker: {color: 'red'},
              },
              {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
            ]}
            layout={ {width: 720, height: 540, title: 'A Fancy Plot'} }
           /> */}
        </div>
        
    </div>
  );
}

export default App;
