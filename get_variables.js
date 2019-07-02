module.exports = get_variables = (reference) => {

    let letter_code_match = reference.match(/\w*?(?=\s)/),
        series_match = reference.match(/.*(?=\/)/);

    return {
        letter_code: (Array.isArray(letter_code_match)) ? letter_code_match[0] : false,
        series: (Array.isArray(series_match)) ? series_match[0] : false,
        reference
    }
};
