function isMaxPageCalculated(maxPages, totalPages, limit) {
    let calculatingPageNum = Math.ceil(totalPages / limit);
    if (maxPages == calculatingPageNum) {
        return { isCalculated : true};
    }
    return { isCalculated: false, maxPages: calculatingPageNum };
}

module.exports = isMaxPageCalculated;
