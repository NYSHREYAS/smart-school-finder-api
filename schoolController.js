const db = require("../db");

// Haversine Formula — calculates real-world distance between two coordinates
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Earth radius in km
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

// POST /addSchool
exports.addSchool = (req, res) => {
    const { name, address, latitude, longitude } = req.body;

    // Validation
    if (!name || !address || latitude === undefined || longitude === undefined) {
        return res.status(400).json({ error: "All fields (name, address, latitude, longitude) are required." });
    }
    if (typeof name !== "string" || name.trim() === "") {
        return res.status(400).json({ error: "Name must be a non-empty string." });
    }
    if (typeof address !== "string" || address.trim() === "") {
        return res.status(400).json({ error: "Address must be a non-empty string." });
    }
    const lat = parseFloat(latitude);
    const lon = parseFloat(longitude);
    if (isNaN(lat) || lat < -90 || lat > 90) {
        return res.status(400).json({ error: "Latitude must be a valid number between -90 and 90." });
    }
    if (isNaN(lon) || lon < -180 || lon > 180) {
        return res.status(400).json({ error: "Longitude must be a valid number between -180 and 180." });
    }

    const query = "INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)";
    db.query(query, [name.trim(), address.trim(), lat, lon], (err, result) => {
        if (err) {
            return res.status(500).json({ error: "Database error.", details: err.message });
        }
        res.status(201).json({
            message: "School added successfully.",
            schoolId: result.insertId
        });
    });
};

// GET /listSchools?latitude=xx&longitude=yy
exports.listSchools = (req, res) => {
    const { latitude, longitude } = req.query;

    if (!latitude || !longitude) {
        return res.status(400).json({ error: "Query params latitude and longitude are required." });
    }
    const userLat = parseFloat(latitude);
    const userLon = parseFloat(longitude);
    if (isNaN(userLat) || isNaN(userLon)) {
        return res.status(400).json({ error: "latitude and longitude must be valid numbers." });
    }

    db.query("SELECT * FROM schools", (err, results) => {
        if (err) {
            return res.status(500).json({ error: "Database error.", details: err.message });
        }

        const schoolsWithDistance = results.map((school) => {
            const distance = calculateDistance(userLat, userLon, school.latitude, school.longitude);
            return { ...school, distance_km: parseFloat(distance.toFixed(2)) };
        });

        schoolsWithDistance.sort((a, b) => a.distance_km - b.distance_km);

        res.status(200).json({
            total: schoolsWithDistance.length,
            schools: schoolsWithDistance
        });
    });
};
