// Generate random number function :
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Generate random color function :
function randomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}