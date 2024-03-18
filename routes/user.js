import { Router } from 'express';
const userRouter = Router();

userRouter.get('/', (req, res) => {
    res.send('ok')
});

export default userRouter;