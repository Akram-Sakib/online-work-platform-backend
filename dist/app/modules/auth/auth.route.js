"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoutes = void 0;
const express_1 = __importDefault(require("express"));
const passport_1 = __importDefault(require("passport"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const auth_controller_1 = require("./auth.controller");
const auth_validation_1 = require("./auth.validation");
const router = express_1.default.Router();
router.use(passport_1.default.initialize());
router.use(passport_1.default.session());
router.post('/login', (0, validateRequest_1.default)(auth_validation_1.AuthValidation.loginZodSchema), auth_controller_1.AuthController.loginUser);
router.get('/google', passport_1.default.authenticate('google', {
    scope: ['profile', 'email'],
}));
router.post('/verify-google', auth_controller_1.AuthController.verifyGoogle);
router.get('/google/callback', passport_1.default.authenticate('google', {
    successRedirect: '/api/v1/auth/success',
    failureRedirect: '/api/v1/auth/failure',
}));
router.get('/success', (req, res) => {
    if (!req.user)
        res.redirect('/api/v1/auth/failure');
    console.log(req.user);
    res.send('Welcome ' + JSON.stringify(req.user));
});
router.get('/failure', (req, res) => {
    res.send('Error');
});
router.post('/refresh-token', 
// validateRequest(AuthValidation.refreshTokenZodSchema),
auth_controller_1.AuthController.refreshToken);
exports.authRoutes = router;
