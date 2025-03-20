import { useState } from "react"

const NewModal = ({ addEntry }) => {

    const [formData, setFormData] = useState({
        imgSrc: "",
        imgAlt: "",
        country: "",
        googleMapsLink: "",
        placeName: "",
        date: "",
        text: ""
      })
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if (typeof addEntry === "function") {
            addEntry(formData) 
        } else {
            console.error("addEntry is not a function!")
        }

    }
    
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div className="button-only">
                <button className="open-modal" onClick={() => setIsOpen(true)}>
                    Add New Travel List
                </button>
            </div>

            {isOpen && (
                <>
                    <div className="overlay" onClick={() => setIsOpen(false)}></div> 
                    <form onSubmit={handleSubmit} className="modal">
                        <div className="modal-inner">
                            <h2>Fill out the following information-</h2>
                            <div className="info">
                                <p>Photo Address:</p><input type="text" name="imgSrc" placeholder="Right click on a google image and press copy image adress" onChange={handleChange} required></input>
                            </div>
                            <div className="info">
                                <p>Photo Name:</p><input type="text" name="imgAlt" placeholder="This will show up when the page fails to render the image" onChange={handleChange} required></input>
                            </div>
                            <div className="info">
                                <p>Country Name:</p><input type="text" name="country" placeholder="Enter country name" onChange={handleChange} required></input>
                            </div>
                            <div className="info">
                                <p>Google Maps link:</p><input type="text" name="googleMapsLink" placeholder="Google maps link goes here" onChange={handleChange} required></input>
                            </div>
                            <div className="info">
                                <p>Place Name:</p><input type="text" name="placeName" placeholder="The place you visited" onChange={handleChange} required></input>
                            </div>
                            <div className="info">
                                <p>Date:</p><input type="text" name="date" placeholder="Timespan of when you visited that place" onChange={handleChange} required></input>
                            </div>
                            <div className="info">
                                <p>Text:</p><input type="text" name="text" placeholder="Write anything you like to say about the place" onChange={handleChange} required></input>
                            </div>
                        </div>
                        <div className="submit">
                            <input className="submit-btn" type="submit"></input>
                        </div>
                        <div className="close-modal-div">
                            <button className="close-modal" onClick={() => setIsOpen(false)}>
                                Close
                            </button>
                        </div>
                    </form>
                </>
            )}
        </>
    )
}

export default NewModal