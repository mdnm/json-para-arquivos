import fs from 'fs';

const pathToDatabase = "data.json";

async function readDatabase() {
  try {
    const database = await fs.promises.readFile(pathToDatabase);
    return JSON.parse(database.toString());
  } catch (error) {
    console.error('Erro: ', error);
  }
}

async function writeToDatabase(stringifiedObject) {
  try {
    return fs.promises.writeFile(pathToDatabase, stringifiedObject);
  } catch (error) {
    console.error('Erro: ', error);
  }
}

const get = async () => {
  const database = await readDatabase();
  return database.objects;
}

const insert = async (object) => {
  const database = await readDatabase();

  database.objects.push(object);

  await update(database.objects);

  return object;
}

const update = async (objects) => {
  const objectsJSON = JSON.stringify({ objects });
  await writeToDatabase(objectsJSON);
}

export default function JSONToFile() {
  return {
    get,
    insert,
    update
  }
}