

// import { Link } from 'react-router-dom';
// import { Title } from "../pages/Header.component";
import React, { useState } from "react";
import { AddCustemer} from "../../../api/returnListCust.api";

export const Login = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newCustomer = {
            Name: name,
            Email: email,
            Phone: phone
        };
        AddCustemer(newCustomer)
            .then(() => {
                setEmail("");
                setName("");
                setPhone("");
                alert("הלקוח התווסף בהצלחה!");
            })
            .catch((error) => {
                console.error(error.message);
            });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <input type="text" className="Formbranch" value={name} onChange={(e) => setName(e.target.value)} required placeholder="name and last name" />
                </label>
                <label>
                    <input type="email" className="Formbranch" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Email" />
                </label>
                <label>
                    <input type="text" className="Formbranch" value={phone} onChange={(e) => setPhone(e.target.value)} required placeholder="telephone" />
                </label>
                <br></br>
                <br></br>
                <button type="submit" id="ok">לאישור ושליחה</button>
            </form>
        </div>
    );
};
