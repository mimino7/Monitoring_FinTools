export const getPercentChange = (oldNum, num) => {
    let diff = (oldNum - num)
    if (diff < 0) {diff = diff * (-1)} 
    return ((diff / oldNum) * 100).toFixed(4);
    };