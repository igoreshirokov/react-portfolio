// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as works from '../../data/works.json';

export default function handler(req, res) {
  
  res.status(200).json(works.default)
}
