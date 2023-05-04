import {NextApiRequest, NextApiResponse} from "next";
import {usersRepo} from "@/utils/service";
import {apiHandler} from "@/utils/api";
import {dbConnect} from "@/utils";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log('monds');
  await dbConnect();

  const user = await usersRepo.authenticate(req.body);
  return res.status(200).json(user);
};

export default apiHandler({
  post: handler,
});
