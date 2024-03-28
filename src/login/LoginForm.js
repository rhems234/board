import React, { useState } from 'react';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // 로그인 요청을 보내는 로직을 추가할 수 있습니다.
        console.log("Username:", username);
        console.log("Password:", password);
        // 여기서 실제로 서버로 로그인 요청을 보내는 코드를 작성하면 됩니다.
    };

    return (
        <div>
            <h2>로그인</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">사용자명:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">비밀번호:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <button type="submit">로그인</button>
            </form>
        </div>
    );
};

export default LoginForm;
