import { FC } from "react";
import IMAGES from '@/images/envelope-256.png'
import { Link } from "react-router-dom";
const CheckFailure: FC = () => {
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
                        <h1 className="text-4xl xl:text-5xl font-extrabold text-[#6cc4ff]">
                            Vérification échoué !
                        </h1>
                        <br /><br />
                        <p className="text-xl xl:text-2xl text-left font-bold">
                            La vérification de l'URL a échoué, nous vous invitons à réessayer en vous assurant que l'URL correspond exactement à la référence numérisée.
                            Vous pouvez aussi contacter directement l'entreprise ou contacter notre service d'assistance. 
                        </p>
                        <br />
                        <Link to="/verifier">
                        <button
                            className="mt-5 tracking-wide font-semibold bg-[#6cc4ff] text-[#0b3855] w-96 py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                            <span className="ml-3">
                                réessayer
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

export default CheckFailure;
