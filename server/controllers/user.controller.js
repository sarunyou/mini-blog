const catchAsync = require("../utils/catchAsync");
const userService = require("../services/user.service");
const { UserEntity } = require("../entities/user.entity");
/**
 * @swagger
 * /v1/users:
 *   post:
 *     tags: [User]
 *     summary: Generate user by name
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: Return password.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 password:
 *                   type: string
 */
const generateUser = catchAsync(async (req, res) => {
  const password = await userService.generateUserByName(req.body);
  res.send({ password });
});

/**
 * @swagger
 * /v1/users/me:
 *   get:
 *     tags: [User]
 *     summary: Get me
 *     responses:
 *       200:
 *         description: Return own data.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 name:
 *                   type: string
 */
const getMe = catchAsync(async (req, res) => {
  const user = await userService.getUserByName(req.user.name);
  res.send(UserEntity(user));
});

module.exports = {
  generateUser,
  getMe,
};
