import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import Axios library
import '../styles/SignUp.css';

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Make API call to register user
            const response = await axios.post('/api/signup', formData);
            console.log("Response:", response.data);

            // Clear the form after successful submission
            setFormData({
                name: "",
                email: "",
                password: ""
            });

        } catch (error) {
            console.error("Error submitting form:", error);
            // Handle error, if any
        }
    };

    return (
        <div className="container">
            <div className="form-container">
                <h4>SignUp</h4>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" value={formData.password} onChange={handleChange} required />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="custom-button">Register</Button>
                    <p>Already have an account?<Link to='/login' className="login-link">Login</Link></p>
                </Form>
            </div>
        </div>
    );
};

export default SignUp;
