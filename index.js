import fs from 'fs';

const pathToDatabase = "data.json";

function get() {
  try {
    const database = fs.readFileSync(pathToDatabase);
    return JSON.parse(database.toString());
  } catch (error) {
    console.error('Erro: ', error);
  }
}

function update(object) {
  try {
    return fs.writeFileSync(pathToDatabase, JSON.stringify(object));
  } catch (error) {
    console.error('Erro: ', error);
  }
}

export default function JSONToFile() {
  return {
    get,
    update
  }
}