const fetchData = async (searchTerm) => { //receive the text value
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: '64aab3ea',
            s: searchTerm
        }
    })
    console.log(response.data)
}

const input = document.querySelector('input')

const onInput = event => {
    fetchData(event.target.value)
};

input.addEventListener('input', debounce(onInput, 500)) 