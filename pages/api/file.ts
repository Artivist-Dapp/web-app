import nextConnect from 'next-connect';
import multer from 'multer';
import { NextApiRequest, NextApiResponse } from 'next';
import { create } from 'ipfs-http-client'
import axios from 'axios';


const upload = multer({
  limits: { fieldSize: 25 * 1024 * 1024 }
});

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};

const apiRoute = nextConnect({
  onError(error, req, res: NextApiResponse) {
    res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

async function uploadToIPFS(buffer: Buffer) {
  const client = create({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
    headers: {
    },
  });
  return await client.add(buffer)
}
interface NextApiRequestWithFile extends NextApiRequest {
  username: string;
  name: string;
  email: string;
  registrationNumber?: string;
  description?: string;
  profilePictureUrl?: string;
  profilePicture?: File;
  isNonProfit: boolean;
}

const api_base_url = "https://c262-2001-818-e8f3-d400-b4be-84ba-238a-eba0.eu.ngrok.io"
apiRoute.use(upload.single('profilePicture'));
apiRoute.post(async (req: NextApiRequestWithFile, res: NextApiResponse) => {
  console.log("req", req.body)
  console.log("req", req.file)
  const result = await axios.post(`${api_base_url}/v1/ngo`, {
    username: req.body.username,
    name: req.body.name,
    email: req.body.email,
    registrationNumber: req.body.registrationNumber,
    description: req.body.description,
    profilePictureUrl: req.body.profilePictureUrl,
    isNonProfit: req.body.isNonProfit,
    })
  console.log("result", result);
  // const uploded = await uploadToIPFS(req.file.buffer)
  res.status(200).json("test");
});

export default apiRoute;
