const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// User signup
exports.signup = async (req, res) => {
    try {
        const { fullName, email, phoneNumber, password, role } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: 'Email already in use' });

        const existingPhone = await User.findOne({ phoneNumber });
        if (existingPhone) return res.status(400).json({ message: 'Phone number already in use' });

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Save user
        const newUser = new User({
            fullName,
            email,
            phoneNumber,
            password: hashedPassword,
            role,
        });

        await newUser.save();
        res.status(201).json({success: true, message: 'User registered successfully' });
    } catch (err) {
        console.error("Signup Error:", err);
        res.status(500).json({ message: "Internal server error" });
    }
};

// User login
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'Invalid email or password' });

        // Check password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) return res.status(400).json({ message: 'Invalid email or password' });

        // Generate JWT
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

        res.status(200).json({ success:true, message: 'Login successful', token });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
