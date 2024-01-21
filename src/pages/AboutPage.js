import React from 'react';
import profile1 from '../assets/profile_pic.jpg';
import './AboutPage.css';

const AboutPage = () => {
    const employees = [
        { id: 1, name: 'Wyatt Drew', image: profile1 },
        { id: 2, name: 'Wyatt Drew', image: profile1 },
        { id: 3, name: 'Wyatt Drew', image: profile1 },
        { id: 4, name: 'Wyatt Drew', image: profile1 },
        { id: 5, name: 'Wyatt Drew', image: profile1 },
        { id: 6, name: 'Wyatt Drew', image: profile1 },
        { id: 7, name: 'Wyatt Drew', image: profile1 },
        { id: 8, name: 'Wyatt Drew', image: profile1 },
    ];

    return (
        <div className = "AboutPage">
            <h1>Meet Our Team</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', padding: '20px' }}>
                {employees.map(employee => (
                    <div className = "EmployeeCard" key={employee.id} >
                        <img src={employee.image} alt={employee.name} style={{ width: '100%', height: 'auto', borderRadius: '50%' }} />
                        <h3>{employee.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutPage;
