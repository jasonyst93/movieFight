const debounce = (func, delay = 1000) => {
    let timeoutId;
    return (...arg) => { //not just only one arg
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func.apply(null, arg); //func.apply keep check how many arg pass in to it
        }, delay)
    };
}