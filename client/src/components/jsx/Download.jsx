// Libs
import * as htmlToImage from "html-to-image"
import download from "downloadjs"

// CSS
import "../css/Download.css"

// Hooks
import { useRef, useState } from "react"

// The download component to handle the download
const Download = () => {
    // these store the data without rerendering the component
    const sizeRef = useRef()
    const formatRef = useRef()

    // The first step in the image creation process
    // The format is determined as well as a mathematical
    // calculation to ensure the image is the correct size
    // This data is passed to the generate image function
    const downloadHandler = () => {
        const format = formatRef.current.value
        const width = Math.ceil(parseInt(sizeRef.current.children[1].value/1.65))
        const height = Math.ceil(parseInt(sizeRef.current.children[3].value/1.65))
        generateImage(format, width, height)
    }


    // This function generates the image based on the format
    // It grabs the html by the id and converts it to an image in the correct format
    const generateImage = async (format, canvasWidth, canvasHeight) => {
        const graph = document.querySelector("#data")
    if (format === "svg"){
        const filter = () => graph.tagName !== "i"
        const imageData = await htmlToImage.toSvg(graph, {canvasWidth, canvasHeight})
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
