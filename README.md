# Postoria 📱

A dynamic social media platform where users can create accounts, share listings, upload images, leave reviews, and rate content. Built with modern web technologies for a seamless and interactive user experience.

## 🌟 About Postoria

Postoria is a comprehensive listing and review platform that combines social media features with marketplace functionality. Users can create personalized accounts, share their favorite places, experiences, or products through listings, engage with the community through reviews and ratings, and discover amazing content shared by others.

## ✨ Key Features

### 🔐 User Authentication & Accounts
- **Secure Registration**: Create personalized user accounts
- **Authentication**: Secure login/logout with Passport.js
- **Session Management**: Persistent user sessions with secure cookies
- **User Profiles**: Manage personal information and listings

### 📝 Content Creation & Sharing
- **Create Listings**: Share places, experiences, or products with the community
- **Image Upload**: Upload high-quality images with Cloudinary integration
- **Rich Descriptions**: Add detailed descriptions and information
- **Location Tagging**: Tag locations and countries for better discoverability

### 🌐 Social Interaction
- **Review System**: Leave detailed reviews and feedback on listings
- **Rating System**: Rate content to help others discover quality listings
- **Community Engagement**: Interact with other users' content
- **User-Generated Content**: Build a community-driven platform

### 🛡️ Security & Privacy
- **Authorization Controls**: Users can only edit/delete their own content
- **Input Validation**: Comprehensive data validation for security
- **Secure File Upload**: Safe image handling and storage
- **Flash Messaging**: Real-time feedback for user actions

### 🎨 User Experience
- **Responsive Design**: Optimized for desktop and mobile devices
- **Interactive UI**: Built with EJS templating for smooth navigation
- **Real-time Feedback**: Instant notifications and status updates
- **Intuitive Interface**: User-friendly design for all skill levels

## 🛠️ Technology Stack

### Backend Architecture
- **Node.js** - Server-side runtime environment
- **Express.js** - Robust web application framework
- **MongoDB** - NoSQL database with Mongoose ODM
- **Passport.js** - Authentication and authorization middleware
- **Cloudinary** - Cloud-based image storage and optimization
- **Multer** - Multipart form data and file upload handling

### Frontend Technologies
- **EJS** - Dynamic templating engine
- **EJS Mate** - Enhanced layout support
- **Bootstrap** - Responsive CSS framework
- **Custom CSS** - Tailored styling and animations
- **JavaScript** - Interactive client-side functionality

### Security & Validation
- **Joi** - Schema validation and data sanitization
- **Express Session** - Secure session management
- **Connect Flash** - User notification system
- **Method Override** - RESTful routing support
- **Cookie Parser** - Secure cookie handling

## 🏗️ Project Architecture

```
postoria/
├── app.js                 # Main application entry point
├── package.json           # Project dependencies and scripts
├── cloudConfig.js         # Cloudinary configuration
├── middleware.js          # Custom authentication & validation middleware
├── schema.js             # Joi validation schemas
├── controllers/          # Business logic controllers
│   ├── listings.js       # Listing CRUD operations
│   ├── review.js         # Review and rating functionality
│   └── user.js           # User authentication & management
├── model/                # Database models and schemas
│   ├── data.js           # Listing data model
│   ├── reviews.js        # Review and rating model
│   └── user.js           # User account model
├── Route/                # Express.js route definitions
│   ├── listings.js       # Listing-related routes
│   ├── reviews.js        # Review and rating routes
│   └── user.js           # User authentication routes
├── views/                # EJS template files
│   ├── layouts/          # Base layout templates
│   ├── listings/         # Listing display templates
│   ├── users/            # User authentication templates
│   └── includes/         # Reusable template components
├── public/               # Static assets
│   ├── css/              # Custom stylesheets
│   └── javascript/       # Client-side scripts
├── utils/                # Utility functions
│   ├── ExpressError.js   # Custom error handling
│   └── wrapAsync.js      # Async function wrapper
└── data/                 # Sample data and database initialization
    ├── data.js           # Sample listing data
    └── initialize.js     # Database setup script
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** (version 14 or higher)
- **MongoDB** (local installation or MongoDB Atlas account)
- **Cloudinary Account** (for image storage and optimization)

### Installation Steps

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd postoria
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the project root:
   ```env
   NODE_ENV=development
   ATLASDB_URL=your_mongodb_connection_string
   CLOUD_NAME=your_cloudinary_cloud_name
   CLOUD_API_KEY=your_cloudinary_api_key
   CLOUD_API_SECRET=your_cloudinary_api_secret
   SESSION_SECRET=your_secure_session_secret
   ```

4. **Database Configuration**
   - Start MongoDB locally on port 27017, or
   - Configure MongoDB Atlas connection string in your `.env` file

5. **Initialize Sample Data** (Optional)
   ```bash
   node data/initialize.js
   ```

6. **Launch the Application**
   ```bash
   node app.js
   ```

   Access Postoria at `http://localhost:8080`

## 🎯 How to Use Postoria

### For New Users
1. **Join the Community**: Register for a free account
2. **Explore Content**: Browse listings shared by the community
3. **Discover Places**: Use search and filters to find interesting content
4. **Engage**: Leave reviews and ratings on listings you find interesting

### For Content Creators
1. **Create Listings**: Share your favorite places, experiences, or recommendations
2. **Upload Images**: Add beautiful photos to make your listings stand out
3. **Build Your Profile**: Establish your presence in the community
4. **Manage Content**: Edit or remove your listings as needed
5. **Engage with Feedback**: Respond to reviews and build relationships

### For Community Members
1. **Leave Reviews**: Share your experiences and help others
2. **Rate Content**: Use the rating system to highlight quality listings
3. **Follow Trends**: Discover popular and trending content
4. **Connect**: Build connections through shared interests

## 🔗 API Endpoints

### Content Management
- `GET /listings` - Browse all community listings
- `POST /listings` - Create new listing (authenticated users)
- `GET /listings/:id` - View detailed listing information
- `PUT /listings/:id` - Update listing (content owner only)
- `DELETE /listings/:id` - Remove listing (content owner only)

### Social Features
- `POST /listings/:id/reviews` - Add review/rating (authenticated users)
- `DELETE /listings/:id/reviews/:reviewId` - Remove review (author only)

### User Management
- `POST /signup` - Create new user account
- `POST /login` - User authentication
- `GET /logout` - End user session

## 🛡️ Security & Privacy

- **Data Validation**: Comprehensive input validation using Joi schemas
- **Authentication**: Secure user authentication with Passport.js
- **Authorization**: Content ownership verification for modifications
- **Session Security**: Encrypted sessions with secure cookie handling
- **File Security**: Safe image upload and storage with Cloudinary
- **Error Handling**: Graceful error management and user feedback

## 🤝 Contributing to Postoria

We welcome contributions from the community! Here's how you can help:

1. **Fork the Repository**
2. **Create a Feature Branch** (`git checkout -b feature/AmazingFeature`)
3. **Make Your Changes** (follow coding standards)
4. **Test Thoroughly** (ensure all features work correctly)
5. **Commit Your Changes** (`git commit -m 'Add some AmazingFeature'`)
6. **Push to Branch** (`git push origin feature/AmazingFeature`)
7. **Open a Pull Request**

## 📱 Future Enhancements

- **Mobile App**: Native iOS and Android applications
- **Advanced Search**: Enhanced filtering and search capabilities
- **Social Features**: Following users, like/favorite systems
- **Messaging**: Direct messaging between users
- **Analytics**: User engagement and content performance insights
- **API**: RESTful API for third-party integrations

## 📞 Support & Community

- **Issues**: Report bugs or request features via GitHub Issues
- **Documentation**: Comprehensive guides and API documentation
- **Community**: Join our community discussions and feedback sessions

## 📄 License

This project is licensed under the ISC License - see the LICENSE file for details.

---

**Postoria** - *Connecting communities through shared experiences and discoveries* 🌟
