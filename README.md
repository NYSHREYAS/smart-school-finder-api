# Smart School Finder API

A RESTful API built using Node.js, Express.js, and MySQL that enables users to add school data and retrieve a list of schools sorted by geographical proximity using the Haversine formula.


## Features

* Add schools with latitude and longitude coordinates
* Retrieve schools sorted by distance from a user-specified location
* Accurate distance calculation using the Haversine formula
* Efficient and scalable REST API design
* Structured and modular backend architecture

---

## Tech Stack

* Node.js
* Express.js
* MySQL
* Postman (for API testing)

---

## API Endpoints

### Add School

**POST** `/addSchool`

### List Schools

**GET** `/listSchools?latitude=...&longitude=...`

---

## Sample Output

```json
{
  "name": "Test School",
  "distance_km": 0.71
}
```

---

## Setup Instructions

```bash
npm install
npm start
```

---

## Testing

The APIs were tested using Postman. A Postman collection is included in the repository for reference and testing.

---

## Author

Shreyas Nepale


A RESTful API built using Node.js, Express.js, and MySQL that enables users to add school data and retrieve a list of schools sorted by geographical proximity using the Haversine formula.

---

## Features

* Add schools with latitude and longitude coordinates
* Retrieve schools sorted by distance from a user-specified location
* Accurate distance calculation using the Haversine formula
* Efficient and scalable REST API design
* Structured and modular backend architecture

---

## Tech Stack

* Node.js
* Express.js
* MySQL
* Postman (for API testing)

---

## API Endpoints

### Add School

**POST** `/addSchool`

### List Schools

**GET** `/listSchools?latitude=...&longitude=...`

---

## Sample Output

```json
{
  "name": "Test School",
  "distance_km": 0.71
}
```

---

## Setup Instructions

```bash
npm install
npm start
```

---

## Testing

The APIs were tested using Postman. A Postman collection is included in the repository for reference and testing.

---

## Author

Shreyas Nepale
