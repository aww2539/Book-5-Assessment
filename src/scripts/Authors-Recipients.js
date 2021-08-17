import { getPenPals } from "./dataAccess.js"

export const AuthorsAndRecipients = () => {
    const penPals = getPenPals()

    let html = "<select id='penPals__dropdown'>"

    for (const penPal of penPals) {
        html += `<option name="penPal" id="penPal--${penPal.id}">${penPal.name}</option>`
    }

    html += "</select>"

    return html
}