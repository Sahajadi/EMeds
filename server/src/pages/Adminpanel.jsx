import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminPanel = () => {
    const [activeTab, setActiveTab] = useState('products');
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({
        name: '',
        price: '',
        description: '',
        image: '',
        countInStock: ''
    });

    // Fetch products
    const fetchProducts = async () => {
        try {
            const { data } = await axios.get('http://localhost:5000/api/products');
            setProducts(data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    // Add new product
    const handleAddProduct = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/products', newProduct);
            fetchProducts();
            setNewProduct({ name: '', price: '', description: '', image: '', countInStock: '' });
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    // Delete product
    const handleDeleteProduct = async (productId) => {
        try {
            await axios.delete(`http://localhost:5000/api/products/${productId}`);
            fetchProducts();
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    // Update the products tab content in the return statement
    {activeTab === 'products' && (
        <div className="products-section">
            <h3>Add New Product</h3>
            <form onSubmit={handleAddProduct}>
                <input
                    type="text"
                    placeholder="Product Name"
                    value={newProduct.name}
                    onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                />
                <input
                    type="number"
                    placeholder="Price"
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                />
                <textarea
                    placeholder="Description"
                    value={newProduct.description}
                    onChange={(e) => setNewProduct({...newProduct, description: e.target.value})}
                />
                <input
                    type="text"
                    placeholder="Image URL"
                    value={newProduct.image}
                    onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
                />
                <input
                    type="number"
                    placeholder="Stock Count"
                    value={newProduct.countInStock}
                    onChange={(e) => setNewProduct({...newProduct, countInStock: e.target.value})}
                />
                <button type="submit">Add Product</button>
            </form>

            <h3>Product List</h3>
            <table className="products-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product._id}>
                            <td>{product.name}</td>
                            <td>${product.price}</td>
                            <td>{product.countInStock}</td>
                            <td>
                                <button onClick={() => handleDeleteProduct(product._id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )}
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({
        name: '',
        email: '',
        password: '',
        role: 'user'
    });

    // Fetch users
    const fetchUsers = async () => {
        try {
            const { data } = await axios.get('http://localhost:5000/api/users');
            setUsers(data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    // Add new user
    const handleAddUser = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/users', newUser);
            fetchUsers();
            setNewUser({ name: '', email: '', password: '', role: 'user' });
        } catch (error) {
            console.error('Error adding user:', error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className="admin-panel">
            <h2>Admin Panel</h2>
            
            <div className="admin-tabs">
                <button onClick={() => setActiveTab('products')}>
                    Manage Products
                </button>
                <button onClick={() => setActiveTab('users')}>
                    Manage Users
                </button>
            </div>

            {activeTab === 'products' && (
                <div>
                    <h3>Manage Inventory</h3>
                    <p>Add/Remove Medicines functionality here</p>
                </div>
            )}

            {activeTab === 'users' && (
                <div className="users-section">
                    <h3>Add New User</h3>
                    <form onSubmit={handleAddUser}>
                        <input
                            type="text"
                            placeholder="Name"
                            value={newUser.name}
                            onChange={(e) => setNewUser({...newUser, name: e.target.value})}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={newUser.email}
                            onChange={(e) => setNewUser({...newUser, email: e.target.value})}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={newUser.password}
                            onChange={(e) => setNewUser({...newUser, password: e.target.value})}
                        />
                        <select
                            value={newUser.role}
                            onChange={(e) => setNewUser({...newUser, role: e.target.value})}
                        >
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
                        <button type="submit">Add User</button>
                    </form>

                    <h3>User List</h3>
                    <table className="users-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user._id}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                    <td>
                                        <button onClick={() => handleDeleteUser(user._id)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default AdminPanel;

// Add this function with the other user-related functions
    const handleDeleteUser = async (userId) => {
        try {
            await axios.delete(`http://localhost:5000/api/users/${userId}`);
            window.location.reload();
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };
