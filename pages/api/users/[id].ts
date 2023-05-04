import {NextApiRequest, NextApiResponse} from "next";
import {usersRepo} from "@/utils/service";

const getProfile = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (!req.query.id) {
            return {
                success: false,
                message: 'No Id provided'
            }
        }

        const user = await usersRepo.getUserById(req.query.id!.toString());

        if (!user) {
            return {
                success: false,
                message: 'User not found'
            }
        }

        return res.status(200).json({
            ...user
        })
    } catch (err: any) {
        return {
            success: false,
        }
    }
}