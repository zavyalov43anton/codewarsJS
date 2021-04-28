function likes(names) {
    let countNames = names.length;
    if (countNames < 4) {
        switch (countNames) {
            case 1: return `${names[0]} like this`;
            case 2: return `${names[0]} and ${names[1]} like this`;
            case 3: return `${names[0]}, ${names[1]} and ${names[2]} likes this`;
            default: return `no one likes this`;
        }
    }
    if (countNames >= 4) {
        let arrRest = countNames - 2;
        return `${names[0]}, ${names[1]} and ${arrRest} others like this"`
    }
}
