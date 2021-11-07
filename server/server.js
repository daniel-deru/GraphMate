// Import the required packages to create a server
import express from "express"
import path from "path"

// Start the server and set the directory path
const server = express()
const __dirname = path.resolve()

// Tell the server where to find the static files
server.use(express.static(path.join(__dirname, "build")))

// Once the URL is matched it will send the application to the user
server.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"))
})

// Define the port where the application will be hosted
const PORT = process.env.PORT || 8080
server.listen(PORT, () => {
    console.log(`server running on port: ${PORT}`)
})