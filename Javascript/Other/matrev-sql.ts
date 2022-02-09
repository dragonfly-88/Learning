/*

git bash belépés: $ winpty mysql -u root -p



json (javascript object notation) - olyan object, ahol a key mindig string

user = {
    "name":'pistike',
    "age": 12;
}



// DB: ~objecteket tartalmazó object

users = {
    1: {
        name: "agi",
        age: 30;
    }
}



- non-relational, noSQL adatázis: nem SQL nyelvet használ
- relational / SQL alapú adatbázisok  (Oracle, pSQL, postgre SQL stb)



relation types between tables:
- one-to-one: 1 primary key van bennük
- one-to-many: pl. egy embernek több autója lehet
- many-to-many: pl közös tárgyak vagy hallgatók és órák
(és: many-to-one)



git bash-en keresztül is lehet használni

cmd: ~ mysql.server start

mysql -u root -p
Enter password: ******

mysql> ez az adatbázis szerver, ezen belül jelölök ki adatbázist, amin belül létrehozok táblákat



SHOW DATABASES;  -- kilistázza a táblaneveket

mindig kell ; a query végére!!!

mySQL cheat sheet


CREATE DATABASE papaya;

USE papaya;     // mielőtt létrehozok, használok egy táblát, belépek a DB-be!!

SHOW TABLES;

CREATE TABLE users (id INT, name VARCHAR(64), email VARCHAR(64));

DESCRIBE users;   // leírja, hogy néz ki a tábla, milyen oszlopok lesznek bele

INSERT ITO users (id, name, email) VALUES (1, 'sanyi', 'sanyesz@citromail.hu');

UPDATE users SET name = 'Sandorka';  // helyett: UPDATE users SET email = 'sanyi@gmail.com' WHERE ID = 1;


CREATE TABLE cats(id INT AUTO_INCREMENT NOT NULL, name VARCHAR(64), color VARCHAR(64), owner_id INT NOT NULL, PRIMARY KEY(id));


UNIQUE(id, last_name) - itt lehet több is

INSERT INTO cats(name, color, owner_id)('Cirmi', 'black', 1);

SELECT * FROM cats;


DELETE FROM cats WHERE id = 1; // vagy WHERE name = 'Cirmi'


// DELETE után hiányoznak azok az id-k, ezért lehet az, h foghíjas az id oszlop:)


ALTER TABLE users MODIFY id INT NOT NULL;


shadowColumn - "törölt" adatok - valójában nem törli (pl. facebook)


SELECT * FROM cats INNER JOIN users ON cats.owner_id = users.id;

SELECT email FROM users INNER JOIN cats ON cats.owner_id = users.id WHERE cats.owner_id = 2;



*/