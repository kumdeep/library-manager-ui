
const formatDate = (date) => {
    let inputDate = new Date(date);
    let formmatedDate = inputDate.getFullYear()+"-"+
        padNum(inputDate.getMonth()+1, '0', 2) + "-" +
        padNum(inputDate.getDate(), '0', 2);
    console.log(formmatedDate)
    return formmatedDate;
}

const padNum = (num, charToAdd, targetLength) => {
    if(!num) num = 0;
    let numString = new String(num);
    while(numString.length<targetLength){
        numString = charToAdd + numString;
    }
    return numString;
}

export {formatDate};