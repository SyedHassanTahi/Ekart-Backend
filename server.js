import express from 'express';
import 'dotenv/config';
import connectDB from './database/db.js';
import userRoute from './routes/userRoute.js'
import productRoute from './routes/productRoute.js'
import cartRoute from './routes/cartRoute.js'
import orderRoute from './routes/orderRoute.js'
import cors from 'cors'
const app = express()
// const PORT = process.env.PORT || 3000;
connectDB();
//Middleware
app.use(express.json())
app.use(cors({
    origin: 'https://ekart-backend-pink.vercel.app',
    credentials: true
}))

app.use('/api/v1/user', userRoute)
app.use('/api/v1/product', productRoute)
app.use('/api/v1/cart', cartRoute)
app.use('/api/v1/order', orderRoute)


// http://localhost:8000/api/v1/user/register

// app.listen(PORT, () => {
//     connectDB()
//     console.log(`Example app listening on port ${PORT}`)
// })

export default app;


