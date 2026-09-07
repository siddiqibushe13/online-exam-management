const express = require("express");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const app = express();
const PORT = 3000;

const USERS_FILE = path.join(__dirname, "users.json");

// --------------------------------------------------
// MIDDLEWARE
// --------------------------------------------------

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve frontend files
app.use(express.static(path.join(__dirname, "public")));

// --------------------------------------------------
// USERS FILE
// --------------------------------------------------

function getUsers() {
    try {
        if (!fs.existsSync(USERS_FILE)) {
            fs.writeFileSync(USERS_FILE, "[]");
        }

        const data = fs.readFileSync(USERS_FILE, "utf8");

        if (!data.trim()) {
            return [];
        }

        return JSON.parse(data);
    } catch (error) {
        console.error("Error reading users:", error);
        return [];
    }
}

function saveUsers(users) {
    fs.writeFileSync(
        USERS_FILE,
        JSON.stringify(users, null, 2)
    );
}

// --------------------------------------------------
// PASSWORD HASHING
// --------------------------------------------------

function hashPassword(password) {
    const salt = crypto.randomBytes(16).toString("hex");

    const hash = crypto
        .pbkdf2Sync(
            password,
            salt,
            100000,
            64,
            "sha512"
        )
        .toString("hex");

    return `${salt}:${hash}`;
}

function verifyPassword(password, storedPassword) {
    try {
        const parts = storedPassword.split(":");

        if (parts.length !== 2) {
            return false;
        }

        const salt = parts[0];
        const originalHash = parts[1];

        const hash = crypto
            .pbkdf2Sync(
                password,
                salt,
                100000,
                64,
                "sha512"
            )
            .toString("hex");

        return crypto.timingSafeEqual(
            Buffer.from(hash, "hex"),
            Buffer.from(originalHash, "hex")
        );
    } catch (error) {
        return false;
    }
}

// --------------------------------------------------
// VALIDATION
// --------------------------------------------------

function validEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// --------------------------------------------------
// REGISTER API
// POST /api/register
// --------------------------------------------------

app.post("/api/register", (req, res) => {

    const {
        name,
        email,
        password
    } = req.body;

    // Basic validation
    if (!name || !email || !password) {
        return res.status(400).json({
            success: false,
            message: "All fields are required."
        });
    }

    const cleanName = String(name).trim();
    const cleanEmail = String(email).trim().toLowerCase();
    const cleanPassword = String(password);

    if (cleanName.length < 2) {
        return res.status(400).json({
            success: false,
            message: "Name must contain at least 2 characters."
        });
    }

    if (!validEmail(cleanEmail)) {
        return res.status(400).json({
            success: false,
            message: "Please enter a valid email address."
        });
    }

    if (cleanPassword.length < 6) {
        return res.status(400).json({
            success: false,
            message: "Password must contain at least 6 characters."
        });
    }

    const users = getUsers();

    // Check duplicate email
    const existingUser = users.find(
        user => user.email === cleanEmail
    );

    if (existingUser) {
        return res.status(409).json({
            success: false,
            message: "An account with this email already exists."
        });
    }

    // Create user
    const newUser = {
        id: crypto.randomUUID(),
        name: cleanName,
        email: cleanEmail,
        password: hashPassword(cleanPassword),
        role: "student",
        createdAt: new Date().toISOString()
    };

    users.push(newUser);

    saveUsers(users);

    return res.status(201).json({
        success: true,
        message: "Registration successful. You can now login.",
        user: {
            id: newUser.id,
            name: newUser.name,
            email: newUser.email,
            role: newUser.role
        }
    });
});

// --------------------------------------------------
// LOGIN API
// POST /api/login
// --------------------------------------------------

app.post("/api/login", (req, res) => {

    const {
        email,
        password
    } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            success: false,
            message: "Email and password are required."
        });
    }

    const cleanEmail = String(email)
        .trim()
        .toLowerCase();

    const users = getUsers();

    const user = users.find(
        user => user.email === cleanEmail
    );

    if (!user) {
        return res.status(401).json({
            success: false,
            message: "Invalid email or password."
        });
    }

    const passwordCorrect = verifyPassword(
        String(password),
        user.password
    );

    if (!passwordCorrect) {
        return res.status(401).json({
            success: false,
            message: "Invalid email or password."
        });
    }

    return res.json({
        success: true,
        message: "Login successful.",
        user: {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role
        }
    });
});

// --------------------------------------------------
// CHECK EMAIL API
// --------------------------------------------------

app.post("/api/check-email", (req, res) => {

    const { email } = req.body;

    if (!email) {
        return res.status(400).json({
            exists: false,
            message: "Email is required."
        });
    }

    const cleanEmail = String(email)
        .trim()
        .toLowerCase();

    const users = getUsers();

    const exists = users.some(
        user => user.email === cleanEmail
    );

    res.json({
        exists
    });
});

// --------------------------------------------------
// GET USERS API
// For testing/admin purposes
// Password is NEVER returned
// --------------------------------------------------

app.get("/api/users", (req, res) => {

    const users = getUsers();

    const safeUsers = users.map(user => ({
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        createdAt: user.createdAt
    }));

    res.json({
        success: true,
        users: safeUsers
    });
});

// --------------------------------------------------
// API STATUS
// --------------------------------------------------

app.get("/api", (req, res) => {
    res.json({
        success: true,
        message: "Online Exam Management API is running."
    });
});

// --------------------------------------------------
// START SERVER
// --------------------------------------------------

app.listen(PORT, () => {

    console.log("----------------------------------------");
    console.log("Online Exam Management System");
    console.log("----------------------------------------");
    console.log(`Server running at: http://localhost:${PORT}`);
    console.log(`API: http://localhost:${PORT}/api`);
    console.log("----------------------------------------");

});