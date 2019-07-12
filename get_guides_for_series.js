module.exports = get_guides_for_series = (letter_code, series, data) => {

    const series_found = data[letter_code]['records'][series] || false;

    if (series_found) {
        return series_found.guides || {};
    }

    return {};

};
