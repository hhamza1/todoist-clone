import React from 'react';
import {FaHatWizard} from "react-icons/fa";

export const Header = () => {
    return (
        <header className="header" data-testid="header">
            <nav>
                <div className="logo">
                    <img src="/images/logo.png" alt="Todoist-clone" />
                </div>
                <div class="settings">
                    <ul>
                        <li>+</li>
                        <li><FaHatWizard /></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}