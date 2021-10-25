import * as posts from '../../data/posts.json';


// Функция отправки email
export default function handler(req, res) {
  res.status(200).json(posts.default)
}
