import fs from 'fs';

export const getFile = (path) => {
  try {
    const database = fs.readFileSync(path);
    return JSON.parse(database.toString());
  } catch (error) {
    console.error('Erro: ', error);
  }
}

export const updateFile = (path, object) => {
  try {
    return fs.writeFileSync(path, JSON.stringify(object));
  } catch (error) {
    console.error('Erro: ', error);
  }
}