import { FC } from "react";
import { Link } from "react-router-dom";
import IMAGES from '@/images/documents-256.png'
import { useSharedData } from '../../../context/StateContext'

const CheckDiplomeConfirm: FC = () => {
    const { sharedData } = useSharedData();
    console.log(sharedData);

    
  const handleSubmission = async () => {
    try {
      
      let cid = sharedData.cid;
      console.log(cid);
    } catch (error) {
      console.log(error);
    }
  };
    return (
        <>
            <section>
                <div className="min-h-screen bg-[#0b3855] text-white-900 flex justify-center">
                    <div className="max-w-screen-xl m-0 sm:m-10 shadow sm:rounded-lg flex justify-center flex-1">
                        <div className="xl:w-5/6 p-6 sm:p-12 xs:py-10 md:p-6 text-[#fff]">
                            <div className="mt-12 flex flex-col items-center">
                                <div>
                                    <img src={IMAGES} alt='first image' className="w-32 mx-auto" />
                                </div>
                                <div className="mt-12 flex flex-col items-center">
                                    <h1 className="text-2xl xl:text-3xl font-extrabold text-[#6cc4ff]">
                                        Vérification réussie !
                                    </h1>
                                    <br /><br />
                                    <p className="text-xl xl:text-2xl text-left font-bold">
                                        L'URL correspond bien à une diplôme authentique.
                                    </p>
                                    <br />
                                    <div className="grid gap-x-8 gap-y-4 grid-cols-3">
                                        <div>
                                        <Link target={"_blank"} to={`https://azure-naval-rooster-743.mypinata.cloud/ipfs/${sharedData.cid}`}>
                                            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                </svg>
                                                <span>Visualiser</span>
                                            </button>
                                        </Link>
                                        </div>
                                        <div>
                                        <Link target={"_blank"} to="https://azure-naval-rooster-743.mypinata.cloud/ipfs/QmdpPEYN2deb1Bx12Uv6MJUqt6mXmsd9zoYpZJ8B47sze7" download>
                                            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                                                </svg>
                                                <span>Envoyer</span>
                                            </button>
                                            </Link>
                                        </div>
                                        <div>
                                            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                                                <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                                                <span>Télécharger</span>
                                            </button>
                                        </div>
                                    </div>
                                    <Link to="/verifier">
                                        <button
                                            className="mt-5 tracking-wide font-semibold bg-[#6cc4ff] text-[#0b3855] w-96 py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                            <span className="ml-3">
                                                Effectuer une autre vérification
                                            </span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CheckDiplomeConfirm;
