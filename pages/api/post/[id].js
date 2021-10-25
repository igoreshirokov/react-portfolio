// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as posts from "../../../data/posts.json";

export default function handler(req, res) {
  const { id } = req.query;
  const post = posts.default.filter((post) => post.id == id);
 
  res.status(200).json(post[0]);
}
