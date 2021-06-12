import React, { useEffect, useState } from 'react';

function UserMessage() {
    const [user, setUser] = useState({ name: '' });

    const getUser = async () => {
        const res = await fetch('http://localhost:8080/user');
        const json = await res.json();

        setUser(json.user);
    };

    useEffect(() => {
        getUser();
    }, []);

    return <div>Hello {user.name}</div>;
}

export default UserMessage;
