import {
    API_ADD_REFERENCE, API_SEARCH_REFERENCE
} from './Constants.js';
import axios from 'axios';

const AddReference = async (reference) => {
    try {
        const resp = await axios.post(API_ADD_REFERENCE, reference)
        return resp
    } catch (error) {
        // Handle the error from UI layer
        throw error;
    }
}

const UpdateReference = async (reference) => {
    try {
        const resp = await fetch(API_UPDATE_reference, {
            headers: HTTP_HEADER(),
            method: 'POST',
            body: JSON.stringify(reference),
        })
        return (resp)
    } catch (error) {
        throw error;
    }
}


const SearchReference = async (searchString) => {
    try {

        const resp = await axios.get(API_SEARCH_REFERENCE + '/' + searchString);
   
        return resp
        
    } catch (error) {
        throw error;
    }
}

const AddPvtHealthDetails = async (privateData) => {
    try {
        const resp = await fetch(API_ADD_PATI_PRIVATE_DATA, {
            headers: HTTP_HEADER_FORMDATA(),
            method: 'POST',
            body: privateData,
        })
        
        return resp

    } catch (error) {
        throw error;
    }
}

const GetPvtHealthRecords = async (patientID) => {
    console.log(patientID)
    try {
        const resp = await fetch(API_GET_PATI_PVT_DATA, {
            headers: HTTP_HEADER(),
            method: 'POST',
            body: JSON.stringify({ patientID }),
        })
        return resp
    } catch (error) {
        throw error;
    }
}

const GetPatientDetails = async (patientID) => {
    try {
        const resp = await fetch(API_GET_PATI_DETAILS, {
            headers: HTTP_HEADER(),
            method: 'POST',
            body: JSON.stringify({ patientID }),
        })

        return resp
    } catch (error) {
        return error;
    }
}

const GetPatientList = async () => {
    try {
        const resp = await fetch(API_GET_ALL_PATIENTS, {
            headers: HTTP_HEADER(),
            method: 'GET',
        })

        return resp
    } catch (error) {
        throw error;
    }
}

const DeletePatient = async (patientID) => {
    try {
        const resp = await fetch(API_DELETE_PATI, {
            headers: HTTP_HEADER(),
            method: 'POST',
            body: JSON.stringify({ patientID }),
        })
        const empstr = await resp.text()
        return empstr
    } catch (error) {
        return error;
    }
}

const GetIpfsFile = async (props) => {
    try {
        const resp = await fetch(API_GET_PATI_IPFS_FILE, {
            headers: HTTP_HEADER(),
            method: 'POST',
            body: JSON.stringify({ props }),

        })
        var buffer = await resp.arrayBuffer();
        return buffer;
    } catch (error) {
        return error;
    }
}


export default {
    AddReference,
    UpdateReference,
    SearchReference,
    GetPatientList,
    GetPatientDetails,
    DeletePatient,
    AddPvtHealthDetails,
    GetPvtHealthRecords,
    GetIpfsFile
}