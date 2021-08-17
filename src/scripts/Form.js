import { Authors, Recipients } from "./Authors-Recipients.js"
import { sendRequest } from "./dataAccess.js"
import { Topics } from "./Topics.js"


export const Form = () => {
    let html = `
    
    <section class="form__options">
        <div class="form__authors">
        <h4>Author</h4>
            ${Authors()}
        </div>
    </section>

    <section class="form__options">
        <div class="form__letter">
        <h4>Letter</h4>
        <textarea name="letter" class="letter__body" rows="10" cols="50">
        </textarea>
        </div>
    </section>

    <section class="form__options">
        <div class="form__topics">
        <h4>Topics</h4>
            ${Topics()}
        </div>
    </section>

    <section class="form__options">
        <div class="form__recipient">
        <h4>Recipient</h4>
            ${Recipients()}
        </div>
    </section>

    <button class="button" id="sendLetter">Send Letter</button>

    `
    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "sendLetter") {
        // Get what the user typed into the form fields
        const userAuthor = document.querySelector("option[name='author']").value
        const userLetterBody = document.querySelector("textarea[name='letter']").value
        const userTopic = document.querySelector("input[name='topic']:checked").value
        console.log(userTopic)
        const userRecipient = document.querySelector("option[name='recipient']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            author: userAuthor,
            letterBody: userLetterBody,
            topic: userTopic,
            recipient: userRecipient,
            timestamp: Date()
        }

        // Send the data to the API for permanent storage
        sendRequest(dataToSendToAPI)
    }
})