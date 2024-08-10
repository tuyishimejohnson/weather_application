const FetchedData = async () => {

    const response = await fetch("https://jsonplaceholder.typicode.com/todos/")

    if(!response.ok) {
        throw Error("Failed to fetch information!")
    }
    return response.json()

}

export default FetchedData