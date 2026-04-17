# School Management API

A REST API built with **Node.js**, **Express.js**, and **MySQL** to manage school data and find schools sorted by proximity.

---

## Tech Stack
- Node.js + Express.js
- MySQL (via `mysql2`)
- Haversine Formula for distance calculation

---

## Project Structure
```
school-api/
├── server.js                  # App entry point
├── db.js                      # MySQL connection
├── package.json
├── setup.sql                  # Database setup script
├── .env.example               # Environment variable template
├── routes/
│   └── schoolRoutes.js        # API route definitions
└── controllers/
    └── schoolController.js    # Business logic + Haversine distance
```

---

## Setup Instructions

### 1. Clone & install
```bash
git clone <your-repo-url>
cd school-api
npm install
```

### 2. Set up MySQL
```bash
mysql -u root -p < setup.sql
```

### 3. Configure environment
```bash
cp .env.example .env
# Edit .env with your MySQL credentials
```

### 4. Run the server
```bash
npm start          # production
npm run dev        # development (nodemon)
```

---

## API Reference

### POST /addSchool
Adds a new school to the database.

**Request body (JSON):**
```json
{
  "name": "ABC School",
  "address": "Baner, Pune, Maharashtra",
  "latitude": 18.5610,
  "longitude": 73.7823
}
```

**Success response (201):**
```json
{
  "message": "School added successfully.",
  "schoolId": 6
}
```

**Validation error (400):**
```json
{
  "error": "All fields (name, address, latitude, longitude) are required."
}
```

---

### GET /listSchools
Returns all schools sorted by distance from the given coordinates.

**Query parameters:**
- `latitude` — user's latitude (required)
- `longitude` — user's longitude (required)

**Example request:**
```
GET /listSchools?latitude=18.5204&longitude=73.8567
```

**Success response (200):**
```json
{
  "total": 3,
  "schools": [
    {
      "id": 2,
      "name": "Ryan International School",
      "address": "Pune, Maharashtra",
      "latitude": 18.5204,
      "longitude": 73.8567,
      "distance_km": 0.00
    },
    {
      "id": 4,
      "name": "Vibgyor High",
      "address": "Kalyani Nagar, Pune",
      "latitude": 18.5462,
      "longitude": 73.9008,
      "distance_km": 4.87
    }
  ]
}
```

---

## Haversine Formula
Distance is calculated using the Haversine formula which accounts for Earth's curvature, returning accurate kilometer distances between two lat/lng coordinates.

---

## Deploying to Render (Free Hosting)

1. Push code to GitHub
2. Go to [render.com](https://render.com) → New → Web Service
3. Connect your GitHub repo
4. Set environment variables in Render dashboard (same as `.env`)
5. For MySQL, use [Railway.app](https://railway.app) — free MySQL hosting
6. Update `DB_HOST`, `DB_USER`, `DB_PASSWORD`, `DB_NAME` with Railway credentials

---

## Postman Collection

Import the following into Postman:

- **Add School** — `POST {{base_url}}/addSchool` with JSON body
- **List Schools** — `GET {{base_url}}/listSchools?latitude=18.5204&longitude=73.8567`

Set environment variable `base_url` to your live URL or `http://localhost:3000`.
