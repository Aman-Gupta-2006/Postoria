# Postoria

A modern, full-stack social platform Postoria, focused on sharing and discovering unique places and experiences. Built with Node.js, Express, MongoDB Atlas, Passport.js, EJS, and Cloudinary.

## Features
- User authentication (signup, login, logout) with Passport.js
- Secure session management with MongoDB session store
- Listings: Create, view, edit, and delete places
- Reviews: Add and manage reviews for listings
- Search listings by location/country
- Responsive, modern UI with EJS, Bootstrap, and custom CSS
- Image uploads via Cloudinary
- Environment-based configuration for secrets and database

## Tech Stack
- Node.js, Express.js
- MongoDB Atlas & Mongoose
- Passport.js (local strategy)
- EJS templating
- Bootstrap & custom CSS/JS
- Cloudinary (image hosting)
- dotenv (environment variables)
- connect-mongo (persistent session store)

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- MongoDB Atlas account
- Cloudinary account

### Installation
1. Clone the repository:
   ```sh
   git clone git https://github.com/Aman-Gupta-2006/Postoria.git
   cd Postoria
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in the root directory with the following:
   ```env
   ATLASDB_URL=your_mongodb_atlas_connection_string
   SECRET=your_session_secret
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_KEY=your_cloudinary_api_key
   CLOUDINARY_SECRET=your_cloudinary_api_secret
   PORT=8080 # or any port you prefer
   ```
4. (Optional) Seed the database with sample data:
   ```sh
   node data/initialize.js
   ```

### Running the App
- Development:
  ```sh
  npm run dev
  ```
- Production:
  ```sh
  npm start
  ```

Visit `http://localhost:8080` (or your chosen port) in your browser.



## Folder Structure
```
app.js
cloudConfig.js
middleware.js
package.json
schema.js
controllers/
  listings.js
  review.js
  user.js
data/
  data.js
  initialize.js
model/
  data.js
  reviews.js
  user.js
public/
  css/
    star.css
    style.css
  javascript/
    script.js
Route/
  listings.js
  reviews.js
  user.js
utils/
  ExpressError.js
  wrapAsync.js
views/
  includes/
    flash.ejs
    footer.ejs
    navbar.ejs
  layouts/
    boilerplate.ejs
  listings/
    edit.ejs
    error.ejs
    form.ejs
    index.ejs
    show.ejs
  users/
    login.ejs
    signup.ejs
```


## License
ISC

---

For questions or contributions, open an issue or pull request!
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


**Postoria** - *Connecting communities through shared experiences and discoveries* 🌟
