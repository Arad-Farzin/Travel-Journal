import { useState, useEffect } from "react"
import Header from "./components/Header"
import Entry from "./components/Entry"
import Newmodal from "./components/Newmodal"
import data from "./data"

export default function App() {

    const [entries, setEntries] = useState(() => {
        const savedEntries = localStorage.getItem("travelEntries")
        return savedEntries ? JSON.parse(savedEntries) : data
    })

    useEffect(() => {
        localStorage.setItem("travelEntries", JSON.stringify(entries))
    }, [entries])

    const addEntry = (newEntry) => {
        const newId = entries.length + 1

        const formattedEntry = {
            id: newId,
            img: { 
                src: newEntry.imgSrc, 
                alt: newEntry.imgAlt 
            },
            title: newEntry.placeName,
            country: newEntry.country,
            googleMapsLink: newEntry.googleMapsLink,
            dates: newEntry.date,
            text: newEntry.text
        }

        setEntries([...entries, formattedEntry])
    }

    const entryElements = entries.map((entry) => (
        <Entry key={entry.id} entry={entry} />
    ))

    return (
        <>
            <Header />
            <main className="container">
                {entryElements}
            </main>
            <Newmodal addEntry={addEntry} />
        </>
    )
}