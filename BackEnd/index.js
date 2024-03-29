// index.js
const express = require('express');
const app = express();
const AWS = require('aws-sdk');
const uuid = require('uuid');
const bcrypt = require('bcrypt');
const cors = require('cors');
const port = 3000;
const multer = require('multer');
const multerS3 = require('multer-s3');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Define a route
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});
 

const AWS_ACCESS_KEY_ID = "ASIA4MTWMHLB333C2MN7"

const AWS_SECRET_ACCESS_KEY = "y7cJfwwUrv7O0egwlTShD2e5fVP4oSw0eVJYfi9V"
const AWS_SESSION_TOKEN=`FwoGZXIvYXdzEGAaDKWk9kxyteYoiTF65iLFAW/L0ZmasnKtMbfKkd1pYAg2du+SUpzoSU5pGxHTD84Wn/6tPWgB5nwR0iCu6M1QsqPQ/2vIKfAeuMuUdAiaMD7hcWH6lQXB3X1rtg/Uq8ODdhaS3aitscPVndiMoqOBi/zWN1w2qyk2w8ztxaMXYnv6AmkjyylfTDSLlt1SMiUHeZKYp3dbXrjgSqhwYkfmLh5EHm56zc+ieT5NZsp6xCCRYGF6YFuD7z/bVkUOkqYQNcA/pBCjLLtCOsw8yEZAuMP2ZHaXKPCExa8GMi0ThRK615VVomvG8Hr8ywwLiXAGxU0DUvsPIsEYIjeZey/g/xC7wFkhSMdCzZ4=`

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

const upload = multer({
  storage: multerS3({
    s3: new AWS.S3({
      accessKeyId: accessKeyId,
      secretAccessKey: secretAccessKey,
      sessionToken: sessionToken,
    }),
    bucket: 'edupulse-bucket',
    acl: 'private',
    key: function (req, file, cb) { 
      cb(null, 'courses/' + Date.now().toString() + '-' + file.originalname);
    },
  }),
});

 
const dynamodb = new AWS.DynamoDB.DocumentClient();
const dynamodb1 = new AWS.DynamoDB()
app.get('/course', async (req, res) => {
  const params = {
    TableName: 'course',
    Limit: req.query.limit, // Limit the result to three items
  };

  try {
    const data = await dynamodb1.scan(params).promise();
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

// Use DynamoDB instead of DocumentClient

app.post('/course', upload.fields([{ name: 'imageFile', maxCount: 1 }, { name: 'videoFile', maxCount: 1 }]), async (req, res) => {
  // Generate unique courseId
  const courseId = uuidv4();

  console.log(req.body);

  const { courseName, hour, teacherName, subject, price } = req.body;
  const imageFile = req.files['imageFile'] ? req.files['imageFile'][0].location : null;
  const videoFile = req.files['videoFile'] ? req.files['videoFile'][0].location : null;

  // Validation: Check if required fields are provided
  if (!courseName || !hour || !teacherName) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // DynamoDB parameters
  const params = {
    TableName: 'course',
    Item: {
      courseId,
      courseName,
      hour,
      teacherName,
      price,
      imageURL: imageFile,
      videoURL: videoFile,
      subject: subject,
    },
  };

  try {
    // Use DynamoDB's put method for item insertion
    await dynamodb.put(params).promise();

    // Include the S3 link in the response
    const response = {
      message: 'Course added successfully',
      imageURL: imageFile, // S3 link
    };

    res.status(201).json(response);
  } catch (error) {
    console.error('Error adding course to DynamoDB:', error);
    res.status(500).json({ error: 'Internal Server Error' });
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

    res.status(201).json({ userId: user.userId, message: 'Login successful' });
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
 

    res.status(201).json({ user: userData.Item });
  } catch (error) {
    console.error('Error retrieving user details:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



app.post('/problem', async (req, res) => {
  try {
    console.log(req.body);
    const problemId = uuidv4();
    // Extract problem data from the request body
    const { title, description,createdBy,
    } = req.body;

    // Validate required fields
    if (!problemId || !title || !description || !createdBy) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // DynamoDB parameters
    const params = {
      TableName: 'problem',
      Item: {
        problemId,
        title,
        description,
        createdBy,
      },
    };

    // Use DynamoDB's put method for item insertion
    await dynamodb.put(params).promise();

    res.status(201).json({ message: 'Problem added successfully' });
  } catch (error) {
    console.error('Error adding problem to DynamoDB:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.get('/problem/:problemId', async (req, res) => {
  try {
    const { problemId } = req.params;

    // DynamoDB parameters
    const params = {
      TableName: 'problem',
      Key: {
        problemId,
      },
    };

    // Use DynamoDB's get method to retrieve a problem by problemId
    const problemData = await dynamodb.get(params).promise();

    if (!problemData.Item) {
      return res.status(404).json({ message: 'Problem not found' });
    }

    res.status(200).json({ problem: problemData.Item });
  } catch (error) {
    console.error('Error retrieving problem details:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.get('/problems', async (req, res) => {
  try {
    // Retrieve all problems from your DynamoDB table
    const params = {
      TableName: 'problem',
    };

    const data = await dynamodb1.scan(params).promise();
    const problems = data.Items ? data.Items.map(item => AWS.DynamoDB.Converter.unmarshall(item)) : [];

    res.status(200).json({ problems });
  } catch (error) {
    console.error('Error retrieving problems from DynamoDB:', error);

    if (error.code === 'NetworkingError') {
      res.status(500).json({ message: 'NetworkingError: Check AWS credentials and network connection.' });
    } else {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
});

// Add a new endpoint to handle adding course IDs to a user by user ID
app.post('/addcourse/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const { courseId } = req.body;

    // Validate if courseId is provided
    if (!courseId) {
      return res.status(400).json({ error: 'Missing required field: courseId' });
    }

    // DynamoDB parameters to update the user's courseIds array
    const params = {
      TableName: 'user',
      Key: {
        userId,
      },
      UpdateExpression: 'SET #courseIds = list_append(if_not_exists(#courseIds, :empty_list), :courseId)',
      ExpressionAttributeNames: {
        '#courseIds': 'courseIds',
      },
      ExpressionAttributeValues: {
        ':courseId': [courseId],
        ':empty_list': [],
      },
      ReturnValues: 'UPDATED_NEW',
    };

    // Use DocumentClient's update method for updating the user's courseIds
    const result = await dynamodb.update(params).promise();

    res.status(200).json({ updatedCourseIds: result.Attributes.courseIds });
  } catch (error) {
    console.error('Error adding course to user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/course/:courseId', async (req, res) => {
  try {
    const { courseId} = req.params;

    console.log('Fetching course details for courseId:', courseId);

    // Define DynamoDB parameters
    const params = {
      TableName: 'course', // Update with your DynamoDB table name
      Key: {
        courseId,
      },
    };

    // Use DocumentClient's get method to retrieve user details by user ID
    const courseData = await dynamodb.get(params).promise();

    console.log('DynamoDB response:', courseData);

    if (!courseData.Item) {
      return res.status(404).json({ message: 'courseData not found' });
    }

    // Convert DynamoDB item to a plain JavaScript object
 

    res.status(201).json({ course: courseData.Item });
  } catch (error) {
    console.error('Error retrieving user details:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Add a new endpoint to handle updating user profile by user ID
app.post('/updateprofile/:userId', async (req, res) => {
  try {
    console.log(req.body);
    const { userId } = req.params;
    const { first_name, last_name, age, selectedGender } = req.body;

    // Validate if at least one field is provided for update
    if (!first_name && !last_name && !age && !selectedGender) {
      return res.status(400).json({ error: 'At least one field is required for update' });
    }

    // DynamoDB parameters to update the user's profile
    const updateExpression = [];
    const expressionAttributeValues = {};

    if (first_name) {
      updateExpression.push('#first_name = :first_name');
      expressionAttributeValues[':first_name'] = first_name;
    }

    if (last_name) {
      updateExpression.push('#last_name = :last_name');
      expressionAttributeValues[':last_name'] = last_name;
    }

 

    const updateExpressionStr = 'SET ' + updateExpression.join(', ');

    const params = {
      TableName: 'user',
      Key: {
        userId,
      },
      UpdateExpression: updateExpressionStr,
      ExpressionAttributeNames: {
        '#first_name': 'first_name',
        '#last_name': 'last_name',
      },
      ExpressionAttributeValues: expressionAttributeValues,
      ReturnValues: 'ALL_NEW',
    };

    // Use DocumentClient's update method for updating the user's profile
    const result = await dynamodb.update(params).promise();

    res.status(200).json({ updatedProfile: result.Attributes });
  } catch (error) {
    console.error('Error updating user profile:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
 
// Add a new endpoint to handle posting payment with a slip image
app.post('/payment', upload.single('slipImage'), async (req, res) => {
  try {
    // Generate a unique paymentId
    const paymentId = uuidv4();

    console.log(req.body);

    const { name, price, tel, state, userId, courseId, date } = req.body;

    // Convert date string to a Date object
    const parsedDate = new Date(date);

    // Format the date as 'dd/mm/yyyy'
    const formattedDate = parsedDate.toLocaleDateString('en-GB');

    const slipImage = req.file ? req.file.location : null;

    // Validation: Check if required fields are provided
    if (!name || !price || !tel || !state || !userId || !courseId || !formattedDate) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // DynamoDB parameters
    const params = {
      TableName: 'payment',
      Item: {
        paymentId,
        name,
        price,
        tel,
        state,
        userId,
        courseId,
        date: formattedDate,
        slipImageURL: slipImage,
      },
    };

    // Use DynamoDB's put method for item insertion
    await dynamodb.put(params).promise();

    // Include the S3 link in the response
    const response = {
      message: 'Payment added successfully',
      slipImageURL: slipImage, // S3 link
    };

    res.status(201).json(response);
  } catch (error) {
    console.error('Error adding payment to DynamoDB:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.get('/payment/:paymentId', async (req, res) => {
  try {
    const { paymentId } = req.params;

    // DynamoDB parameters
    const params = {
      TableName: 'payment',
      Key: {
        paymentId,
      },
    };

    // Use DynamoDB's get method to retrieve payment details by payment ID
    const paymentData = await dynamodb.get(params).promise();

    if (!paymentData.Item) {
      return res.status(404).json({ message: 'Payment not found' });
    }

    res.status(200).json({ payment: paymentData.Item });
  } catch (error) {
    console.error('Error retrieving payment details:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.get('/payments', async (req, res) => {
  try {
    // DynamoDB parameters
    const params = {
      TableName: 'payment',
    };

    // Use DynamoDB's scan method to retrieve all payment data
    const paymentData = await dynamodb.scan(params).promise();

    if (!paymentData.Items || paymentData.Items.length === 0) {
      return res.status(404).json({ message: 'No payments found' });
    }

    res.status(200).json({ payments: paymentData.Items });
  } catch (error) {
    console.error('Error retrieving payment details:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.put('/payments/:paymentId', async (req, res) => {
  try {
    const { paymentId } = req.params;
    const { state } = req.body; // Change the field name to 'state'

    // DynamoDB parameters
    const params = {
      TableName: 'payment',
      Key: {
        paymentId,
      },
      UpdateExpression: 'SET #s = :state', // Use expression attribute names for reserved words
      ExpressionAttributeNames: {
        '#s': 'state',
      },
      ExpressionAttributeValues: {
        ':state': state,
      },
      ReturnValues: 'ALL_NEW', // Return the updated item
    };

    // Use DynamoDB's update method to update the state
    const updatedPayment = await dynamodb.update(params).promise();

    res.status(200).json({ payment: updatedPayment.Attributes });
  } catch (error) {
    console.error('Error updating payment state:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});





// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
