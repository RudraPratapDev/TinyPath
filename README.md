
# 🌐 TinyPath — A Modern URL Shortener

<p align="center">
  <img src="https://socialify.git.ci/RudraPratapDev/TinyPath/image?name=1&owner=1&pattern=Floating+Cogs&theme=Auto" alt="TinyPath banner" width="640" height="320"/>
</p>


<div align="center">


### *Transform endless URLs into tiny, powerful links*

<img src="https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge&logo=vercel" alt="Live Demo">

**[🚀 Live Demo](https://tiny-path-delta.vercel.app/)**

[![Made with React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)](https://mongodb.com/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

<br>

*Why settle for ugly, long URLs when you can have beautiful, trackable short links?*

</div>

---

## 🌟 What Makes tinyPath Special?

**tinyPath** isn't just another URL shortener—it's a complete link management platform designed for the modern web. Built with cutting-edge technologies and a passion for beautiful user experiences.

<div align="center">

### ✨ **Key Highlights**

| 🚀 **Lightning Fast** | 🎨 **Beautiful Design** | 📊 **Smart Analytics** | 🔒 **Secure & Private** |
|:---:|:---:|:---:|:---:|
| Instant URL shortening | Dark/Light themes | Real-time click tracking | JWT authentication |
| Modern React 18 | Responsive design | Performance insights | Secure data handling |

</div>

---

## 🎯 **Core Features**

### 🔥 **Instant URL Shortening**
- Transform any long URL into a clean, shareable link in seconds
- Custom short codes for branded links
- Bulk URL processing capabilities

### 📈 **Comprehensive Analytics**
- Real-time click tracking and statistics
- Geographic data and referrer insights
- Performance metrics and trends
- Export data for detailed analysis

### 👤 **User Management**
- Secure user authentication with JWT
- Personal dashboard for link management
- Link history and organization
- Account settings and preferences

### 🎨 **Premium User Experience**
- Beautiful, intuitive interface with dark/light themes
- Fully responsive design that works on any device
- Fast loading times and smooth animations
- Accessibility-first approach

### 🛡️ **Enterprise-Grade Security**
- Secure password hashing with bcrypt
- Protected routes and API endpoints
- Input validation and sanitization
- CORS protection and rate limiting

---


## 🛠️ **Tech Stack & Architecture**

<div align="center">

### **Frontend**
| Technology | Purpose | Why We Chose It |
|------------|---------|-----------------|
| **React 18** | UI Framework | Latest features, excellent performance |
| **TanStack Router** | Routing | Type-safe, modern routing solution |
| **Redux Toolkit** | State Management | Simplified Redux with great DevTools |
| **TailwindCSS** | Styling | Utility-first, highly customizable |
| **TanStack Query** | Data Fetching | Powerful caching and synchronization |
| **Vite** | Build Tool | Lightning-fast development experience |

### **Backend**
| Technology | Purpose | Why We Chose It |
|------------|---------|-----------------|
| **Node.js** | Runtime | Perfect for real-time applications |
| **Express.js** | Web Framework | Lightweight, flexible, battle-tested |
| **MongoDB** | Database | Flexible schema, excellent scalability |
| **Mongoose** | ODM | Elegant MongoDB object modeling |
| **JWT** | Authentication | Stateless, secure token-based auth |
| **bcrypt** | Password Hashing | Industry-standard security |

</div>

---

## 🚀 **Quick Start Guide**

### **Prerequisites**
```bash
Node.js 18+ • MongoDB • Git • npm/yarn
```

### **1. Clone & Setup**
```bash
# Clone the repository
git clone https://github.com/RudraPratapDev/TinyPath.git
cd shortURL

# Install backend dependencies
cd BACKEND && npm install

# Install frontend dependencies  
cd ../FRONTEND && npm install
```

### **2. Environment Configuration**

Create environment files:

**Backend Environment (`.env`)**
```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/tinypath
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRE=7d
APP_URL=http://localhost:5000
CLIENT_URL=http://localhost:5173
BCRYPT_SALT_ROUNDS=12
```

**Frontend Environment (`.env`)**
```env
VITE_API_URL=http://localhost:5000/api
VITE_BASE_URL=http://localhost:5000
```

### **3. Database Setup**
```bash
# Start MongoDB (if running locally)
mongod

# Or use MongoDB Atlas for cloud hosting
# Update MONGODB_URI with your Atlas connection string
```

### **4. Launch Application**
```bash
# Terminal 1: Start Backend
cd BACKEND && npm run dev

# Terminal 2: Start Frontend
cd FRONTEND && npm run dev
```

### **5. Access Application**
- 🌐 **Frontend**: [http://localhost:5173](http://localhost:5173)
- 🔧 **Backend API**: [http://localhost:5000](http://localhost:5000)
- 🚀 **Live Demo**: [https://tiny-path-delta.vercel.app/](https://tiny-path-delta.vercel.app/)

---

## 📚 **API Reference**

### **Authentication Endpoints**
```bash
POST /api/auth/register    # User registration
POST /api/auth/login       # User login
POST /api/auth/logout      # User logout
GET  /api/auth/me          # Get current user
```

### **URL Management**
```bash
POST   /api/create         # Create short URL
GET    /api/user/urls      # Get user's URLs
DELETE /api/urls/:id       # Delete URL
GET    /:shortId          # Redirect to original URL
```

### **Example API Usage**

**Create Short URL:**
```bash
curl -X POST https://tiny-path-delta.vercel.app/api/create \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "longUrl": "https://example.com/very/long/url",
    "customSlug": "my-link"
  }'
```

**Response:**
```json
{
  "success": true,
  "shortUrl": "https://tiny-path-delta.vercel.app/my-link",
  "data": {
    "originalUrl": "https://example.com/very/long/url",
    "shortId": "my-link",
    "clicks": 0
  }
}
```

---

## 🏗️ **Project Structure**

```
tinyPath/
├── 📁 BACKEND/
│   ├── 📁 src/
│   │   ├── 📁 config/         # Database configuration
│   │   ├── 📁 controllers/    # Request handlers
│   │   ├── 📁 dao/            # Data access layer
│   │   ├── 📁 middleware/     # Auth & validation
│   │   ├── 📁 models/         # Database schemas
│   │   ├── 📁 routes/         # API routes
│   │   └── 📁 utils/          # Helper functions
│   ├── 📄 app.js             # Express app setup
│   └── 📄 package.json       # Dependencies
├── 📁 FRONTEND/
│   ├── 📁 src/
│   │   ├── 📁 api/            # API calls
│   │   ├── 📁 components/     # React components
│   │   ├── 📁 context/        # React contexts
│   │   ├── 📁 pages/          # Page components
│   │   ├── 📁 store/          # Redux store
│   │   └── 📁 utils/          # Helper functions
│   ├── 📄 vite.config.js     # Vite configuration
│   ├── 📄 vercel.json        # Deployment config
│   └── 📄 package.json       # Dependencies
└── 📄 README.md              # You are here!
```

---

## 🚀 **Deployment Guide**

### **Frontend (Vercel)**
```bash
# Build and deploy
npm run build
vercel --prod

# Or connect your GitHub repo to Vercel for auto-deployment
```

### **Backend (Railway/Render)**
```bash
# Deploy to Railway
railway login
railway new
railway up

# Set environment variables in your hosting platform
```

### **Environment Variables for Production**
```env
# Backend
NODE_ENV=production
APP_URL=https://your-backend-domain.com
CLIENT_URL=https://your-frontend-domain.com
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/tinypath

# Frontend
VITE_API_URL=https://your-backend-domain.com/api
VITE_BASE_URL=https://your-backend-domain.com
```

---



## 🔒 **Security Features**

- ✅ **JWT Authentication** - Secure, stateless sessions
- ✅ **Password Hashing** - bcrypt with salt rounds
- ✅ **Input Validation** - Prevent malicious inputs
- ✅ **CORS Protection** - Controlled cross-origin requests
- ✅ **Rate Limiting** - Prevent abuse and spam
- ✅ **Environment Variables** - Secure configuration management

---

## 📈 **Performance Optimizations**

- ⚡ **React 18 Features** - Concurrent rendering
- ⚡ **Code Splitting** - Lazy-loaded components
- ⚡ **Database Indexing** - Optimized queries
- ⚡ **Caching Strategy** - Efficient data retrieval
- ⚡ **Bundle Optimization** - Minimal build sizes
- ⚡ **CDN Integration** - Fast global delivery

---

## 🤝 **Contributing**

We welcome contributions! Here's how you can help:

### **Development Workflow**
1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Code** your improvements
4. **Test** thoroughly
5. **Commit** your changes (`git commit -m 'Add amazing feature'`)
6. **Push** to the branch (`git push origin feature/amazing-feature`)
7. **Open** a Pull Request

### **Contribution Guidelines**
- Follow the existing code style
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Be respectful and collaborative

---



## 🆘 **Support & Community**

### **Getting Help**
- 📖 **Documentation**: Check this README first
- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/RudraPratapDev/TinyPath/issues)
- 💡 **Feature Requests**: [GitHub Discussions](https://github.com/RudraPratapDev/TinyPath/discussions)


### **Community**
- ⭐ Star this repository if you find it helpful
- 🍴 Fork and contribute to the project
- 📢 Share with your network
- 💬 Join discussions and provide feedback

---

## 📄 **License**

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License - feel free to use this project for personal or commercial purposes!
```

---

## 🙏 **Acknowledgments**

- **React Team** - For the amazing framework
- **Vercel** - For seamless deployment platform
- **MongoDB** - For flexible database solutions
- **TailwindCSS** - For beautiful, utility-first styling
- **Open Source Community** - For inspiration and tools

---

<div align="center">

## 👨‍💻 **Built with ❤️ by Rudra Pratap Singh Tomar**

*Transforming the way we share links, one URL at a time.*

### **Connect with me:**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/RudraPratapDev)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rudra-tech)


**⭐ If tinyPath helped you, please star this repository! ⭐**

*Made with React, Node.js, and lots of ☕*

</div>
