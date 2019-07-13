module.exports = extract_fragments_from_standard_reference = (reference) => {

    let letter_code_match = reference.match(/^\w*$/) ? reference.match(/^\w*$/) : reference.match(/\w*?(?=\s)/);
    let series_match = reference.match(/\w+\s\d+/);
    let reference_match = letter_code_match[0] === reference ? false : reference;

    let result = {
        letter_code: (Array.isArray(letter_code_match)) ? letter_code_match[0] : false,
        series: (Array.isArray(series_match)) ? series_match[0] : false,
        reference: reference_match
    };

    return result;
};
