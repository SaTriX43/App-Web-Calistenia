import pool from "../db.mjs"

// get 
export async function getComentarios(req,res) {
  try {
    const {idParque} = req.params
    const idParqueParseado = parseInt(idParque)

    if(isNaN(idParqueParseado)) {
      return res.status(400).json({error: `Su id del parque debe de ser un numero`})
    }

    const query = `
      SELECT c.comentario, c.fecha_creacion, u.nombre AS usuario
      FROM comentarios c
      JOIN usuarios u ON c.id_usuario = u.id
      WHERE c.id_parque = $1
      ORDER BY c.fecha_creacion DESC
    `;

    const {rows} = await pool.query(query,[idParqueParseado])

    if(rows.length === 0) {
      return res.status(404).json({error: `No hay comentarios para este parque`})
    }

    res.status(200).json(rows)

  } catch (error) {
    console.error('Error al obtener comentarios:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
  
}




// Post 

export async function postComentarios(req,res) {
  try {
    const {idParque, comentario} = req.body
    // const {idUsuario} = req.usuario.id
    const idUsuario = 1
    const idParqueParseado = parseInt(idParque)

    if(isNaN(idParqueParseado)) {
      return res.status(400).json({error: `Su id parque debe de ser un numero`})
    }

    if(!idParque || !comentario) {
      return res.status(400).json({error: `Faltan datos necesarios`})
    }

    const query = `
      INSERT INTO comentarios (id_parque, id_usuario, comentario, fecha_creacion, fecha_actualizacion)
      VALUES ($1, $2, $3, NOW(), NOW())
      RETURNING *;
    `
    const values = [idParque, idUsuario, comentario]

    const {rows} = await pool.query(query,values)

    return res.status(201).json({
      mensaje:`Comentario enviado correctamente`,
      comentario:rows[0]
    })
  } catch (error) {
    console.error('Error al insertar comentario:', error);
    return res.status(500).json({ error: 'Error interno del servidor al publicar el comentario' });
  }
}