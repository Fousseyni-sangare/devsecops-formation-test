import { FC, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReferenceService from "../../../services/referenceApi"
import DiplomeService from "../../../services/diplomeApi"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSharedData } from '../../../context/StateContext';

const Check: FC = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const { setSharedData, } = useSharedData();
    const [ selected, setSelected ] = useState('');
    function handleChange(e) {
        setSelected(e.target.value);
      }
    
      // Log the state after its been updated
      useEffect(() => {
        if (selected) console.log(selected);
      }, [selected]);

    const handleCheck = async (e) => {
        e.preventDefault();
        setLoading(true);

        var data = {
            id: e.target.hash.value
        }

        try {
            let resp;
            if(selected && selected == "ref"){
                resp = await ReferenceService.SearchReference(data.id)
                if (resp.status == 200) {
                    setSharedData(resp.data);
                    navigate("/verifier-success");
                }
            }else{
                resp = await DiplomeService.SearchDiplome(data.id)
                if (resp.status == 200) {
                    setSharedData(resp.data);
                    navigate("/verif-dip-success");
                }
            }            
        } catch (error) {
            if (error.response?.status) {
                toast.error(error.response.data.error.code)
            } else {
                toast.error(error.message);
            }
            navigate("/verifier-failure");
        } finally {
            setLoading(false);
        }
    };
    return (
        <>
            <section>
                <div className="min-h-screen bg-[#0b3855] text-white-900 flex justify-center">
                    <div className="max-w-screen-xl m-0 sm:m-10 shadow sm:rounded-lg flex justify-center flex-1">
                        <div className="xl:w-5/6 p-6 sm:p-12 xs:py-10 md:p-6 w-full items-center">
                            <div className="flex flex-col items-center justify-center h-full">
                                <h1 className="text-4xl xl:text-5xl font-extrabold text-[#6cc4ff]">
                                    Vérifier
                                </h1>
                                <br></br>
                                <div className="choice sm:p-12 xs:py-10 md:p-6 w-1/2">
                                    <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white" onChange={handleChange}>
                                        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                            <div className="flex items-center ps-3">
                                                <input type="radio" value="dip" name="choix" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                    <label className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Diplome</label>
                                            </div>
                                        </li>
                                        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                            <div className="flex items-center ps-3">
                                                <input type="radio" value="ref" name="choix" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                    <label  className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Référence</label>
                                            </div>
                                        </li>

                                    </ul>
                                </div>
                                <p className="text-lg mt-16 text-[#fff]">
                                    Entrer l'URL reçu puis cliquez sur vérifier
                                </p>
                                <div className="justify-center text-center">
                                    {loading &&
                                        <div role="status">
                                            <svg aria-hidden="true" className="inline w-16 h-16 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                            </svg>
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    }
                                </div>
                                <form className="mx-auto px-10 w-full items" onSubmit={handleCheck}>
                                    <input
                                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border-8 border-indigo-600  placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                        type="text" name="hash" placeholder="https://exemple.com/document.pdf" />
                                    <br />

                                    <div className="flex justify-center my-6 px-10">
                                        <button
                                            className="mt-5 tracking-wide font-semibold bg-[#6cc4ff] text-[#0b3855] w-64 py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                            <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                                <circle cx="8.5" cy="7" r="4" />
                                                <path d="M20 8v6M23 11h-6" />
                                            </svg>
                                            <span className="ml-3">
                                                Vérifier
                                            </span>
                                        </button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Check;
