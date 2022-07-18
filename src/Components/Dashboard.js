import React, { useContext } from 'react';
import { MyContaxt } from './Context';

const Dashboard = () => {
    const myValue = useContext(MyContaxt)
    
    const handleSumbit = () => {
        localStorage.removeItem("token");
        window.location.reload();
    }
    return (
        <>
            <div>
                <h1>Welcome to Dashboard</h1>
                <p>{myValue}</p>
            </div>
            <div>
                <button onClick={handleSumbit}>Logout</button>
            </div>
        </>
    );
};

export default Dashboard;