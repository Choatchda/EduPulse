// index.js
const express = require('express');
const app = express();
const AWS = require('aws-sdk');
const uuid = require('uuid');
const bcrypt = require('bcrypt');
const cors = require('cors');
const port = 3000;
app.use(cors());
app.use(express.json());


// Define a route
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});
 

const AWS_ACCESS_KEY_ID = "ASIA4MTWMHLB7GCMCSGV"

const AWS_SECRET_ACCESS_KEY = "cf+3rIZesqzrU8FVbDyTsb3xGYN5z9FORcY6XeAX"
const AWS_SESSION_TOKEN=`FwoGZXIvYXdzEPT//////////wEaDNefjNabqSHbtiEG8yLFAfQroASytg3OzuOcNUQmRgeWogAIRJyvenqumfn5uxXAyE1F+uDvdUK+eyYQKi+HnDVHbCMFOggq7tnwfuFXG5ozIXGqPcKsvTudhuxW+U6bzr6me+bELRSL3xE7ymhN/N0UCRHjLWO6C9GITskbMO744EEmIlQDLEYtyTf3IDGGLDAftwZHTT+134R4ulz0ZB5jJWNSGaElKGgygHqGRBRlAKRJbGOG7c+HkZxeI2VOl92TRCskiRDs2hlHYNpKM9RItCZAKJu8ra8GMi3BEKcc/MXzNzxynPl8ycxX5OJdhPjdbMEs4STstHKZOYanb3NjfgIRGlu18gM=`

const accessKeyId  = AWS_ACCESS_KEY_ID
const secretAccessKey = AWS_SECRET_ACCESS_KEY
const sessionToken =  AWS_SESSION_TOKEN





const credentials = new AWS.Credentials({
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
    sessionToken:sessionToken,
  });

AWS.config.update({
    credentials: credentials,
    region : "us-east-1"
})
const dynamodb = new AWS.DynamoDB.DocumentClient();

app.get('/course', async (req, res) => {
  const params = {
    TableName: 'course',
  };

  try {
    const data = await dynamodb.scan(params).promise();
    const items = data.Items ? data.Items.map(item => AWS.DynamoDB.Converter.unmarshall(item)) : [];

    res.json({ data: items });
  } catch (error) {
    console.error('Error retrieving data from DynamoDB:', error);

    if (error.code === 'NetworkingError') {
      res.status(500).json({ message: 'NetworkingError: Check AWS credentials and network connection.' });
    } else {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
});

app.post('/addCourse', async (req, res) => {
   console.log(req.body)
  const { data } = req.body;

  if (!data || !Array.isArray(data) || data.length === 0) {
    return res.status(400).json({ message: 'Invalid data format' });
  }

  const params = {
    TableName: 'course',
    Item: AWS.DynamoDB.Converter.marshall(data[0]),
  };

  try {
    await dynamodb.putItem(params).promise();
    res.json({ message: 'Course added successfully' });
  } catch (error) {
    console.error('Error adding course to DynamoDB:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});
const tableName = 'user'; // Update with your DynamoDB table name
app.post('/login', async (req, res) => {
  try {
    // Extract login credentials from the request body
    const { email, password } = req.body;

    // Scan the entire table to find the user by email
    const params = {
      TableName: tableName,
      FilterExpression: 'email = :email',
      ExpressionAttributeValues: {
        ':email': email,
      },
    };

    const scanResult = await dynamodb.scan(params).promise();
    const user = scanResult.Items.find((item) => item.email === email);

    // Check if the user exists
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Compare the hashed password
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({ userId: user.userId, message: 'Login successful' });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/register', async (req, res) => {
  try {
    // Extract user data from the request body
    const { first_name, last_name, age, selectedGender, email, password } = req.body;
    console.log(req.body);

    // Generate a unique user ID
    const userId = uuid.v4();

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Define DynamoDB parameters
    const params = {
      TableName: tableName,
      Item: {
        userId,
        first_name, // Corrected from 'username'
        last_name,  // Corrected from 'username'
        age,
        selectedGender,
        email,
        password: hashedPassword,
        // Add other user attributes as needed
      },
    };

    // Use DocumentClient's put method for item insertion
    await dynamodb.put(params).promise();

    res.status(201).json({ userId, message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/user/:userId', async (req, res) => {
  try {
    const { userId } = req.params;

    console.log('Fetching user details for userId:', userId);

    // Define DynamoDB parameters
    const params = {
      TableName: 'user', // Update with your DynamoDB table name
      Key: {
        userId,
      },
    };

    // Use DocumentClient's get method to retrieve user details by user ID
    const userData = await dynamodb.get(params).promise();

    console.log('DynamoDB response:', userData);

    if (!userData.Item) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Convert DynamoDB item to a plain JavaScript object
 

    res.status(200).json({ user: userData.Item });
  } catch (error) {
    console.error('Error retrieving user details:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
