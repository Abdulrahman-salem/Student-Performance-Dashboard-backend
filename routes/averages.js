const router = require("express").Router();
const sqlite3 = require("sqlite3").verbose();

const data = new sqlite3.Database("./database/sqlitedb.db", (err) => {
    if (err) {
        console.error("Failed to open database file:", err.message);
    }
});

router.get("/averages", async (req, res) => {
    const sqlQuery = `SELECT AVG(G1) AS math_average, AVG(G2) AS reading_average, AVG(G3) AS writing_average FROM StudentsPerformance;`;

    data.get(sqlQuery, (err, row) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        return res.status(200).json(row);
    });
});

router.get("/performanceByGender", async (req, res) => {
    const sqlQuery = `SELECT sex, AVG(G1) AS math_average, AVG(G2) AS reading_average, AVG(G3) AS writing_average FROM StudentsPerformance GROUP BY sex`;

    data.all(sqlQuery, [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        return res.status(200).json(rows);
    });
});

router.get("/impactParentsEdu", async (req, res) => {
    const sqlQuery = `SELECT Medu AS mother_education_level, Fedu AS father_education_level, AVG(G1) AS math_average, AVG(G2) AS reading_average, AVG(G3) AS writing_average FROM StudentsPerformance GROUP BY Medu, Fedu;`;

    data.all(sqlQuery, [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        return res.status(200).json(rows);
    });
});

router.get("/scoreDistributions", async (req, res) => {
    const sqlQuery = `SELECT id, G1 AS math_score, G2 AS reading_score, G3 AS writing_score FROM StudentsPerformance;`;

    data.all(sqlQuery, [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        return res.status(200).json(rows);
    });
});

module.exports = router;
