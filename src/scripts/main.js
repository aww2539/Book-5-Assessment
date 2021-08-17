import { fetchLetters, fetchPenPals, fetchTopics } from "./dataAccess.js"
import { PenPals } from "./PenPals.js"

const mainContainer = document.querySelector("#container")

const renderHTML = () => {
    fetchPenPals().then(
        () => {
        mainContainer.innerHTML = PenPals()
        })
    fetchTopics().then(
        () => {
        mainContainer.innerHTML = PenPals()
        })
    fetchLetters().then(
        () => {
        mainContainer.innerHTML = PenPals()
        })
}

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        renderHTML()
    }
)

renderHTML()