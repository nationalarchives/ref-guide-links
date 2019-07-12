module.exports = get_guides_for_series = (letter_code, series, data) => {

    const letter_code_found = data[letter_code] || false;

    if (letter_code_found) {

        const records_found_in_letter_code = data[letter_code]['records'] || false;

        if (records_found_in_letter_code) {

            const series_found = data[letter_code]['records'][series] || false;

            if (series_found) {
                return series_found.guides || {};
            }
        }
    }

    return {};

};
