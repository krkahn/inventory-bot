const sqlite3 = require('sqlite3').verbose();

// Open a database handle
const db = new sqlite3.Database('hosts/inventory.db');

// Run a simple SELECT query
db.all('SELECT * FROM hosts WHERE hostname = ?', ['server5.example.com'], (err, rows) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(rows);
});

// Close the database handle
db.close();

