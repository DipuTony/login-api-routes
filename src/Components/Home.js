import React, { useContext } from 'react';
import { MyContaxt } from './Context';


const Home = () => {

    const myValue = useContext(MyContaxt)

    const handleSubmit = () =>{
        myValue.changeLoginStatus(1)
    }

    return (
        <div>
            <h1>This is Home</h1>
            {myValue.isLogin}

            <button onClick={handleSubmit}>Chnage</button>
        </div>
    );
};

export default Home;