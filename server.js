import express from 'express';
const app = express();
const port = 3001;

console.log('yolo homeskillet');

app.get('/graphql', (req, res) => {
	res.send({ express: 'Yo Momma' });
});

app.listen(port, () => {
	console.log(`listening on port ${port}`);
});