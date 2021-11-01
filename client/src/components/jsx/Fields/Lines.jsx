import "../../css/Fields.css"

const Lines = () => {
    return (
        <div>
            <div className="">
                <label htmlFor="dotsize">Choose a Dot Size</label>
                <input type="number" min="1" placeholder="Example: 2"/>
            </div>
        </div>
    )
}

export default Lines
