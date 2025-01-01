import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)


const rutaBaseDeDatos = path.resolve(__dirname,'../datos/usuariosDatos.json')

export async function leerArchivo() {
  try {
    const archivo = await fs.readFile(rutaBaseDeDatos,'utf-8')
    return JSON.parse(archivo)
  } catch (error) {
    console.log(`Error al leer archivo`, error)
    return []
  }
}


export async function escribirArchivo(usuario) {
  try {
    const archivo = JSON.stringify(usuario, null ,2)
    await fs.writeFile(rutaBaseDeDatos,archivo, 'utf-8')
    console.log('Archivo guardados con exito')
  } catch (error) {
    console.log(`Error al guardar los usuarios`, error)
  }
}