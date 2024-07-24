export function calculateAverage(arr) {
    const numbers = arr
        .map(num => parseFloat(num))
        .filter(num => !isNaN(num));

    const sum = numbers.reduce((acc, num) => acc + num, 0);
        const avg = sum / numbers.length;
        return Math.round(avg);
}