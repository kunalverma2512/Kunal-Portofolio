import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/mongodb.js'
import contactRoutes from './routes/contact.routes.js'
import newsletterRoutes from './routes/newsletter.routes.js'

// Load environment variables
dotenv.config()

const app = express()
const PORT = process.env.PORT || 8080

// Connect to Database
connectDB()

// Middleware
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    credentials: true
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Request logging middleware (development)
if (process.env.NODE_ENV === 'development') {
    app.use((req, res, next) => {
        console.log(`${req.method} ${req.path}`)
        next()
    })
}

// Basic health check route
app.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'Kunal Verma Portfolio API Server',
        version: '1.0.0',
        timestamp: new Date().toISOString()
    })
})

// API status route
app.get('/api/health', (req, res) => {
    res.json({
        success: true,
        status: 'Server is running',
        uptime: process.uptime(),
        timestamp: new Date().toISOString()
    })
})

// API Routes
app.use('/api/contact', contactRoutes)
app.use('/api/newsletter', newsletterRoutes)

// 404 handler
app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        message: 'Route not found'
    })
})

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).json({
        success: false,
        message: 'Internal server error',
        error: process.env.NODE_ENV === 'development' ? err.message : undefined
    })
})

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`)
    console.log(`📝 Environment: ${process.env.NODE_ENV || 'development'}`)
    console.log(`🌐 CORS enabled for: ${process.env.FRONTEND_URL || 'http://localhost:5173'}`)
})
