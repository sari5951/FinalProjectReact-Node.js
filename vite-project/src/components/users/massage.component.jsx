

import React, { useState } from "react";
import {addMessage}   from "../../../api/returnListCust.api";


export const SendMassage = () => {
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        let Message = {
            Message: message
        };

        try {
            await addMessage(Message);
            alert("ההודעה נשלחה למנהל בהצלחה!");
            setMessage('');
        } catch (error) {
            console.log(error);
            alert("ההודעה נכשלה");
        }
    };

    return (
        <div>
            <br />
            <form onSubmit={handleSubmit}>
                <label>הודעה למנהל<br />
                    <textarea className="Formbranch" value={message} onChange={(event) => setMessage(event.target.value)} required />
                    </label>
                    <br></br>
                    <button type="submit" id="ok">לשליחה</button>
            </form>
          
              
        </div>
    );
};



export default SendMassage;
