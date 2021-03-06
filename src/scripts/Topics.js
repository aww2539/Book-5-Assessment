import { getTopics } from "./dataAccess.js"

export const Topics = () => {
    const topics = getTopics()

    let html = "<ul>"

    for (const topic of topics) {
        html += `<li>
                    <input type="radio" name="topic" value="${topic.name}" id="${topic.id}">${topic.name}
                </li>`
    }

    html += "</ul>"

    return html
}

