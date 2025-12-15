# Backend Structure Documentation

## 📁 Folder Structure

```
backend/
├── config/              # Configuration files
│   └── mongodb.js      # MongoDB connection setup
├── controllers/         # Business logic
│   └── contact.controller.js
├── middleware/          # Custom middleware
│   └── validator.js    # Request validation
├── models/             # Database schemas
│   └── Contact.model.js
├── routes/             # API endpoints
│   └── contact.routes.js
├── utils/              # Helper functions
│   └── helpers.js
├── server.js           # Main server file
├── .env               # Environment variables
├── .gitignore         # Git ignore rules
├── package.json       # Dependencies
└── README.md          # Documentation
```

## 🗄️ Database Schema

### Contact Model
Comprehensive schema with:
- **Personal Info**: name, email, phone
- **Contact Details**: company, website
- **Message**: subject, message
- **Metadata**: reason, budget, timeline, preferredContact, hearAbout
- **Status Tracking**: status, isReplied, repliedAt, notes
- **Anti-Spam**: ipAddress, userAgent
- **Timestamps**: createdAt, updatedAt

## 🛣️ API Endpoints

### Public Routes
- `POST /api/contact` - Submit contact form (with validation)

### Admin Routes (for future use)
- `GET /api/contact` - Get all contacts (with pagination)
- `GET /api/contact/:id` - Get single contact
- `PATCH /api/contact/:id` - Update contact status
- `DELETE /api/contact/:id` - Delete contact

## ✅ Features Implemented

1. **Comprehensive Validation**
   - express-validator for request validation
   - Mongoose schema validation
   - Custom validation rules for all fields

2. **Error Handling**
   - Detailed validation errors
   - Proper HTTP status codes
   - User-friendly error messages

3. **Data Security**
   - IP address logging for spam prevention
   - User agent tracking
   - Input sanitization

4. **Database**
   - MongoDB with Mongoose
   - Indexed fields for performance
   - Timestamps auto-managed

5. **Code Organization**
   - Separate controllers, routes, models
   - Middleware for validation
   - Utility functions
   - Clean separation of concerns

## 🔧 Environment Variables

Required in `.env`:
```
PORT=8080
NODE_ENV=development
MONGODB_URL=mongodb://localhost:27017/portfolio
FRONTEND_URL=http://localhost:5173
```

## 🚀 Usage

### Start Server
```bash
npm start
```

### Development Mode
```bash
npm run dev
```

## 📝 Example API Request

```javascript
POST http://localhost:8080/api/contact
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "company": "Tech Corp",
  "website": "https://example.com",
  "subject": "Project Collaboration",
  "message": "I would like to discuss a potential project...",
  "reason": "project",
  "budget": "$1000 - $5000",
  "timeline": "1 month",
  "preferredContact": "email",
  "hearAbout": "LinkedIn"
}
```

## 📬 Example API Response

### Success
```json
{
  "success": true,
  "message": "Thank you for reaching out! I will get back to you soon.",
  "data": {
    "id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com",
    "subject": "Project Collaboration"
  }
}
```

### Validation Error
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    {
      "field": "email",
      "message": "Please enter a valid email address"
    }
  ]
}
```
