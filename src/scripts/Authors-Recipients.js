import { getPenPals } from "./dataAccess.js"

export const Authors = () => {
    const penPals = getPenPals()

    let html = "<select id='authors__dropdown'>"

    for (const penPal of penPals) {
        html += `<option name="author" id="penPal--${penPal.id}">${penPal.name}</option>`
    }

    html += "</select>"

    return html
}

export const Recipients = () => {
    const penPals = getPenPals()

    let html = "<select id='recipients__dropdown'>"

    for (const penPal of penPals) {
        html += `<option name="recipient" id="penPal--${penPal.id}">${penPal.name}</option>`
    }

    html += "</select>"

    return html
}