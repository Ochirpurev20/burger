import React from 'react';
import './style.css';

import Toolbar from '../../components/Toolbar';
import BurgerBuilder from '../BurgerPage';

function App() {
    return (
        <div>
            <Toolbar />
            <main className="content">
                <BurgerBuilder />
            </main>
        </div>
    );
}

export default App;
