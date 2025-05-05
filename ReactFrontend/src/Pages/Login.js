import { useState, useEffect } from 'react';
import "./PageClasses.css";

export default function LoginTable() {
    const [loginData, setLoginData] = useState([]);

    useEffect(() => {
        fetchLoginData();
    }, []);

    const fetchLoginData = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/login", {
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
            });
            if (response.ok) {
                const data = await response.json();
                setLoginData(data);
            } else {
                console.error("Failed to fetch login data");
            }
        } catch (error) {
            console.error("Error fetching login data:", error);
        }
    };

    return (
        <div className="MiddlePageSetUp">
            <h1 
                className="Title"
                style={{
                    textAlign: 'center',
                    fontFamily: 'Georgia',
                    fontWeight: 'bold',
                    fontSize: '35px',
                    fontStyle: 'italic',
                    marginBottom: '20px',
                }}
            >
                Login History
            </h1>
            <div
                style={{
                    backgroundColor: '#f9f9f9',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    border: '1px solid #ddd',
                    padding: '50px',
                    borderRadius: '12px',
                    maxWidth: '800px',
                    margin: '0 auto',
                    fontFamily: 'San Serif',
                }}
            >
                {/* Table for the login history */}
                <table 
                    style={{
                        width: '100%',
                        borderCollapse: 'collapse',
                        marginBottom: '50px',
                        fontFamily: 'San Serif',
                        fontSize: '20px',
                    }}
                >
                    {/* Column headers for the login history */}
                    <thead>
                        <tr>
                            <th className = "column-header">Login ID</th>
                            <th className = "column-header">User ID</th>
                            <th className = "column-header">Previous Login</th>
                            <th className = "column-header">IP Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* This part needs to be change to match the data from the backend */}
                        {loginData.map((login) => (
                            <tr key={login.loginId}>
                                <td className = "table-cell-style">{login.loginId}</td>
                                <td className = "table-cell-style">{login.userId}</td>
                                <td className = "table-cell-style">
                                    {login.previousLogin ? new Date(login.previousLogin).toLocaleString() : 'N/A'}
                                </td>
                                <td className = "table-cell-style">{login.ipAdd || 'N/A'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}