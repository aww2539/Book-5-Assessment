

const applicationState = {
    penPals: [],
    topics: [],
    letters: []
}

const API = "http://localhost:8080"
const mainContainer = document.querySelector("#container")

export const fetchLetters = () => {
    return fetch(`${API}/letters`)
        .then(response => response.json())
            .then(
                (letters) => {
                    applicationState.letters = letters
                }
            )
}

export const fetchPenPals = () => {
    return fetch(`${API}/penPals`)
        .then(response => response.json())
            .then(
                (penPals) => {
                    applicationState.penPals = penPals
                }
            )
}

export const fetchTopics = () => {
    return fetch(`${API}/topics`)
        .then(response => response.json())
            .then(
                (topics) => {
                    applicationState.topics = topics
                }
            )
}

export const sendRequest = (userForm) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userForm)
    }

    return fetch(`${API}/letters`, fetchOptions)
        .then(response => response.json())
            .then(() => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            })
}

export const getLetters = () => {
    return applicationState.letters.map((letter) => ({...letter}))
}

export const getPenPals = () => {
    return applicationState.penPals.map((penPal) => ({...penPal}))
}

export const getTopics = () => {
    return applicationState.topics.map((topic) => ({...topic}))
}