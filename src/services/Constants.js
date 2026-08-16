export const DEFAULT_ORG = 'kibarocertMSP';
export const API_END_POINT = 'http://localhost:3001'
export const API_LOGIN = API_END_POINT + '/signin';
export const API_REGISTER = API_END_POINT + '/signup';
export const API_AUTHENTICATE = API_END_POINT + '/user/authenticate';

export const API_ADD_REFERENCE = API_END_POINT + '/hlf-reference';
export const API_UPDATE_REFERENCE = API_END_POINT + '/reference/update';
export const API_SEARCH_REFERENCE = API_END_POINT + '/references';
export const API_GET_ALL_REFERENCES = API_END_POINT + '/reference/';
export const API_GET_REF_DETAILS = API_END_POINT + '/reference/getone';
export const API_DELETE_REF = API_END_POINT + '/reference/deleterecord';
export const API_ADD_REF_PRIVATE_DATA = API_END_POINT + '/reference/addprivate';
export const API_GET_REF_PVT_DATA = API_END_POINT + '/reference/getpvtdata';

export const API_ADD_DIPLOME = API_END_POINT + '/diplomes';
export const API_GET_ALL_DIPLOMES = API_END_POINT + '/diplome/getall';
export const API_GET_DIPLOME_DETAILS = API_END_POINT + '/hlf-diplomes';
export const API_DELETE_DIPLOME = API_END_POINT + '/diplome/deleterecord';
export const API_ADD_PRIVATE_DATA = API_END_POINT + '/diplome/addprivate';
export const API_GET_DIPLOME_PVT_DATA = API_END_POINT + '/diplome/getpvtdata';
export const API_GET_DIPLOME_IPFS_FILE = API_END_POINT + '/diplome/getipfsfile';

export const CURRENT_USER = () => JSON.parse(localStorage.getItem('user')) || {};
export const HTTP_HEADER = () => new Headers({ 'Content-type': 'application/json', 'cache-control': 'no-cache', "Access-Control-Allow-Origin": "*","Access-Control-Allow-Credentials": "true",
'Authorization': CURRENT_USER().jwt, org:CURRENT_USER().org, userID:CURRENT_USER().username});
// export const HTTP_HEADER_FORMDATA = () => new Headers({'cache-control': 'no-cache', 'Authorization': CURRENT_USER().jwt, org:CURRENT_USER().org, userID:CURRENT_USER().username});
