import {NextApiRequest, NextApiResponse} from "next";
import {usersRepo} from "@/utils/service";
import {apiHandler} from "@/utils/api";
import {dbConnect} from "@/utils";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {

        await dbConnect();

        await usersRepo.create(req.body);
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

export default apiHandler({post: handler});
