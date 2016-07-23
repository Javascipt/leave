module.exports = function () {
    console.log.apply(console, Array.prototype.slice.call(arguments, 0));
    process.exit(0);
}