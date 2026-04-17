-- Run this in MySQL to set up the database

CREATE DATABASE IF NOT EXISTS schoolDB;

USE schoolDB;

CREATE TABLE IF NOT EXISTS schools (
    id          INT AUTO_INCREMENT PRIMARY KEY,
    name        VARCHAR(255)    NOT NULL,
    address     VARCHAR(255)    NOT NULL,
    latitude    FLOAT           NOT NULL,
    longitude   FLOAT           NOT NULL,
    created_at  TIMESTAMP       DEFAULT CURRENT_TIMESTAMP
);

-- Optional: seed data for testing
INSERT INTO schools (name, address, latitude, longitude) VALUES
('Delhi Public School', 'Sector 45, Noida, UP', 28.5706, 77.3219),
('Ryan International School', 'Pune, Maharashtra', 18.5204, 73.8567),
('Kendriya Vidyalaya', 'Baner, Pune, Maharashtra', 18.5590, 73.7868),
('Vibgyor High', 'Kalyani Nagar, Pune', 18.5462, 73.9008),
('The Orchid School', 'Baner, Pune', 18.5610, 73.7823);
