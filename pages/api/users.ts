import nextConnect from "next-connect";
import multer from "multer";
import { NextApiRequest, NextApiResponse } from "next";
import { create } from "ipfs-http-client";
import axios from "axios";

const upload = multer({
  limits: { fieldSize: 25 * 1024 * 1024 },
});

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};

const apiRoute = nextConnect({
  onError(error, req, res: NextApiResponse) {
    res
      .status(501)
      .json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

async function uploadToIPFS(buffer: Buffer) {
  const client = create({
    host: "ipfs.infura.io",
    port: 5001,
    protocol: "https",
    headers: {},
  });
  return await client.add(buffer);
}
interface NextApiRequestWithFile extends NextApiRequest {
  name: string;
  email: string;
  jobTitle?: string;
  location?: string;
  profilePicture?: File;
  file: File;
}

const api_base_url = "http://localhost:8080";
apiRoute.use(upload.single("profilePicture"));
apiRoute.post(async (req: NextApiRequestWithFile, res: NextApiResponse) => {
  try {
    
    console.log("req", req.body);
    console.log("req file", req.file);
    const result = await axios.post(`${api_base_url}/v1/user/multicenas`, {
      name: req.body.name,
      email: req.body.email,
      jobTitle: req.body.jobTitle,
      location: req.body.location,
      profilePicture: req.file,
    });
    console.log("result", result);
    res.status(200).json("test");
  } catch (error) {
    console.log("error", error);
    
  }
});

export default apiRoute;
