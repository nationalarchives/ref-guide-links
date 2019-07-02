module.exports = log_it = (key, data) => {

    if (key !== false && data !== false) {

        const message = `${key} has ${Object.values(data.guides).length} guides`;

        let padding = '---';

        for (let i = 0; i < message.length; i++) {
            padding += '-'
        }

        const banner = `\n${padding}\n👉 ${message}\n${padding}`;

        console.log(banner);

        Object.values(data.guides).forEach((i, index) => console.log(`${index + 1}. ${i}`));
    }

};
