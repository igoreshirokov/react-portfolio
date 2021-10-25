// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as services from '../../data/services.json';

export default function handler(req, res) {
  res.status(200).json(services.default)
}
