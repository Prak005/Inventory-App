require('dotenv').config();
const { Client } = require('pg');

const SQL = `
CREATE TABLE IF NOT EXISTS categories (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(255) NOT NULL UNIQUE,
    description TEXT
);

CREATE TABLE IF NOT EXISTS items (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    brand VARCHAR(255),
    price NUMERIC,
    stock INTEGER,
    category_id INTEGER REFERENCES categories(id) ON DELETE RESTRICT
);

INSERT INTO categories (name, description)
    VALUES
    ('CPU', 'Processors'),
    ('GPU', 'Graphics Card'),
    ('RAM', 'Memory Modules'),
    ('Storage', 'SSD and HDD')
    ON CONFLICT DO NOTHING;

`;

async function main(){
    console.log('seeding...');
    const client = new Client({
        connectionString: `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log('done');
}

main();