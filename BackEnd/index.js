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
 

const AWS_ACCESS_KEY_ID = "ASIA4MTWMHLBTSMWXGGC"

const AWS_SECRET_ACCESS_KEY = "aE7Ufu52MDEly+DG4KaaYO44HIhNw3Ga7iyZRKVw"
const AWS_SESSION_TOKEN=`FwoGZXIvYXdzEE0aDJsGvsXvOX5Wz9LfaCLFATqnlGKpCf+6kswMi3oJ9RPrDJnl7EK4J97w87okRSbIxH9BtPJCFe6qBLUmf8NAo2frzqAGIDOl6naa99h5AQD5mq/+3XKSepzzaruDgBRCsTvok9FFgPWooX5XErFcEuYHm9JrXPCAcMbMZ6kYhI+yw4UQtMBxCk65IBrEYXRBf23a/yvqA7GMcpYyi2EzY50u/sa8pdpBiuhzcTUqXoAJSBABl9cATBmEtPtz16HFCWDMyEMaxMPIkjYr9iHXZHepNor9KNqHwa8GMi0SnL1J1E0mVRMGJIgHPU2A8Zx9Kgjpgc41D3pmVUe0PE/rkKZMFG5LZ0yMXxs=`

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

app.get('/detailcourse/:courseId', async (req, res) => {
  const { courseId } = req.params;
  console.log(req.params); // Logging the courseId to the console for debugging

  // DynamoDB parameters to get course details by courseId
  const params = {
    TableName: 'course', // Assuming tablecourse is defined elsewhere in your code
    Key: {
      courseId: courseId,
    },
  };

  try {
    // Use DynamoDB's get method to retrieve course details by courseId
    const result = await dynamodb.get(params).promise();
    console.log(result);
    if (!result.Item) {
      return res.status(404).json({ message: 'Course not found' });
    }

    // Convert DynamoDB item to a plain JavaScript object
    const courseDetails = AWS.DynamoDB.Converter.unmarshall(result.Item);

    // Send the course details as JSON response
    console.log(courseDetails);
    
  } catch (error) {
    console.error('Error retrieving course details:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
