import express from 'express';
import passport from 'passport';
import validateRequest from '../../middlewares/validateRequest';
import { AuthController } from './auth.controller';
import { AuthValidation } from './auth.validation';
const router = express.Router();

router.use(passport.initialize());
router.use(passport.session());

router.post(
  '/login',
  validateRequest(AuthValidation.loginZodSchema),
  AuthController.loginUser
);

router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);

router.post('/verify-google', AuthController.verifyGoogle);

router.get(
  '/google/callback',
  passport.authenticate('google', {
    successRedirect: '/api/v1/auth/success',
    failureRedirect: '/api/v1/auth/failure',
  })
);

router.get('/success', (req, res) => {
  if (!req.user) res.redirect('/api/v1/auth/failure');
  console.log(req.user);
  res.send('Welcome ' + JSON.stringify(req.user));
});

router.get('/failure', (req, res) => {
  res.send('Error');
});

router.post(
  '/refresh-token',
  // validateRequest(AuthValidation.refreshTokenZodSchema),
  AuthController.refreshToken
);

export const authRoutes = router;
