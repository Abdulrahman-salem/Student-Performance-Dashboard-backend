const router = require("express").Router();
const sqlite3 = require("sqlite3").verbose();
const dataPerPage = require("../utils/dataPerPage");

let limit = 10;
let maxPages = 0;

const data = new sqlite3.Database("./database/sqlitedb.db", (err) => {
    if (err) {
        console.error("Failed to open database file:", err.message);
    }
});

router.get("/", async (req, res) => {
    let nextPage = req.query.nextPage;
    let sqlQuery = "SELECT * FROM StudentsPerformance";

    // - start checking if next page is invalid
    if (
        nextPage &&
        (nextPage?.valueOf() <= 0 ||
            isNaN(parseInt(nextPage?.valueOf())) ||
            !Number.isInteger(parseFloat(nextPage)))
    ) {
        return res.status(400).json({ error: "Invalid nextPage value" });
    }
    // - end checking if next page is invalid

    data.all(sqlQuery, [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        // - row slice start
        let dataPerPageParameters = {
            maxPages,
            rows,
            limit,
            nextPage,
        };

        let rowsSlice = dataPerPage(dataPerPageParameters);
        if (rowsSlice?.massageError) {
            return res.status(400).json({ error: rowsSlice.massageError });
        }
        // -row slice end

        return res.status(200).json({
            numberPage: parseInt(nextPage) || 1,
            maxPages: rowsSlice.maxPages,
            studentsData: rowsSlice.rowsSlice,
        });
    });
});

router.get("/:studentId", async (req, res) => {
    let studentId = req.params.studentId;

    let sqlQuery = "";

    if (studentId) {
        sqlQuery = `SELECT * FROM StudentsPerformance WHERE id = '${studentId}';`;
    }
    data.all(sqlQuery, [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        return res.status(200).json({ studentData: rows });
    });
});

module.exports = router;
