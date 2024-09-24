function timeToWords(time) {
    const [hourStr, minuteStr] = time.split(":");
    const hour = parseInt(hourStr, 10);
    const minute = parseInt(minuteStr, 10);

    const numbers = [
        'midnight', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve',
    ];

    let period = hour >= 12 ? 'pm' : 'am';

    let hourIn12 = hour % 12 === 0 ? 12 : hour % 12;
    let hourWord = numbers[hourIn12];

    if (hour === 0 && minute === 0) return 'midnight';
    if (hour === 12 && minute === 0) return 'noon';

    let minuteWord = '';
    if (minute === 0) {
        minuteWord = "o’clock";
    } else if (minute < 10) {
        minuteWord = `oh ${numbers[minute] || minute}`;
    } else {
        let tens = Math.floor(minute / 10);
        let ones = minute % 10;
        minuteWord = (tens === 1 || ones === 0) ? `${minute}` : `${numbers[tens]} ${numbers[ones]}`;
    }

    return `${hourWord} ${minuteWord} ${period}`.trim();
}
