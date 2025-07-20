# Deployment Instructions

## Environment Variables

Create a `.env` file in the root of the `BACKEND` directory with the following:

```
PORT=3000
MONGO_URI=your-mongodb-uri
JWT_SECRET=your-jwt-secret
APP_URL=https://your-backend-url.com
FRONTEND_URL=https://your-frontend-url.com
```

- `PORT`: The port your backend will run on (default 3000).
- `MONGO_URI`: Your MongoDB connection string.
- `JWT_SECRET`: Secret for JWT token signing.
- `APP_URL`: The public URL of your backend (used for generating short URLs).
- `FRONTEND_URL`: The public URL of your frontend (used for CORS).

## Deployment Steps

1. Push your code to GitHub.
2. Deploy your backend to your chosen service (Render, Railway, etc.).
3. Set the above environment variables in your deployment dashboard.
4. Make sure your MongoDB is accessible from your backend.
5. Your backend will now accept requests from your frontend domain and generate correct short URLs.

---

## Local Development

For local development, you can set:
```
PORT=3000
MONGO_URI=mongodb://localhost:27017/shorturl
JWT_SECRET=your-local-secret
APP_URL=http://localhost:3000
FRONTEND_URL=http://localhost:5173
``` 