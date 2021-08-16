import { Letters } from "./Letters.js"


export const PenPals = () => {
    return `
    <h1>Pen Pal Society</h1>
    <article class="form">
        <section class="form__options">
            <div class="form__authors">
            <h3>Author</h3>
             
            </div>
        </section>

        <section class="form__options">
            <div class="form__letter">
            <h3>Letter</h3>
        
            </div>
        </section>

        <section class="form__options">
            <div class="form__topics">
            <h3>Topics</h3>
             
            </div>
        </section>
        <section class="form__options">
            <div class="form__recipient">
            <h3>Recipient</h3>
             
            </div>
        </section>
    </article>
    <article class="letters"
        <section>
            <h4>Letters</h4>
            ${Letters()}
        </section>
    </article>

    `
}