export function calculateAverage(arr) {
    const sum = arr.reduce((acc, num) => acc + num, 0);
        const avg = sum / arr.length;
        return avg;
}