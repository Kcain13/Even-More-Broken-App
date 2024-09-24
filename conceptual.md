### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
    Also, JSON Web Token, a URL safe way of representing claims to be transferred between two parties. It is commonly used for authentication and authorization. The token is string that consists of three parts: a header, a payload, and a signature.

- What is the signature portion of the JWT?  What does it do?
    This is the final aspect within the structure, all separated by dots (.) Signature is used to verify that the token has not been altered. It is created by combining the encoded header, the encoded payload, a secret key, and the specified signing algorithm. 

- If a JWT is intercepted, can the attacker see what's inside the payload?
    Yes, because the payload is not encrypted. So you can encrypt the content within the payload to protect it.

- How can you implement authentication with a JWT?  Describe how it works at a high level.
    When a user logs in, the server creates a signed token with their user info inside. The client stores this token (in localStorage or cookies) and sends it with every request to protected routes. The server verifies the token to confirm the user’s identity. It’s stateless, so the server doesn’t need to keep session data, and it’s efficient for scaling apps.

- Compare and contrast unit, integration and end-to-end tests.
    Each type increases coverage and confidence in your app, but as you go from unit to E2E, tests get more complex and time-consuming.

- What is a mock? What are some things you would mock?
    As the name suggests, it is a function that should mimic what should happen without the app actually doing it. Mocks make it easier to test in controlled environments and focus on what matters in the specific test case.

- What is continuous integration?
    Frequently merging code into a shared repository. Each merge triggers automated builds and tests to catch bugs and fixes. Ensuring that the new code won’t break the existing app.

- What is an environment variable and what are they used for?
    This is a key value pair in a system that stores configuration settings or secrets. Allowing to control multiple environments without hardcoding sensitive information like API Keys, database url, etc. 

- What is TDD? What are some benefits and drawbacks?
    Test driven development is where you develop the tests prior to the code. This way you start off with the requirement and minimize bugs. Makes refactoring code easier. This takes a lot of overhead and tough to fulfill a great UI

- What is the value of using JSONSchema for validation?
    This provides a way to define and validate structure. Improves data consistency, documentation, automation.

- What are some ways to decide which code to test?
    Focus on testing code that handles core functionality, or user workflow essentials. Also consider testing calculations, algorithms. Etc

- What does `RETURNING` do in SQL? When would you use it?
    RETURNING obtains specific columns’ values from rows that were just inserted, updated, or deleted. It reduces the need for additional queries to fetch the newly inserted or modified data, improving performance and simplicity.

- What are some differences between Web Sockets and HTTP?
    WebSockets are best for scenarios requiring real-time, two-way communication with a persistent connection and low latency. HTTP is best for standard web interactions where a simple request-response model is sufficient, and each request is independen

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
    I prefer express because it has greater inner connection with JavaScript which is how I will prefer to build my applications. 