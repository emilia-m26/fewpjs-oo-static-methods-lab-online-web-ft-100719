class Formatter {
    //add static methods here
    static capitalize(string) {
        // capitalizes first letter
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    static sanitize(string) {
        // removes any non alpha-numeric characters except dash and single quotes and space
        return string.replace(/[^A-Za-z0-9- ']+/g, '');
    }
    static titleize(string) {
        let split = string.split(" ")
        let acceptable = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
        let titleized = ""
        for (let i = 0; i < split.length; i++) {
            if (!acceptable.includes(split[i]) || split.indexOf(split[i]) === 0)
                titleized += `${this.capitalize(split[i])} `
            else
                titleized += `${split[i]} `
        }
        return titleized.slice(0, -1)
    }
}