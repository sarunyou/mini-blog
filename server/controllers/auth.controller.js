const catchAsync = require("../utils/catchAsync");
const authService = require("../services/auth.service");

/**
 * @swagger
 * /v1/auth/sing-in:
 *   post:
 *     tags: [Auth]
 *     summary: Sing-in user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Return jwt token.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 */
const singIn = catchAsync(async (req, res) => {
  const token = await authService.singIn(req.body);
  res.status(200).send({
    accessToken: token,
  });
});

module.exports = {
  singIn,
};
