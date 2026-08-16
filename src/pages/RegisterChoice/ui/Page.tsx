import { FC } from "react";
import { Link } from "react-router-dom";

const RegisterChoice: FC = () => {
  return (
    <>
      <section className="bg-[#0b3855] min-h-screen">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="place-self-center lg:col-span-12 w-full">
            <h1 className="text-3xl xl:text-4xl font-extrabold text-center text-white mb-6">
              Créer un compte
            </h1>
            <h2 className="text-2xl xl:text-3xl font-extrabold text-white px-10 mb-6">
              Vous êtes ?
            </h2>
            <div className="grid md:grid-cols-5 gap-10 px-10 my-6">
              <Link to="/register-enterprise">
                <button
                  className="mt-5 tracking-wide font-semibold text-white border-solid border-2 border-white-600 hover:bg-[#6cc4ff] hover:text-[#0b3855] w-44 py-4 rounded-lg transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                  <span className="ml-3">
                    Entreprise / Startup
                  </span>
                </button>
              </Link>
              <Link to="/register-university">
                <button
                  className="mt-5 tracking-wide font-semibold border-solid text-white border-2 border-white-600 hover:bg-[#6cc4ff] hover:text-[#0b3855] w-44 py-4 rounded-lg transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                  <span className="ml-3">
                    Ecole / Université
                  </span>
                </button>
              </Link>
              {/* <Link to="/register-consultant">
                <button
                  className="mt-5 tracking-wide font-semibold border-solid text-white border-2 border-white-600 hover:bg-[#6cc4ff] hover:text-[#0b3855] w-44 py-4 rounded-lg transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                  <span className="ml-3">
                    Consultant
                  </span>
                </button>
              </Link> */}
            </div>

          </div>
          <div className="place-self-center lg:col-span-12 w-full my-6">
            <h1 className="text-2xl xl:text-3xl text-left text-white font-extrabold px-10">
              Vous avez déja un compte ?
            </h1>
            <div className="flex justify-between my-6 px-10">
            <Link to="/login">
              <button
                className="mt-5 tracking-wide font-semibold bg-[#6cc4ff] text-[#0b3855] w-44 py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="8.5" cy="7" r="4" />
                  <path d="M20 8v6M23 11h-6" />
                </svg>
                <span className="ml-3">
                  Se connecter
                </span>
              </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegisterChoice;
