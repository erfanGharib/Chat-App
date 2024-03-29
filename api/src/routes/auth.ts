import express from 'express';
import { authLoginSchema, authSignupSchema } from '../../../shared/schemas/authSchema.js';
import { authLoginController, authSignupController } from '../controllers/authController.js';
import { validateReqBody } from '../middleware/validateReqBody.js';
import { validateToken } from '../middleware/validateToken.js';
const authRouter = express.Router();

authRouter.post(
    '/login', 
    validateReqBody.bind(authLoginSchema), 
    validateToken,
    authLoginController
);

authRouter.post(
    '/signup', 
    validateReqBody.bind(authSignupSchema),
    validateToken,
    authSignupController
);

// authRouter.post(
//     '/confirm-email', 
//     validateReqBody.bind(authSignupSchema),
//     validateToken,
//     confirmEmailController
// );

export default authRouter;