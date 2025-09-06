# Daniel's Personal Website (Outdated)

Welcome to my personal website project! This is an outdated version, please check out Personal-Portfolio repo for the most updated recent website portfolio. This is my former full-stack web application that showcases personal information through an interactive, theme-based interface.

## About the Website

This personal website features:
- **Interactive Content Sections**: Display personal information including academics, extracurriculars, hobbies, goals, and more
- **Comment System**: Visitors can leave comments that are stored in a MongoDB database
- **Real-time Updates**: Live reloading during development with Socket.IO
- **Vanilla JavaScript**: Built without React to deepen understanding of web development fundamentals

The website is currently deployed on Vercel and uses MongoDB Atlas for data persistence.

## Project Structure

```
├── api/                    # Backend API endpoints
├── lib/                    # Client and server utilities
├── public/                 # Frontend application
│   ├── contentPage/        # Main content display logic
│   ├── images/            # Theme-specific images
│   ├── openingPage/       # Landing page with theme selection
│   └── txt/               # Personal content files
├── server.js              # Main server entry point
└── vercel.json            # Vercel deployment configuration
```

## Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account (or local MongoDB instance)
- Git

## Setup Instructions

### 1. Clone the Repository

```bash
git clone <repository-url>
cd danielsWebsite
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Database Setup
1. Create a MongoDB Atlas account at [mongodb.com](https://www.mongodb.com/atlas)
2. Create a new cluster
3. Get your connection string
4. Update the connection string in `api/index.js` (line 16):
   ```javascript
   const atlasConnectionString = "your-mongodb-atlas-connection-string";
   ```

### 4. Configure Personal Content

To customize this website for your own use:, update the files in `public/txt/` with your personal information:
   - `academics.txt` - Academic background
   - `ecs.txt` - Extracurricular activities
   - `hobbies.txt` - Personal hobbies and interests
   - `goals.txt` - Future goals and aspirations
   - `basic.txt` - Basic personal information
   - `digital.txt` - Digital presence and projects

### 5. Deployment

The project is configured for Vercel deployment:

1. **Build Process**: The `vercel.json` configuration handles the build process
2. **API Routes**: Backend API is automatically deployed as serverless functions
3. **Static Files**: Frontend files are served from the `public/` directory
