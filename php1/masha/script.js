revert('мама мыла раму');

function revert(str) {

    let res = [];
    for (let i = 0; i < str.length; i++) {
        let symbol = str.charAt(i);

        switch (symbol) {
            case 'а':
                symbol = 'б';
                res.unshift(symbol);
                break;
            case 'е':
                symbol = 'ж';
                res.unshift(symbol);
                break;
            case 'ё':
                symbol = 'ж';
                res.unshift(symbol);
                break;
            case 'и':
                symbol = 'к';
                res.unshift(symbol);
                break;
            case 'о':
                symbol = 'п';
                res.unshift(symbol);
                break;
            case 'у':
                symbol = 'ф';
                res.unshift(symbol);
                break;
            case 'ы':
                symbol = 'ъ';
                res.unshift(symbol);
                break;
            case 'э':
                symbol = 'ъ';
                res.unshift(symbol);
                break;
            case 'ю':
                symbol = 'ъ';
                res.unshift(symbol);
                break;
            case 'я':
                symbol = 'ъ';
                res.unshift(symbol);
                break;
            default:
                res.unshift(symbol);
        }
    }

    let exit = res.join('');

    return console.log(exit);
}