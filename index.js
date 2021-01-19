import fs from 'fs';

export const get = (path) => {
  try {
    const database = fs.readFileSync(path);
    return JSON.parse(database.toString());
  } catch (error) {
    console.error('Erro: ', error);
  }
}

export const update = (path, object) => {
  try {
    return fs.writeFileSync(path, JSON.stringify(object));
  } catch (error) {
    console.error('Erro: ', error);
  }
}