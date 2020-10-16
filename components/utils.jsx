

export function getWinner(user, house) {
    console.log(`getWinner - user:${user} vs house: ${house}`)

    if (user === house) {
        return 'even'
    }

    switch (user) {
        case 'paper':
            if (house === 'rock') {
                return 'user'
            };
            if (house === 'spock') {
                return 'user'
            }
            else {
                return 'house'
            }
        case 'rock':
            if (house === 'scissors') {
                return 'user'
            };
            if (house === 'lizard') {
                return 'user'
            }
            else {
                return 'house';
            }
        case 'scissors':
            if (house === 'paper') {
                return 'user'
            };
            if (house === 'lizard') {
                return 'user'
            } else {
                return 'house';
            }
        case 'lizard':
            if (house === 'paper') {
                return 'user'
            };
            if (house === 'spock') {
                return 'user'
            } else {
                return 'house';
            }
        case 'spock':
            if (house === 'rock') {
                return 'user'
            };
            if (house === 'scissors') {
                return 'user'
            } else {
                return 'house';
            }

        default:
            break;
    }

}

