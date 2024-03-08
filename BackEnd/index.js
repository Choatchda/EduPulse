// index.js
const express = require('express');
const app = express();
const AWS = require('aws-sdk');
const port = 3000;
app.use(express.json());


// Define a route
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});
 

const AWS_ACCESS_KEY_ID = "ASIA4MTWMHLBSYEXNNHD"

const AWS_SECRET_ACCESS_KEY = "4iO8OJMLMgvCR4j25MQKwYF00w+KnuIWgcrfzTFl"
const AWS_SESSION_TOKEN=`FwoGZXIvYXdzEOX//////////wEaDOG5oKagSJ+xGgJp7CLFARhbdn938elYFfQVJxbdcIlgtoQrmMBiEXzWCeRtf309UIZ0xkEf+5RU4M7uxQzct2Nv85VxQBmSsY4MO1PH/6fBwUxIqKr+kWjbrvRg6nkzbiodAAH/EfribYUYliJQ4w7fHahOCaZs4DEGTopGuPTTknLXfA2Ru4TFTfqIL48YD746F+F25TrIPSmXbpAYJhdMSrCi/AhLUBZYK4D+wvqT3sVANBhVLkHFyXrZl3k4Uc5urg7Ep/VDFxHeVwpIW7BFyf5RKJKDqq8GMi2dBSLpotGkHQrUQXZBQOrwUepLLpAM1HxXp5lbneFE6jL1wf3QKugHuZF+dC8=`

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
const dynamodb = new AWS.DynamoDB();

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
// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
