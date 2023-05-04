import { NextApiRequest, NextApiResponse } from "next";
import { expressjwt } from "express-jwt";
import * as util from "util";
import getConfig from "next/config";

const { serverRuntimeConfig } = getConfig();

const jwtMiddleware = (req: NextApiRequest, res: NextApiResponse) => {
  const middleware = expressjwt({
    secret: serverRuntimeConfig.secret,
    algorithms: ["HS256"],
  }).unless({
    path: [
      // public routes that don't require authentication
      "/api/users/register",
      "/api/users/auth",
      "/api/ticket",
      "/api/archive",
    ],
  });

  return util.promisify(middleware)(req, res);
};

export { jwtMiddleware };
