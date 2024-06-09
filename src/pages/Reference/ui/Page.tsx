import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSharedData } from '../../../context/StateContext';
import RefService from "../../../services/referenceApi"
import { useNavigate } from 'react-router-dom';

const Reference: FC = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleAddRef = async (e) => {
    e.preventDefault();
    setLoading(true);

    var data = {
      "Consultant": {"prenom": e.target.first_name.value,"nom": e.target.last_name.value,"mission": e.target.mission.value},
      "Manager": {
        "entreprise": e.target.entreprise.value,
        "referent": e.target.referent.value,
        "poste": e.target.poste.value,
        "date": e.target.date.value,
        "email": e.target.email.value,
        "phone": e.target.phone.value,
        "appreciation": e.target.appreciation.value
      }
    }

    try {

      let resp = await RefService.AddReference(data)

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
      <section className="bg-[#0b3855] min-h-screen w-full">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-12 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="place-self-center lg:col-span-12">
            <h1 className="text-3xl xl:text-4xl font-extrabold text-center text-white mb-6">
              Formulaire de demande de référence
            </h1>
            <form className="max-w-md mx-auto" onSubmit={handleAddRef}>
              <h2 className="text-2xl xl:text-3xl font-extrabold text-white px-10 mb-6">
                Consultant
              </h2>
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
                  name="mission"
                  id="mission"
                  className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white-300 appearance-none dark:text-white dark:border-white-600 dark:focus:border-white-500 focus:outline-none focus:ring-0 focus:border-white-600 peer"
                  placeholder=""
                  required
                />
                <label className="peer-focus:font-medium absolute text-sm text-white dark:text-white-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white-600 peer-focus:dark:text-white-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Mission
                </label>
              </div>
              <h2 className="text-2xl xl:text-3xl font-extrabold text-white px-10 mb-6">
                Manager
              </h2>
              <div className="relative z-0 w-full mb-6 group border-b border-white-500">
                <input
                  type="text"
                  name="entreprise"
                  id="entreprise"
                  className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white-300 appearance-none dark:text-white dark:border-white-600 dark:focus:border-white-500 focus:outline-none focus:ring-0 focus:border-white-600 peer"
                  placeholder=""
                  required
                />
                <label className="peer-focus:font-medium absolute text-sm text-white dark:text-white-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white-600 peer-focus:dark:text-white-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Entreprise
                </label>
              </div>
              <div className="relative z-0 w-full mb-6 group border-b border-white-500">
                <input
                  type="text"
                  name="referent"
                  id="referent"
                  className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white-300 appearance-none dark:text-white dark:border-white-600 dark:focus:border-white-500 focus:outline-none focus:ring-0 focus:border-white-600 peer"
                  placeholder=""
                  required
                />
                <label className="peer-focus:font-medium absolute text-sm text-white dark:text-white-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white-600 peer-focus:dark:text-white-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Nom du référent
                </label>
              </div>
              <div className="relative z-0 w-full mb-6 group border-b border-white-500">
                <input
                  type="text"
                  name="poste"
                  id="poste"
                  className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white-300 appearance-none dark:text-white dark:border-white-600 dark:focus:border-white-500 focus:outline-none focus:ring-0 focus:border-white-600 peer"
                  placeholder=""
                  required
                />
                <label className="peer-focus:font-medium absolute text-sm text-white dark:text-white-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white-600 peer-focus:dark:text-white-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Titre du poste
                </label>
              </div>
              <div className="relative z-0 w-full mb-6 group border-b border-white-500">
                <input
                  type="date"
                  name="date"
                  id="date"
                  className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white-300 appearance-none dark:text-white dark:border-white-600 dark:focus:border-white-500 focus:outline-none focus:ring-0 focus:border-white-600 peer"
                  placeholder=""
                  required
                />
                <label className="peer-focus:font-medium absolute text-sm text-white dark:text-white-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white-600 peer-focus:dark:text-white-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Date
                </label>
              </div>
              <div className="relative z-0 w-full mb-6 group border-b border-white-500">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white-300 appearance-none dark:text-white dark:border-white-600 dark:focus:border-white-500 focus:outline-none focus:ring-0 focus:border-white-600 peer"
                  placeholder=" "
                  required
                />
                <label className="peer-focus:font-medium absolute text-sm text-white dark:text-white-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white-600 peer-focus:dark:text-white-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Email
                </label>
              </div>
              <div className="relative z-0 w-full mb-6 group border-b border-white-500">
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white-300 appearance-none dark:text-white dark:border-white-600 dark:focus:border-white-500 focus:outline-none focus:ring-0 focus:border-white-600 peer"
                  placeholder=" "
                  required
                />
                <label className="peer-focus:font-medium absolute text-sm text-white dark:text-white-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white-600 peer-focus:dark:text-white-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Téléphone
                </label>
              </div>
              <div className="relative z-0 w-full mb-6 group border-b border-white-500">
                <input
                  type="text"
                  name="appreciation"
                  id="appreciation"
                  className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white-300 appearance-none dark:text-white dark:border-white-600 dark:focus:border-white-500 focus:outline-none focus:ring-0 focus:border-white-600 peer"
                  placeholder=" "
                  required
                />
                <label className="peer-focus:font-medium absolute text-sm text-white dark:text-white-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white-600 peer-focus:dark:text-white-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Apréciation
                </label>
              </div>
              <div className="flex justify-between my-6">
                <button
                  className="mt-5 tracking-wide font-semibold bg-[#6cc4ff] text-[#0b3855] w-96 py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  <span className="ml-3">
                    Ajouter une nouvelle référence
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reference;
