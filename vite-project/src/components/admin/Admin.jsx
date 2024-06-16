
import React, { useEffect, useState } from 'react';

import { getMeeting, deleteMeeting, putMeeting, getMessages, getCustemer,  getCustemerID } from "../../../api/returnListCust.api";

export const AdminPage = () => {

  const [meetinglist, setmeetinglist] = useState([]);
  const [flag, setFlag] = useState(false);
  const [flag2, setFlag2] = useState(false);
  const [flag3, setFlag3] = useState(false);
  const [flag4, setFlag4] = useState(false);
  const [messagelist, setMessagelist] = useState([]);
  const [customerList, setCustomerList] = useState([]);
  const [searchPhoneId, setSearchPhoneId] = useState('');
  const [searchedCustomer, setSearchedCustomer] = useState(null);



  useEffect(() => {
    //להצגת כל הפגישות

    const returenMeeting = async () => {
      try {
        const appointments = await getMeeting();
        const { data } = appointments;

        setmeetinglist(data);
        // if(data==null)

      }
      catch {
        console.log("error");
      }

    };

    returenMeeting();

  }, []);
  //למחיקת הפגישה
  const handelDeletMeeting = async (id) => {
    try {
      await deleteMeeting(id);
      const appointments = await getMeeting();
      const { data } = appointments;
      setmeetinglist(data);


    } catch {
      console.log("error");
    }


  };
  //לעדכון פגישה
  const handelPutMeeting = async (id) => {
    try {
      await putMeeting(id, putMeeting);
      const appointments = await getMeeting();
      const { data } = appointments;

      setmeetinglist(data);


    } catch {
      console.log("error");
    }


  };
  //  לקבלת ההודעות

  useEffect(() => {

    const returenMessage = async () => {
      try {
        const messages = await getMessages();
        const { data } = messages;

        setMessagelist(data);
        // if(data==null)

      }
      catch {
        console.log("error");
      }

    };

    returenMessage();

  }, []);
  // קבלת כל הלקוחות

  useEffect(() => {
    const returnCustomer = async () => {
      try {
        const customers = await getCustemer();
        const { data } = customers;
        setCustomerList(data);
      }
      catch {
        console.log("error");
      }
    }
    returnCustomer();

  }, []);
  //קבלת לקוח ע"פ ID
  
  const searchCustomer = async () => {
    try {
      const response = await getCustemerID(searchPhoneId);
      setSearchedCustomer(response.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div>
      <ul>
        {flag && meetinglist
          .map((appointment) => (
            <li>
              <p> {appointment.customereName}</p>
              <p> {appointment.telephone}</p>
              <p> {appointment.note}</p>
              <p> {appointment.dateTime}</p>
              <p> {appointment.serviceType}</p>
              <button onClick={() => handelDeletMeeting(appointment.id)}>למחיקת הפגישה</button>
              <button onClick={() => handelPutMeeting(appointment.id)}>לעדכון הפגישה</button>
            </li>
          ))
        }
      </ul>

      <ul>
        {
          flag2 && messagelist.map((messages) => (
            <li>
              <p>{messages.id}</p>


            </li>
          ))
        }
      </ul>

      <ul>
        {
          flag3 && customerList.map((customers) => (
            <li>
              <p>{customers.name}</p>
              <p>{customers.email}</p>
              <p>{customers.phone}</p>

            </li>
          ))
        }
      </ul>{
    //  flag4  && searchedCustomer(
    //       <div>
    //         <h2>Customer Details</h2>
    //         <p>Name: {searchedCustomer.name}</p>
    //         <p>Email: {searchedCustomer.email}</p>
    //         <p>Phone: {searchedCustomer.phone}</p>
    //       </div>
    //     )

      }



      <button id="ok" onClick={() => setFlag(!flag)}>כל הפגישות</button>
      <br></br>
      <br></br>
      <button id="ok" onClick={() => setFlag2(!flag2)}>כל ההודעות</button>
      <br></br>
      <br></br>
      <button id="ok" onClick={() => setFlag3(!flag3)}>כל הלקוחות</button>
      <br></br>
      <br></br>
      <label>
        Enter phone
        <br />
        <input
          type="text"
          value={searchPhoneId}
          onChange={(event) => setSearchPhoneId(event.target.value)}
        />
      </label>
      <br />
      <br />
      <button onClick={searchCustomer}>Search Customer by Phone</button>

      {searchedCustomer && (
        <div>
          <h2>Customer Details</h2>
          <p>Name: {searchedCustomer.name}</p>
          <p>Email: {searchedCustomer.email}</p>
          <p>Phone: {searchedCustomer.phone}</p>
        </div>
      )}




      {/* <label>הכנס טלפון
        <br></br>
        <input type="text" className="Formbranch" value={searchPhoneId} onChange={(event) => setSearchPhoneId(event.target.value)} />
      </label>

      <br></br>
      <br></br>
      <button id="ok" onClick={() => setFlag4(!flag4)}> לקוח לפי טלפון</button> */}




    </div>
  )

};