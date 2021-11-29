export async function fetchProduct() {
    let data = await fetch('https://store.tildacdn.com/api/tgetproduct/')
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            return data
        })
    return data
}
