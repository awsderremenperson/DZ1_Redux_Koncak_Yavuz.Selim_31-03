// Layout.js
import React from 'react';
import { Link } from 'react-router-dom';

function Layout({ children }) {
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/create">Create Post</Link></li>
                    </ul>
                </nav>
            </header>
            <main>{children}</main>
            <footer>This is the footer</footer>
        </div>
    );
}

export default Layout;
