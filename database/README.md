# Process Overview

creating an ```SQLite3``` database, importing a ```.CSV``` file, and modifying the schema to add a ```PRIMARY KEY``` column.
## 1. SQLite3 file.db

## 2. Creating table:

```sql
CREATE table StudentsPerformance( 
    school TEXT ,
    sex TEXT ,
    age INT,
    address TEXT,
    famsize TEXT ,
    Pstatus TEXT ,
    Medu INT,
    Fedu INT,
    Mjob TEXT,
    Fjob TEXT ,
    reason TEXT ,
    guardian TEXT,
    traveltime INT,
    studytime INT,
    failures INT,
    schoolsup TEXT ,
    famsup TEXT ,
    paid TEXT ,
    activities TEXT,
    nursery TEXT ,
    higher TEXT ,
    internet TEXT ,
    romantic TEXT ,
    famrel INT,
    freetime INT,
    goout INT,
    Dalc INT,
    Walc INT,
    health INT,
    absences INT,
    G1 INT,
    G2 INT,
    G3 INT 
);
```

## 3. Importing CSV Data:
    .mode csv
    .import /pathCsv.csv StudentsPerformance

## 4. Adding ```PRIMARY KEY```:

- ### Renaming the Original Table:

    ```sql
    ALTER TABLE StudentsPerformance RENAME TO StudentsPerformance_old;
    ```

- ### Creating a New Table with ```id``` Column:

```sql
CREATE table StudentsPerformance( 
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    school TEXT, 
    sex TEXT, 
    age INT, 
    address TEXT, 
    famsize TEXT, 
    Pstatus TEXT, 
    Medu INT, 
    Fedu INT, 
    Mjob TEXT, 
    Fjob TEXT, 
    reason TEXT, 
    guardian TEXT, 
    traveltime INT, 
    studytime INT, 
    failures INT, 
    schoolsup TEXT, 
    famsup TEXT, 
    paid TEXT, 
    activities TEXT, 
    nursery TEXT, 
    higher TEXT, 
    internet TEXT, 
    romantic TEXT, 
    famrel INT, 
    freetime INT, 
    goout INT, 
    Dalc INT, 
    Walc INT, 
    health INT, 
    absences INT, 
    G1 INT, 
    G2 INT, 
    G3 INT
);
```

- ### Copying Data from the Old Table to the New Table
```sql
INSERT INTO StudentsPerformance ( 
    school, sex, age, address, famsize, Pstatus, Medu, Fedu, Mjob, Fjob, reason, guardian, traveltime, studytime, failures, schoolsup, famsup, paid, activities, nursery, higher, internet, romantic, famrel, freetime, goout, Dalc, Walc, health, absences, G1, G2, G3)
SELECT school, sex, age, address, famsize, Pstatus, Medu, Fedu, Mjob, Fjob, reason, guardian, traveltime, studytime, failures, schoolsup, famsup, paid, activities, nursery, higher, internet, romantic, famrel, freetime, goout, Dalc, Walc, health, absences, G1, G2, G3
FROM StudentsPerformance_old;
```

- ### Deleting the Old Table:

```sql
    DROP TABLE StudentsPerformance_old;
```

