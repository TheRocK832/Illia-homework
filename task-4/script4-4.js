let numOrStr = prompt('input number or string');
switch (true) {
    case numOrStr === null:
        console.log('ви скасували');
        break;
    
    case numOrStr === "":
        console.log('Empty String');
        break;

    case numOrStr === NaN:
        console.log(' number is Ba_NaN');
        break;

    default:
        console.log('OK!');
        break;
}





