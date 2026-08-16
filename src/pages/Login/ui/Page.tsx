import { FC, FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSharedData } from "../../../context/StateContext";
import UserService from "../../../services/userApi";

type LoginFormElements = HTMLFormControlsCollection & {
    userid: HTMLInputElement;
    password: HTMLInputElement;
    org: HTMLInputElement;
};

type LoginForm = HTMLFormElement & {
    readonly elements: LoginFormElements;
};

const Login: FC = () => {
    const navigate = useNavigate();
    const { setIsLoggedIn, setProfil } = useSharedData();
    const [loading, setLoading] = useState(false);

    const handleLogin = async (
        event: FormEvent<LoginForm>,
    ) => {
        event.preventDefault();
        setLoading(true);

        const form = event.currentTarget;
        const formElements = form.elements;

        const data = {
            username: formElements.userid.value.trim(),
            password: formElements.password.value,
            organization: formElements.org.value.trim(),
        };

        try {
            const response = await UserService.Login(data);

            if (!response?.token) {
                setIsLoggedIn(false);
                toast.error(
                    "L’authentification a échoué : aucun jeton n’a été retourné.",
                );
                return;
            }

            const loginUser = UserService.GetLoginUser();
            const profile =
                loginUser?.user?.additionalProp1?.profil;

            setIsLoggedIn(true);

            if (profile) {
                setProfil(profile);
            }

            toast.success("Authentification réussie.");

            setTimeout(() => {
                navigate("/");
            }, 2000);
        } catch (error: any) {
            setIsLoggedIn(false);

            if (error.response?.status === 401) {
                toast.error(
                    "Identifiant ou mot de passe incorrect.",
                );
            } else if (error.response?.status === 403) {
                toast.error(
                    "Vous n’êtes pas autorisé à accéder à cette organisation.",
                );
            } else if (error.response?.data?.message) {
                toast.error(error.response.data.message);
            } else if (error.message) {
                toast.error(error.message);
            } else {
                toast.error(
                    "Une erreur inattendue s’est produite pendant la connexion.",
                );
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

            <section className="bg-[#0b3855] min-h-screen">
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-6">
                    <div className="place-self-center lg:col-span-6">
                        <h1 className="text-3xl xl:text-4xl font-extrabold text-center text-white mb-6">
                            Se connecter
                        </h1>

                        <h2 className="text-2xl xl:text-3xl font-extrabold text-white px-10 mb-6">
                            Veuillez saisir vos identifiants
                        </h2>

                        <form
                            className="mx-auto px-10"
                            onSubmit={handleLogin}
                        >
                            <div className="relative z-0 w-full mb-6 group border-b border-white">
                                <input
                                    type="text"
                                    name="userid"
                                    id="userid"
                                    autoComplete="username"
                                    className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none focus:outline-none focus:ring-0 peer"
                                    placeholder=" "
                                    required
                                    disabled={loading}
                                />

                                <label
                                    htmlFor="userid"
                                    className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Identifiant
                                </label>
                            </div>

                            <div className="relative z-0 w-full mb-6 group border-b border-white">
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    autoComplete="current-password"
                                    className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none focus:outline-none focus:ring-0 peer"
                                    placeholder=" "
                                    required
                                    disabled={loading}
                                />

                                <label
                                    htmlFor="password"
                                    className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Mot de passe
                                </label>
                            </div>

                            <div className="relative z-0 w-full mb-6 group border-b border-white">
                                <input
                                    type="text"
                                    name="org"
                                    id="org"
                                    autoComplete="organization"
                                    className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none focus:outline-none focus:ring-0 peer"
                                    placeholder=" "
                                    required
                                    disabled={loading}
                                />

                                <label
                                    htmlFor="org"
                                    className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Organisation
                                </label>
                            </div>

                            <div className="flex justify-between my-6">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    aria-busy={loading}
                                    className="mt-5 tracking-wide font-semibold bg-[#6cc4ff] text-[#0b3855] w-52 py-4 rounded-lg flex items-center justify-center focus:shadow-outline focus:outline-none disabled:cursor-not-allowed disabled:opacity-60"
                                >
                                    {loading ? (
                                        <>
                                            <svg
                                                aria-hidden="true"
                                                className="w-5 h-5 animate-spin"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                            >
                                                <circle
                                                    className="opacity-25"
                                                    cx="12"
                                                    cy="12"
                                                    r="10"
                                                    stroke="currentColor"
                                                    strokeWidth="4"
                                                />

                                                <path
                                                    className="opacity-75"
                                                    fill="currentColor"
                                                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4Z"
                                                />
                                            </svg>

                                            <span className="ml-3">
                                                Connexion…
                                            </span>
                                        </>
                                    ) : (
                                        <>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="w-6 h-6"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                                                />
                                            </svg>

                                            <span className="ml-3">
                                                Se connecter
                                            </span>
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="place-self-center lg:col-span-12 w-full">
                        <h2 className="text-2xl xl:text-3xl text-center text-white font-extrabold px-10">
                            Vous n’avez pas de compte ?
                        </h2>

                        <div className="flex justify-center my-6 px-10">
                            <Link
                                to="/register-choice"
                                className="mt-5 tracking-wide font-semibold bg-[#6cc4ff] text-[#0b3855] w-52 py-4 rounded-lg flex items-center justify-center focus:shadow-outline focus:outline-none"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    aria-hidden="true"
                                >
                                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                    <circle cx="8.5" cy="7" r="4" />
                                    <path d="M20 8v6M23 11h-6" />
                                </svg>

                                <span className="ml-3">
                                    S’enregistrer
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;