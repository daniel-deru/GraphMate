import {useEffect} from "react"
import Plot from "react-plotly.js"
import './App.css';

function App() {

  // go to these websites to read more about the libs
  //https://html2canvas.hertzen.com/
  //https://plotly.com/javascript/react/
  useEffect(() => {
    const element = document.getElementById('element-to-print');
    const options = {
      margin:       1,
      filename:     'myfile.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 1 },
      jsPDF:        { unit: 'in', format: 'page', orientation: 'portrait' },
      source: element,
      download: true
    }
    Html2Pdf.getPdf(options)
    
  })
  
  return (
    <div className="App">
      <h1>This is an H1 tag</h1>
    </div>
  );
}

export default App;
