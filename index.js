import fs from 'fs';

function get(path) {
  try {
    const database = fs.readFileSync(path);
    return JSON.parse(database.toString());
  } catch (error) {
    console.error('Erro: ', error);
  }
}

function update(path, object) {
  try {
    return fs.writeFileSync(path, JSON.stringify(object));
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