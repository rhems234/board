import React, { useState } from 'react';
import SignupForm from './SignupForm.js';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showSignupForm, setShowSignupForm] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // 로그인 API 호출

        // 예시로 로그인 성공 시 회원가입 폼을 숨김
        setShowSignupForm(false);
    };

    // 회원가입 버튼 클릭 시 회원가입 폼을 표시하는 함수
    const handleShowSignupForm = () => {
        setShowSignupForm(true);
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            {/* 회원가입 폼 표시 여부에 따라 회원가입 버튼 또는 회원가입 폼을 표시 */}
            {showSignupForm ? (
                <SignupForm />
            ) : (
                <button onClick={handleShowSignupForm}>Signup</button>
            )}
        </div>
    );
};

export default LoginForm;
