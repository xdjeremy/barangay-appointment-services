import {NextApiRequest, NextApiResponse} from "next";
import {jwtMiddleware} from "@/utils/api/jwt-middleware";
import {errorHandler} from "@/utils/api/error-handler";

const apiHandler = (handler: any) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    if (!req.method) {
      return res.status(400).json({ error: "No HTTP Method specified" });
    }

    const method = req.method.toLowerCase();

    // check handler supports HTTP method
    if (!handler[method]) {
      return res.status(405).json({ error: `Method ${method} Not Allowed` });
    }

    try {
      // global middleware
      await jwtMiddleware(req, res);

      await handler[method](req, res);
    } catch (err: any) {
      // global error handler
      errorHandler(err, res);
    }
  };
};

export {apiHandler}