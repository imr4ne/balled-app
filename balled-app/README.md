# Balled deployment

## Render
Create a PostgreSQL database and a Web Service from this repository.

Web Service:
- Root Directory: `backend`
- Build Command: `npm install`
- Start Command: `npm start`
- Instance: Free for testing

Environment variables:
- `DATABASE_URL` = Render PostgreSQL Internal Database URL
- `JWT_SECRET` = a long random secret
- `CLOUDINARY_CLOUD_NAME`
- `CLOUDINARY_API_KEY`
- `CLOUDINARY_API_SECRET`

The app now uses PostgreSQL for persistent application data and Cloudinary for listing images.
