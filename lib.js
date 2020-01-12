function sort(str){
    if (typeof str === 'string') {
        return str.split(' ').sort((a, b) => b.length - a.length).join(' ');
    }

    return '';
}


function reverse(str){
    if (typeof str === 'string') {
        return str.split(' ').reverse().join(' ');
    }

    return '';
}


function strip(str){
    if (typeof str === 'string') {
        return str.trim().replace(/\s+/gm, ' ')
    }
    
    return '';
}

module.exports = { strip: strip, sort: sort, reverse: reverse };