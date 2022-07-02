import React from 'react';

const Dashboard = () => {
    const handleSumbit = () => {
        localStorage.removeItem("token");
        window.location.reload();
    }
    return (
        <>
            <div>
                <h1>Welcome to Dashboard</h1>
            </div>
            <div>
                <button onClick={handleSumbit}>Logout</button>
            </div>
        </>
    );
};

export default Dashboard;