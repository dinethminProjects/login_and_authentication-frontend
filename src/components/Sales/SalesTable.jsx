import React, { useState, useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import axios from "axios";

const SalesTable = () => {
    const [data, setData] = useState([]);
    const [selectedRow, setSelectedRow] = useState(null);
    const [statuses] = useState(["Pending", "Approved", "Delivery", "Rejected"]);

    // Fetch sales data
    useEffect(() => {
        axios
            .get("http://localhost:8081/api/sales")
            .then((response) => {
                const normalizedData = response.data.map((item) => ({
                    salesId: item.salesId,
                    productId: item.productId,
                    quantity: item.quantity,
                    saleDate: item.saleDate,
                    unitPrice: item.unitPrice,
                    totalPrice: item.totalPrice,
                    status: item.status || "Pending", // Add status if not present
                }));
                setData(normalizedData);
            })
            .catch((error) => {
                console.error("Error fetching sales data:", error);
            });
    }, []);

    const handleStatusChange = (salesId, newStatus) => {
        const updatedData = data.map((row) =>
            row.salesId === salesId ? { ...row, status: newStatus } : row
        );
        setData(updatedData);

        // Optionally, send an update to the backend
        axios
            .put(`http://localhost:8081/api/sales/${salesId}/${newStatus}`)
            .then(() => console.log("Status updated successfully"))
            .catch((error) => console.error("Error updating status:", error));
    };

    const openPopup = (id) => {
        setSelectedRow(id);
    };

    const closePopup = () => {
        setSelectedRow(null);
    };

    return (
        <div className="app-container" style={{ display: "flex" }}>
            <div className="sidebar">
                <h3>Admin Panel</h3>
                <ul>
                    <li>Dashboard</li>
                    <li>Inventory</li>
                    <li>Sales</li>
                    <li>Reports</li>
                </ul>
            </div>

            <div className="content" style={{ display: "flex", flexDirection: "column" }}>
                <h1>Sales Table</h1>
                <table className="sales-table">
                    <thead>
                        <tr>
                            <th>Sales ID</th>
                            <th>Product ID</th>
                            <th>Quantity</th>
                            <th>Sale Date</th>
                            <th>Unit Price</th>
                            <th>Total Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row) => (
                            <tr key={row.salesId}>
                                <td>{row.salesId}</td>
                                <td>{row.productId}</td>
                                <td>{row.quantity}</td>
                                <td>{new Date(row.saleDate).toLocaleDateString()}</td>
                                <td>{row.unitPrice}</td>
                                <td>{row.totalPrice}</td>
                                <td>
                                    <select
                                        value={row.status}
                                        onChange={(e) => handleStatusChange(row.salesId, e.target.value)}
                                    >
                                        {statuses.map((status) => (
                                            <option key={status} value={status}>
                                                {status}
                                            </option>
                                        ))}
                                    </select>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {selectedRow && (
                    <div className="popup">
                        <div className="popup-content">
                            <h3>Edit Options</h3>
                            <p>Actions for Sales ID: {selectedRow}</p>
                            <div className="popup-actions">
                                <button className="close-btn" onClick={closePopup}>
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SalesTable;
