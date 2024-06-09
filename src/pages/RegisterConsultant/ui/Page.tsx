import { FC, useState } from "react";
import { Link } from "react-router-dom";
import UserService from "../../../services/userApi"
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterConsultant: FC = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);

    var data = {
      "realm": "string",
      "username": e.target.user_id.value,
      "email": e.target.email.value,
      "emailVerified": true,
      "verificationToken": "string",
      "password": e.target.password.value,
      "additionalProp1":
        { "firstname": e.target.first_name.value, "lastname": e.target.last_name.value, "phone": "0542158456", "organization": "kibarocertMSP", "profil": "CS" }
    }

    try {

      let resp = await UserService.CreateNewUser(data)

      if (resp.status === 200) {
        navigate("/login");
      }

    } catch (error) {
      if (error.response?.status) {
        toast.error(error.response.data)
      } else {
        toast.error(error.message);
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div>
        <ToastContainer />
      </div>
      <section className="bg-[#0b3855] min-h-screen">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="place-self-center lg:col-span-12">
            <h1 className="text-3xl xl:text-4xl font-extrabold text-center text-white mb-6">
              Créer un compte
            </h1>
            <h2 className="text-2xl xl:text-3xl font-extrabold text-white px-10 mb-6">
              Formulaire d'inscription consultant
            </h2>
            <form className="mx-auto px-10" onSubmit={handleSignup}>
              <div className="relative z-0 w-full mb-6 group border-b border-white-500">
                <input
                  type="text"
                  name="user_id"
                  id="user_id"
                  className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white-300 appearance-none dark:text-white dark:border-white-600 dark:focus:border-white-500 focus:outline-none focus:ring-0 focus:border-white-600 peer"
                  placeholder=""
                  required
                />
                <label className="peer-focus:font-medium absolute text-sm text-white dark:text-white-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white-600 peer-focus:dark:text-white-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Identifiant
                </label>
              </div>
              <div className="relative z-0 w-full mb-6 group border-b border-white-500">
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white-300 appearance-none dark:text-white dark:border-white-600 dark:focus:border-white-500 focus:outline-none focus:ring-0 focus:border-white-600 peer"
                  placeholder=""
                  required
                />
                <label className="peer-focus:font-medium absolute text-sm text-white dark:text-white-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white-600 peer-focus:dark:text-white-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Nom
                </label>
              </div>
              <div className="relative z-0 w-full mb-6 group border-b border-white-500">
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white-300 appearance-none dark:text-white dark:border-white-600 dark:focus:border-white-500 focus:outline-none focus:ring-0 focus:border-white-600 peer"
                  placeholder=""
                  required
                />
                <label className="peer-focus:font-medium absolute text-sm text-white dark:text-white-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white-600 peer-focus:dark:text-white-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Prénom
                </label>
              </div>
              <div className="relative z-0 w-full mb-6 group border-b border-white-500">
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white-300 appearance-none dark:text-white dark:border-white-600 dark:focus:border-white-500 focus:outline-none focus:ring-0 focus:border-white-600 peer"
                  placeholder=""
                  required
                />
                <label className="peer-focus:font-medium absolute text-sm text-white dark:text-white-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white-600 peer-focus:dark:text-white-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Adresse email
                </label>
              </div>
              <div className="relative z-0 w-full mb-6 group border-b border-white-500">
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white-300 appearance-none dark:text-white dark:border-white-600 dark:focus:border-white-500 focus:outline-none focus:ring-0 focus:border-white-600 peer"
                  placeholder=" "
                  required
                />
                <label className="peer-focus:font-medium absolute text-sm text-white dark:text-white-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white-600 peer-focus:dark:text-white-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Mot de passe
                </label>
              </div>
              <div className="relative z-0 w-full mb-6 group border-b border-white-500">
                <input
                  type="password"
                  name="passwordConfirm"
                  id="passwordConfirm"
                  className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white-300 appearance-none dark:text-white dark:border-white-600 dark:focus:border-white-500 focus:outline-none focus:ring-0 focus:border-white-600 peer"
                  placeholder=" "
                  required
                />
                <label className="peer-focus:font-medium absolute text-sm text-white dark:text-white-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white-600 peer-focus:dark:text-white-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Confirmation mot de passe
                </label>
              </div>
              <div className="flex justify-between my-6">
                <button
                  className="mt-5 tracking-wide font-semibold bg-[#6cc4ff] text-[#0b3855] w-44 py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  <span className="ml-3">
                    Valider
                  </span>
                </button>
              </div>
            </form>
          </div>
          <div className="place-self-center lg:col-span-12 w-full">
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

export default RegisterConsultant;
