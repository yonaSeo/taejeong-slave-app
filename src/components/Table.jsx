import React from "react";
import "../css/Table.css";

const Table = ({ columns, data }) => {
    return (
        <table>
            <thead>
                <tr>
                    {columns.map((column) => (
                        <th key={column}>{column}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map(({ name, phone, adress }) => (
                    <tr key={name + phone + adress}>
                        <td>{name}</td>
                        <td>{phone}</td>
                        <td>{adress}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
