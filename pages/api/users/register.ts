import {NextApiRequest, NextApiResponse} from "next";
import {usersRepo} from "@/utils/service";
import {apiHandler} from "@/utils/api";
import {dbConnect} from "@/utils";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    await dbConnect();

    await usersRepo.create(req.body);
    return res.status(200).json({
        success: true,
    });
};

export default apiHandler({post: handler});
