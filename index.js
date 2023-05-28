const fetchData = async (searchTerm) => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: '64aab3ea',
            s: searchTerm
        }
    })
    if (response.data.Error) { //if Error exist return an empty array
        return [];
    }
    return response.data.Search;
}

const root = document.querySelector('.autocomplete');
root.innerHTML = `
<label><b>Search For a Movie</b></label>
<input class="input" />
<div class="dropdown">
    <div class="dropdown-menu">
        <div class="dropdown-content results"></div>
    </div>
</div>
`;

const input = document.querySelector('input');
const dropdown = document.querySelector('.dropdown');
const resultsWrapper = document.querySelector('.results');

const onInput = async event => {
    const movies = await fetchData(event.target.value)

    dropdown.classList.add('is-active') //active the dropdown once get data back
    for (let movie of movies) {
        const option = document.createElement('a'); //follow the bulma guide
        option.classList.add('dropdown-item');
        option.innerHTML = `
        <img src="${movie.Poster}" />
        ${movie.Title}
`;
        resultsWrapper.appendChild(option) //change to resultsWrapper
    }
};

input.addEventListener('input', debounce(onInput, 500)) 