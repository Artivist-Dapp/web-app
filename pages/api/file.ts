import nextConnect from 'next-connect';
import multer from 'multer';
import { NextApiRequest, NextApiResponse } from 'next';
import { create } from 'ipfs-http-client'

const projectId = process.env.IPFS_API_KEY || "2AJ0ZtnW9odGshoIH1JMNR56yaO"
const projectSecret = process.env.IPFS_API_SECRET || "c096a7c63a9dd8bacfc79f391006c468"
console.log(process.env.IPFS_API_KEY)
console.log(process.env.IPFS_API_SECRET)
const auth =
  'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');


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
      authorization: auth,
    },
  });
  return await client.add(buffer)
}
interface NextApiRequestWithFile extends NextApiRequest {
  file: any;
}

apiRoute.use(upload.single('file'));
apiRoute.post(async (req: NextApiRequestWithFile, res: NextApiResponse) => {
  const uploded = await uploadToIPFS(req.file.buffer)
  res.status(200).json(uploded.cid.toString());
});

export default apiRoute;