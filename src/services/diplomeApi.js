import { API_ADD_DIPLOME, API_GET_DIPLOME_DETAILS } from './Constants.js';
import axios from 'axios';
const AddNewDiplome = async (diplome) => {
    try {
        const resp = await axios.post(API_ADD_DIPLOME, diplome)
        return resp
    } catch (error) {
        // Handle the error from UI layer
        throw error;
    }
}

const SearchDiplome = async (searchString) => {
    try {

        const resp = await axios.get(API_GET_DIPLOME_DETAILS + '/' + searchString);
   
        return resp
        
    } catch (error) {
        throw error;
    }
}

const GetEmployeeList = async () => {
    try {
        const resp = await fetch(API_GET_ALL_EMPLOYEES, {
            headers: HTTP_HEADER(),
            method: 'GET',
        })
        const empstr = await resp.text()
        return empstr
    } catch (error) {
        return error;
    }
}

const GetEmpDetails = async (empID) => {
    try {
        const resp = await fetch(API_GET_EMP_DETAILS, {
            headers: HTTP_HEADER(),
            method: 'POST',
            body:JSON.stringify({empID}),
        })
        const empstr = await resp.text()
        return empstr
    } catch (error) {
        return error;
    }
}

const DeleteEmployee = async (empID) => {
    try {
        const resp = await fetch(API_DELETE_EMP, {
            headers: HTTP_HEADER(),
            method: 'POST',
            body:JSON.stringify({empID}),
        })
        const empstr = await resp.text()
        return empstr
    } catch (error) {
        return error;
    }
}

const AddPrivateDetails = async (privateData) => {
    try {
        // privateData.isPrivate = true;
        const resp = await fetch(API_ADD_PRIVATE_DATA, {
            headers: HTTP_HEADER_FORMDATA(),
            method: 'POST',
            body: privateData,
        })
        const empstr = await resp.text()
        return empstr
    } catch (error) {
        return error;
    }
}

const GetEmpPvtRecords = async (empID) => {
    try {
        const resp = await fetch(API_GET_EMP_PVT_DATA, {
            headers: HTTP_HEADER(),
            method: 'POST',
            body:JSON.stringify({empID}),
        })
        const empstr = await resp.text()
        return empstr
    } catch (error) {
        return error;
    }
}

const GetIpfsFile = async (props) => {
    try {
        const resp = await fetch(API_GET_EMP_IPFS_FILE, {
            headers: HTTP_HEADER(),
            method: 'POST',
            body:JSON.stringify({props}),
       
        })
        var buffer = await resp.arrayBuffer();
        return buffer;
    } catch (error) {
        return error;
    }
}

 // Generate Unique id for Patient record
 const generateUniqueId = async (fName, lName) => {
    // Remove any spaces from the first and last name, and concatenate them with the DOB
    const nameAndDob = formData.fName.replace(/\s/g, '') + formData.lName.replace(/\s/g, '') + formData.dob;
    const hash = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(nameAndDob));

    // Convert the hash to a hexadecimal string and return the first 16 characters as the unique ID
    return Array.from(new Uint8Array(hash))
      .map(b => b.toString(16).padStart(2, "0"))
      .slice(0, 16)
      .join("");
  }

export default { 
    AddNewDiplome,
    GetEmployeeList,
    GetEmpDetails,
    DeleteEmployee,
    AddPrivateDetails,
    GetEmpPvtRecords,
    GetIpfsFile,
    generateUniqueId,
    SearchDiplome
 }