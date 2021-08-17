import { AuthorsAndRecipients } from "./Authors-Recipients.js"
import { Topics } from "./Topics.js"


export const Form = () => {
    let html = `
    
    <section class="form__options">
        <div class="form__authors">
        <h4>Author</h4>
            ${AuthorsAndRecipients()}
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
            ${AuthorsAndRecipients()}
        </div>
    </section>

    `
    return html
}