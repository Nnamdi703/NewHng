import type { NextApiRequest, NextApiResponse } from 'next';
import connect from '../../lib/mongoose';
import Url from '../../models/Url';
import shortid from 'shortid';

type Data = {
    shortUrl?: string;
    error?: string;
  };

  export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    await connect();
  
    if (req.method === 'POST') {
      const { longUrl } = req.body;
      const shortUrl = shortid.generate();
  
      const newUrl = new Url({ longUrl, shortUrl });
      await newUrl.save();
  
      res.status(200).json({ shortUrl });
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  }

// src/pages/api/shorten.ts
// import type { NextApiRequest, NextApiResponse } from 'next';
// import connectToDatabase from '../../lib/mongodb';
// import Url from '../../models/url';
// import shortid from 'shortid';

// type Data = {
//   shortUrl?: string;
//   error?: string;
// };

// export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
//   await connectToDatabase();

//   if (req.method === 'POST') {
//     const { longUrl } = req.body;
//     const shortUrl = shortid.generate();

//     const newUrl = new Url({ longUrl, shortUrl });
//     await newUrl.save();

//     res.status(200).json({ shortUrl });
//   } else {
//     res.status(405).json({ error: 'Method not allowed' });
//   }
// }

