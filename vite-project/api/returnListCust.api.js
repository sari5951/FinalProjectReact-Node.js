import axios from 'axios';


export const getCustemers = () => {
    return axios.get('http://localhost:3000/listCustemers');

}
// export const deletecustemers = (id) => {
//     return axios.delete(`http://localhost:3000/listCustemers/${id}`);

// }
export const postcustemers = () => {
    return axios.post('http://localhost:3000/listCustemers');


}
// export const putcustemers = (id) => {
//     return axios.put(`http://localhost:3000/listCustemers/${id}`);

// }

export const AddOrdert = (order) => {
    return axios.post('http://localhost:3000/order/AddOrder', order);


}
// export const getorder = () => {
//     return axios.get('http://localhost:3000/order/AddOrder', order);

// }




export const AddMeeting = (meeting) => {
    return axios.post('http://localhost:3000/meeting/addMeeting',meeting );
};
export const getMeeting = () => {
    return axios.get('http://localhost:3000/meeting');
}
export const deleteMeeting = (id) => {
    return axios.delete(`http://localhost:3000/meeting/${id}`);
}

export const putMeeting = (id,meeting) => {
    return axios.put(`http://localhost:3000/meeting/${id}`,{meeting:{meeting}});
}




// בדיקת שם משתמש וסיסמא של המנהל
export const checkAdmin = (admin) => {

    return axios.post('http://localhost:3000/user/getMyUser', admin)
}
// ממשק הודעות
export const addMessage = (message) => {
    return axios.post('http://localhost:3000/message', message);
};
export const getMessages = () => {
    return axios.get('http://localhost:3000/message');
};

// ממשק משתמשים
export const AddCustemer=(custemer)=>{
    return axios.post('http://localhost:3000/customer',custemer);
};

export const getCustemer=()=>{
    return axios.get('http://localhost:3000/customer');
};
export const getCustemerID=(id)=>{
    return axios.get(`http://localhost:3000/customer${id}`);
};