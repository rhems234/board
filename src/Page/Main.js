import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
    return (
        <div>
            <header>
                <h1>Welcome to My Website</h1>
                <nav>
                    <ul>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </nav>
            </header>
            <main>
                <p>This is the main content of the page.</p>
            </main>
            <footer>
                <p>Footer content goes here.</p>
            </footer>
        </div>
    );
};

export default MainPage;
