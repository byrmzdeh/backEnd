const express = require('express')
const app = express()
const port = 3000

let data = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz"
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv"
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net"
    },
    {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org"
    },
    {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca"
    },
    {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info"
    },
    {
        "id": 7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz"
    },
    {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me"
    },
    {
        "id": 9,
        "name": "Glenna Reichert",
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io"
    },
    {
        "id": 10,
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz"
    }
]

app.use(express.json())


app.get('/', (req, res) => {
    res.send(data)
})


app.get('/:id', (req, res) => {
    const { id } = req.params
    const result = data.find(x => x.id === +id)
    res.send(result)
})


let counter = 100  //ozunden id versin die yazdiq
app.post('/', (req, res) => {
    const { name } = req.body
    counter++
    data.push({ name, id: counter })
    res.send('Dataya Elave olundu post !')
})

app.put('/:id', (req, res) => {
    const {id} = req.params
    const {name} = req.body
    const index=data.findIndex((x)=>x.id===+id)
    data[index]={id,name}
    res.send('Data update olundu !')
})

app.delete('/:id', (req, res) => {
    const { id } = req.params
    data = data.filter((x) => x.id !== +id)
    res.send('Datadan Silindi !')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})