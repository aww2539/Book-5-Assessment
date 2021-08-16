import { fetchLetters } from "./dataAccess.js"
import { PenPals } from "./PenPals.js"

const mainContainer = document.querySelector("#container")

const renderHTML = () => {
    fetchLetters().then(
        () => {
        mainContainer.innerHTML = PenPals()
        })
}

renderHTML()