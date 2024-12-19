import appParques from "./parques/rutasParques/rutasParques.mjs"

appParques.listen(3000, () => {
    console.log(`App parques escuchado en el puerto http://localhost:3000`)
})