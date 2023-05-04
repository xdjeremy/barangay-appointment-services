import {NextApiRequest, NextApiResponse} from "next";
import {connectMongo} from "@/utils";
import {User} from "@/models";

const getTest = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        await connectMongo();

        await User.create({
            username: 'test',
            password: 'test',
            email: 'test@gmail.com'
        });
    } catch (err: any) {
        res.status(500).json({message: err.message});
    }
}

export default getTest;