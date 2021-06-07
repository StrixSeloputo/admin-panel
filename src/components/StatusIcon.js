import React from "react";
import './StatusIcon.css';

function StatusIcon(props) {
    const {color} = props;
    switch (color.toUpperCase()) {
        case 'RED':
            return (
                <div className="status__icon" style={{background: '#F53152'}}/>
            )
        case 'ORANGE':
            return (
                <div className="status__icon" style={{background: '#FF8C56'}}/>
            )
        case 'GREEN':
            return (
                <div className="status__icon" style={{background: '#0FB864'}}/>
            )
        case 'BLUE':
            return (
                <div className="status__icon" style={{background: '#459DF5'}}/>
            )

        default:
            return (
                <div className="status__icon" style={{background: '#000000'}}/>
            )
    }
}

export default StatusIcon;