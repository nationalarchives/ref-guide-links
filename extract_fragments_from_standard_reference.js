module.exports = extract_fragments_from_standard_reference = (reference = false) => {

    let letter_code_match = reference.match(/^(\w*)(\s)?/);
    let series_match = reference.match(/(\w+\s\d+)/);

    return result = {
        letter_code: (Array.isArray(letter_code_match)) ? letter_code_match[1] : false,
        series: (Array.isArray(series_match)) ? series_match[1] : false,
        reference: reference
    };
};
