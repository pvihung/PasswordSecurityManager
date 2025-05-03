import { useState, useEffect } from 'react';
import "./SecondPage.css";

export default function LoginTable() {
    const [loginData, setLoginData] = useState([]);

    useEffect(() => {
        fetchLoginData();
    }, []);

    // Set up style for the Columns headers
    const ColumnHeader = {
        backgroundColor: '#00b2f4',
        color: 'black',
        padding: '20px',
        textAlign: 'left',
        fontFamily: 'Georgia',
        borderRight: '1.5px solid #fff',
        borderBottom: '2px solid #ddd',
    };

    // Set up style for the Table cells
    const tableCellStyle = {
        padding: '12px',
        borderRight : '1px solid #ddd', // Add right border to each cell

    };

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
                {/* Table header for the login history */}
                <table 
                    style={{
                        width: '100%',
                        borderCollapse: 'collapse',
                        marginBottom: '50px',
                        fontFamily: 'San Serif',
                        fontSize: '20px',
                    }}
                >
                    {/* Table header for the login history */}
                    <thead>
                        <tr>
                            <th style={ColumnHeader}>Login ID</th>
                            <th style={ColumnHeader}>User ID</th>
                            <th style={ColumnHeader}>Previous Login</th>
                            <th style={ColumnHeader}>IP Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* This part needs to be change to match the data from the backend */}
                        {loginData.map((login) => (
                            <tr key={login.loginId}>
                                <td style={tableCellStyle}>{login.loginId}</td>
                                <td style={tableCellStyle}>{login.userId}</td>
                                <td style={tableCellStyle}>
                                    {login.previousLogin ? new Date(login.previousLogin).toLocaleString() : 'N/A'}
                                </td>
                                <td style={tableCellStyle}>{login.ipAdd || 'N/A'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}