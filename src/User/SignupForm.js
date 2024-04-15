import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignupForm.css'; // 스타일 파일 임포트

const SignupForm = () => {
    const [username, setUsername] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordMatchError, setPasswordMatchError] = useState(false);
    const navigate = useNavigate(); // useNavigate 훅 사용

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setPasswordMatchError(true);
            return;
        }

        try {
            const response = await fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, phoneNumber, password, confirmPassword })
            });

            if (response.ok) {
                // 회원가입 성공 시 로그인 페이지로 이동
                navigate('/login');
            } else {
                console.error('회원가입 실패');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setPasswordMatchError(false);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        setPasswordMatchError(false);
    };

    return (
        <div className="signup-container">
            <h2 className="signup-heading">Signup</h2>
            <form onSubmit={handleSubmit} className="signup-form">
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <input
                        type="text"
                        id="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        className="form-input"
                    />
                </div>
                {passwordMatchError && <p className="error-message">Passwords do not match</p>}
                <button type="submit" className="signup-button">Signup</button>
            </form>
        </div>
    );
};

export default SignupForm;
