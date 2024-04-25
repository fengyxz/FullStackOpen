const http = require('http');
const express = require('express')
// to access data easily, we need the help of json-parser
const app = express();

app.use(express.json())

let notes = [
  {
    id: 1,
    content: "HTML is easy",
    date: "2022-05-30T17:30:31.098Z",
    important: true
  },
  {
    id: 2,
    content: "Browser can execute only Javascript",
    date: "2022-05-30T18:39:34.091Z",
    important: false
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2022-05-30T19:20:14.298Z",
    important: true
  }
]

// const app = http.createServer((request, response) => {
//   response.writeHead(200, { 'content-Type': 'text/plain' })
//   response.end(JSON.stringify(notes))
// })

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/api/notes', (request, response) => {
  response.json(notes)
})

// 查询
app.get('/api/notes/:id', (request, response) => {
  const id = request.params.id;
  const note = notes.find(note => {
    console.log(note.id, typeof note.id, id, typeof id, note.id === id);
    return note.id === Number(id)
  })
  console.log(note)
  if (note) {
    response.json(note)
  } else {
    response.status(404).end()
  }
})
// 删除
app.delete('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  notes = notes.filter(note => note.id !== id)
  response.status(204).end()
})

// 添加
app.post('/api/notes', (request, response) => {
  const maxId = notes.length > 0 ? Math.max(...notes.map(n => n.id)) : 0
  const note = request.body;

  console.log(request.headers)
  console.log(note)
  response.json(note)
})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)
