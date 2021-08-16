

const applicationState = {
    penPals: [],
    topics: [],
    letters: []
}

const API = "http://localhost:8080"

export const fetchLetters = () => {
    return fetch(`${API}/letters`)
        .then(response => response.json())
            .then(
                (letters) => {
                    applicationState.letters = letters
                }
            )
}

export const getLetters = () => {
    return applicationState.letters.map((letter) => ({...letter}))
}