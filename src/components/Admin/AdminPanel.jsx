import React, { useState, useEffect } from "react";
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";
import axios from "axios";

const AdminPanel = () => {
    // State for the inventory table
    const [inventory, setInventory] = useState([]);

    // State for the selected row and pop-up visibility
    const [selectedRow, setSelectedRow] = useState(null);
    const [showCreateForm, setShowCreateForm] = useState(false);

    // State for new row data
    const [newRow, setNewRow] = useState({
        productName: "",
        productSize: "",
        price: "",
        categoryID: "",
        stockQuantity: "",
        productImage: "", // Optional, you may choose to add it later
    });

    useEffect(() => {
        // Fetch inventory data from the backend
        axios.get("http://localhost:8081/api/products")
            .then(response => {
                setInventory(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the products:", error);
            });
    }, []);

    // Open the edit pop-up and load the data for the selected product
    const openPopup = (id) => {
        const productToEdit = inventory.find(item => item.productID === id);
        setNewRow({
            productName: productToEdit.productName,
            productSize: productToEdit.productSize,
            price: productToEdit.price,
            categoryID: productToEdit.categoryID,
            stockQuantity: productToEdit.stockQuantity,
            productImage: productToEdit.productImage,
        });
        setSelectedRow(id);
    };

    // Close the pop-up
    const closePopup = () => {
        setSelectedRow(null);
        setShowCreateForm(false);
        setNewRow({
            productName: "",
            productSize: "",
            price: "",
            categoryID: "",
            stockQuantity: "",
            productImage: "",
        });
    };

    // Handle input change for the form
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewRow({ ...newRow, [name]: value });
    };

    // Add a new row or update an existing one
    const handleCreateOrUpdateRow = () => {
        const newEntry = {
            productName: newRow.productName,
            productSize: newRow.productSize,
            price: parseFloat(newRow.price),
            categoryID: parseInt(newRow.categoryID),
            stockQuantity: parseInt(newRow.stockQuantity),
            productImage: newRow.productImage,
        };

        if (selectedRow) {
            // Update existing product
            axios.put("http://localhost:8081/api/products/${selectedRow}", newEntry)
                .then(() => {
                    axios.get("http://localhost:8081/api/products")
                        .then(response => setInventory(response.data))
                        .catch(error => console.error("Error fetching updated products", error));
                    closePopup();
                })
                .catch(error => console.error("Error updating product", error));
        } else {
            // Add new product
            axios.post("http://localhost:8081/api/products", newEntry)
                .then(() => {
                    axios.get("http://localhost:8081/api/products")
                        .then(response => setInventory(response.data))
                        .catch(error => console.error("Error fetching updated products", error));
                    closePopup();
                })
                .catch(error => console.error("Error creating product", error));
        }
    };

    // Delete a row
    const handleDeleteRow = (selectedRow) => {
        console.log("Deleted Product ID:", selectedRow);
        axios.delete("http://localhost:8081/api/products/${selectedRow}")
            .then(() => {
                const updatedInventory = inventory.filter(item => item.productID !== selectedRow);
                setInventory(updatedInventory);
                closePopup();
            })
            .catch(error => console.error("Error deleting product", error));
    };

    return (
        <div className="admin-panel">
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
                <h1>Inventory Management</h1>

                {/* Button to Add a New Row */}
                <button className="add-btn" onClick={() => setShowCreateForm(true)}>
                    <FaPlus /> Add New Row
                </button>

                <div className="table-container">
                    <table className="inventory-table">
                        <thead>
                            <tr>
                                <th>Product ID</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Product Size</th>
                                <th>Category ID</th>
                                <th>Stock Quantity</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {inventory.map((item) => (
                                <tr key={item.productID}>
                                    <td>{item.productID}</td>
                                    <td>{item.productName}</td>
                                    <td>{item.price ? item.price.toFixed(2) : "N/A"}</td>
                                    <td>{item.productSize}</td>
                                    <td>{item.categoryID}</td>
                                    <td>{item.stockQuantity}</td>
                                    <td>
                                        <button className="edit-btn" onClick={() => openPopup(item.productID)}>
                                            <FaEdit /> Edit
                                        </button>
                                        <button className="delete-btn" style={{marginLeft: "12px"}} onClick={() => handleDeleteRow(item.productID)}>
                                            <FaTrash />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Pop-up for edit or create options */}
            {(showCreateForm || selectedRow) && (
                <div className="popup">
                    <div className="popup-content">
                        <h3>{selectedRow ? "Edit Product" : "Create New Row"}</h3>
                        <form>
                            <div className="form-group">
                                <label>Product Name:</label>
                                <input
                                    type="text"
                                    name="productName"
                                    value={newRow.productName}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Product Size:</label>
                                <input
                                    type="text"
                                    name="productSize"
                                    value={newRow.productSize}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Price:</label>
                                <input
                                    type="number"
                                    step="0.01"
                                    name="price"
                                    value={newRow.price}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Category ID:</label>
                                <input
                                    type="number"
                                    name="categoryID"
                                    value={newRow.categoryID}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Stock Quantity:</label>
                                <input
                                    type="number"
                                    name="stockQuantity"
                                    value={newRow.stockQuantity}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Product Image (Optional):</label>
                                <input
                                    type="text"
                                    name="productImage"
                                    value={newRow.productImage}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </form>
                        <div className="popup-actions">
                            <button className="confirm-btn" onClick={handleCreateOrUpdateRow}>
                                {selectedRow ? "Update" : "Add"} Product
                            </button>
                            <button className="cancel-btn" onClick={closePopup}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminPanel;