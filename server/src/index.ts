import Express from 'express'
import { v4 } from "uuid";
import bodyParser from "body-parser";
import cors from 'cors';

const app = Express();

app.use(bodyParser.json());
app.use(cors());

type Board = {
  id: string,
  title: string,
  body: string
}

const boards = new Array<Board>();

app.get('/', (req, res) => {
  res.send(boards)
});

app.post('/boards', (req, res) => {
  const board = {
    id: v4(),
    title: req.body.title,
    body: req.body.body
  } as Board;

  boards.push(board);
  res.send(boards)
});

const port = 18889;
const host = "localhost";

app.listen(port, 'localhost', () => {
  console.log(`running on ${port}`)
});
