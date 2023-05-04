import { NextApiRequest, NextApiResponse } from "next";
import { dbConnect } from "@/utils";
import { Archive } from "@/models";
import { apiHandler } from "@/utils/api";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await dbConnect();

    const body = req.body;

    const archive = new Archive({
      email: body.email,
      document: body.document,
    });

    await archive.save();

    return res.status(200).json({
      success: true,
    });
  } catch (err: any) {
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

export default apiHandler({ post: handler });
