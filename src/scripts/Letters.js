import { getLetters } from "./dataAccess.js"




export const Letters = () => {
    const letters = getLetters()

    let html = `
        <ul>
            ${
                letters.map(
                    (letter) => {
                        return `<li>
                                    ${letter.letterBody}
                                </li>`
                }).join("")
            }
            </ul>
            `

    return html
}
            // <button class="request__delete"
            //         id="request--${request.id}">
            //     Delete
            // </button>