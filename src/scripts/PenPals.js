import { Form } from "./Form.js"
import { Letters } from "./Letters.js"


export const PenPals = () => {
    return `
    <h1>Pen Pal Society</h1>
    <article class="form">
        ${Form()}
    </article>
    <article class="letters"
        <section>
            <h4>Letters</h4>
            ${Letters()}
        </section>
    </article>

    `
}

