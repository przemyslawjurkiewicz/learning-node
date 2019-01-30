function convertTime(time) {
    time = Number(time);
    var day = Math.floor(time / (86400));
    var hour = Math.floor((time % 86400) / 3600);
    var minute = Math.floor((time % 3600) / 60);
    var second = Math.floor((time % 360) % 60);

    var displayDay = day > 0 ? day + 'd. ' : '';
    var displayHour = hour > 0 ? hour + 'h. ' : '';
    var displayMinute = minute > 0 ? minute + 'min. ' : '';
    var displaySecond = second > 0 ? second + 'sec.' : '';

    return displayDay + displayHour + displayMinute + displaySecond;
}
    exports.convert= convertTime;