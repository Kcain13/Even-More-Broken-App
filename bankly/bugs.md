** Document your bugs here **
BUG #1: Missing await in POST /login route of auth
In POST /auth/login route handler, ensure that you're awaiting the promise that logs in the user.


BUG #2: Update user function in the model crashes when updating nothing. Current setup; function crashes if no fields are provided for the update. Add logic to check if there’s something to update before proceeding.

BUG #3: Changed decode to verify (security issue)
 The decode method doesn’t check if the signature is valid, whereas verify ensures the token hasn’t been tampered with.

BUG #4: GET /users not returning basic info
 Ensure that the query in the route handler is properly selecting the necessary fields and returning them.

BUG #5: Missing await in DELETE /users/:username route


BUG #6: Able to update fields such as password in PATCH /user/:username


BUG #7: When registering with missing data crashes.
 validate the incoming data in the POST /auth/register route to ensure that all required fields are provided. You can use middleware or manual checks to do this.
