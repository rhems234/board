import React, { useState } from 'react';

const SignupForm = () => {
    const [username, setUsername] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordMatchError, setPasswordMatchError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // 비밀번호와 비밀번호 확인이 일치하는지 확인
        if (password !== confirmPassword) {
            setPasswordMatchError(true);
            return;
        }

        // 회원가입 정보를 서버로 전송
        try {
            const response = await fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, phoneNumber, password })
            });
            const data = await response.text();
            alert(data); // 서버로부터의 응답을 사용자에게 보여줌
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        // 비밀번호 입력이 변경될 때마다 에러 상태 초기화
        setPasswordMatchError(false);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        // 비밀번호 확인 입력이 변경될 때마다 에러 상태 초기화
        setPasswordMatchError(false);
    };

    return (
        <div>
            <h2>Signup</h2>
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
                    <label>Phone Number:</label>
                    <input
                        type="text"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                    />
                </div>
                {passwordMatchError && <p style={{ color: 'red' }}>Passwords do not match</p>}
                <button type="submit">Signup</button>
            </form>
        </div>
    );
};

export default SignupForm;
