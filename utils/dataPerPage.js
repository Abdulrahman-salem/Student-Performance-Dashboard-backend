const isMaxPageCalculated = require("../utils/isMaxPageCalculated");

function dataPerPage(dataPerPageParameters) {
    // destructuring object parameters
    let { maxPages, rows, limit, nextPage } = dataPerPageParameters;
    let resultCalculatedMaxPage = isMaxPageCalculated(
        maxPages,
        rows.length,
        limit
    );

    if (nextPage && nextPage > resultCalculatedMaxPage.maxPages) {
        return { error: "Invalid nextPage value" };
    }

    if (!resultCalculatedMaxPage.isCalculated) {
        maxPages = resultCalculatedMaxPage.maxPages;
    }

    //checking if next page is bigger than max Pages
    if (nextPage > maxPages) {
        return { massageError: `There is no page number ${nextPage}` };
    }

    const startIndex = (nextPage ? nextPage - 1 : 0) * limit;
    const endIndex = startIndex + limit;

    // Slice the rows to return current page data
    let rowsSlice = rows.slice(startIndex, endIndex);
    // end results per page

    return { rowsSlice, maxPages};
}

module.exports = dataPerPage;
