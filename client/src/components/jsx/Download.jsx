// Libs
import * as htmlToImage from "html-to-image"
import download from "downloadjs"

// CSS
import "../css/Download.css"

// Hooks
import { useRef, useState } from "react"

const Download = () => {
    const sizeRef = useRef()
    const formatRef = useRef()

    const make_image = () => {
        const graphImage = document.querySelector("#data")
        htmlToImage.toPng(graphImage).then((dataURL) => {
          const image = new Image()
          image.src = dataURL
          download(dataURL, "node.png")
        //   const doc = new jsPDF('p', 'mm', 'a4')
        //   doc.addImage(dataURL, "png", 10, 78)
        //   doc.save("image")
        })
      }

      const downloadHandler = () => {
        const format = formatRef.current.value
        const width = Math.ceil(parseInt(sizeRef.current.children[1].value/1.65))
        const height = Math.ceil(parseInt(sizeRef.current.children[3].value/1.65))
        generateImage(format, width, height)
      }

      const generateImage = async (format, canvasWidth, canvasHeight) => {
          const graph = document.querySelector("#data")
        if (format === "svg"){
            const filter = () => graph.tagName !== "i"
            const imageData = await htmlToImage.toSvg(graph, {canvasWidth, canvasHeight, filter})
            download(imageData, "graph.svg")
        }
        else {
            const imageData = await htmlToImage.toPng(graph, {canvasWidth, canvasHeight})
            download(imageData, "graph.png")
        }
        
      }

    return (
        <section id="download">
            <div>
                <label htmlFor="format">Choose an Image Format</label>
                <select ref={formatRef} name="format" id="" >
                    <option value="" disabled selected>Choose an Image Format</option>
                    <option value="png">PNG</option>
                    <option value="svg">SVG</option>
                </select>
            </div>
            <div ref={sizeRef}>
                <label htmlFor="">Choose Width And Height</label>
                <input id="image-width" type="number" placeholder="Enter a width in pixels" />
                <span>X</span>
                <input id="image-height" type="number" placeholder="Enter a height in pixels" />
            </div>
            <div>
                <button onClick={() => downloadHandler()}>Download</button>
            </div>
            

        </section>
    )
}

export default Download
