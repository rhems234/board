import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginForm.css'; // 새로 생성할 CSS 파일

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });
            if (response.ok) {
                const { token } = await response.json();
                localStorage.setItem('token', token); // 토큰을 로컬 스토리지에 저장
                navigate('/'); // 로그인 성공 후 이동할 페이지
            } else {
                console.error('로그인 실패');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="login-container">
            <h2 className="login-heading">Login</h2>
            <form onSubmit={handleSubmit} className="login-form">
                <div className="form-group">
                    <label htmlFor="username" className="form-label">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-input"
                    />
                </div>
                <button type="submit" className="login-button">Login</button>
            </form>
            <Link to="/signup" className="signup-link">Signup</Link>
        </div>
    );
};

export default LoginForm;
