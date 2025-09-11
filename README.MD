Day 1: Setup Project

✅ Goal → Create base project and server.

Install dependencies:

npm init -y
npm install express mongoose bcryptjs jsonwebtoken


Create index.js with Express.

Connect MongoDB with Mongoose.

Test by running node index.js.
-----------------------------------------------------------------------------------
Day 2: User Model

✅ Goal → Define how user data will be stored.

Create models/User.js with username and password.

Ensure username is unique.

Test with dummy data (create a new user manually).

---------------------------------------------------------------------------------------
Day 3: Register Route (Signup)

✅ Goal → New users can register.

Create routes/auth.js.

Add /register route.

Hash password using bcrypt before saving.

Save user to DB.

Test with Thunder Client / Postman.
--------------------------------------------------------------------------------------
Day 4: Login Route

✅ Goal → Allow users to login.

Add /login route.

Check username + compare password with bcrypt.

Generate JWT token with jsonwebtoken.

Return token in response.

Test by logging in and checking token.
---------------------------------------------------------------------------------------
Day 5: Middleware for Protected Routes

✅ Goal → Secure some routes.

Create authMiddleware.js.

Verify token using jwt.verify.

Add /dashboard route that only works with valid token.

Test by calling /dashboard with and without token.
-----------------------------------------------------------------------------------------
Day 6: Improve Security & Structure

✅ Goal → Make code production-friendly.

Store secretkey in .env using dotenv.

Split routes, models, and controllers into folders.

Add error handling.

Test everything again.
------------------------------------------------------------------------------------------

Day 7: Advanced Add-ons (Optional)

✅ Goal → Go beyond basics.

Add Logout (just delete token client-side).

Add Role-based Auth (admin vs user).

Try Refresh tokens.

Maybe connect with a frontend (React/Angular/Vanilla JS) to test UI login.
----------------------------------------------------------------------------------------------------