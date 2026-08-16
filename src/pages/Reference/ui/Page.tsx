import { FC, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RefService from "../../../services/referenceApi";

type ReferenceFormElements = HTMLFormControlsCollection & {
    last_name: HTMLInputElement;
    first_name: HTMLInputElement;
    mission: HTMLInputElement;
    entreprise: HTMLInputElement;
    referent: HTMLInputElement;
    poste: HTMLInputElement;
    date: HTMLInputElement;
    email: HTMLInputElement;
    phone: HTMLInputElement;
    appreciation: HTMLTextAreaElement;
};

type ReferenceForm = HTMLFormElement & {
    readonly elements: ReferenceFormElements;
};

const inputClassName =
    "block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none focus:outline-none focus:ring-0 peer disabled:cursor-not-allowed disabled:opacity-60";

const labelClassName =
    "peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6";

const Reference: FC = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleAddReference = async (
        event: FormEvent<ReferenceForm>,
    ) => {
        event.preventDefault();
        setLoading(true);

        const form = event.currentTarget;
        const formElements = form.elements;

        const data = {
            Consultant: {
                prenom: formElements.first_name.value.trim(),
                nom: formElements.last_name.value.trim(),
                mission: formElements.mission.value.trim(),
            },
            Manager: {
                entreprise:
                    formElements.entreprise.value.trim(),
                referent:
                    formElements.referent.value.trim(),
                poste: formElements.poste.value.trim(),
                date: formElements.date.value,
                email: formElements.email.value.trim(),
                phone: formElements.phone.value.trim(),
                appreciation:
                    formElements.appreciation.value.trim(),
            },
        };

        try {
            const response =
                await RefService.AddReference(data);

            if (response.status === 200) {
                toast.success(
                    "La référence a été ajoutée avec succès.",
                );

                form.reset();

                setTimeout(() => {
                    navigate("/login");
                }, 1500);

                return;
            }

            toast.error(
                `L’ajout de la référence a échoué : HTTP ${response.status}.`,
            );
        } catch (error: any) {
            if (error.response?.data) {
                const message =
                    typeof error.response.data === "string"
                        ? error.response.data
                        : error.response.data.message;

                toast.error(
                    message ||
                        "Le serveur a refusé la création de la référence.",
                );
            } else if (error.message) {
                toast.error(error.message);
            } else {
                toast.error(
                    "Une erreur inattendue s’est produite.",
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

            <section className="bg-[#0b3855] min-h-screen w-full">
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-12 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="place-self-center lg:col-span-12 w-full">
                        <h1 className="text-3xl xl:text-4xl font-extrabold text-center text-white mb-6">
                            Formulaire de demande de référence
                        </h1>

                        <form
                            className="max-w-md mx-auto"
                            onSubmit={handleAddReference}
                        >
                            <h2 className="text-2xl xl:text-3xl font-extrabold text-white mb-8">
                                Consultant
                            </h2>

                            <div className="relative z-0 w-full mb-6 group border-b border-white">
                                <input
                                    type="text"
                                    name="last_name"
                                    id="last_name"
                                    autoComplete="family-name"
                                    className={inputClassName}
                                    placeholder=" "
                                    required
                                    disabled={loading}
                                />

                                <label
                                    htmlFor="last_name"
                                    className={labelClassName}
                                >
                                    Nom
                                </label>
                            </div>

                            <div className="relative z-0 w-full mb-6 group border-b border-white">
                                <input
                                    type="text"
                                    name="first_name"
                                    id="first_name"
                                    autoComplete="given-name"
                                    className={inputClassName}
                                    placeholder=" "
                                    required
                                    disabled={loading}
                                />

                                <label
                                    htmlFor="first_name"
                                    className={labelClassName}
                                >
                                    Prénom
                                </label>
                            </div>

                            <div className="relative z-0 w-full mb-10 group border-b border-white">
                                <input
                                    type="text"
                                    name="mission"
                                    id="mission"
                                    className={inputClassName}
                                    placeholder=" "
                                    required
                                    disabled={loading}
                                />

                                <label
                                    htmlFor="mission"
                                    className={labelClassName}
                                >
                                    Mission
                                </label>
                            </div>

                            <h2 className="text-2xl xl:text-3xl font-extrabold text-white mb-8">
                                Manager
                            </h2>

                            <div className="relative z-0 w-full mb-6 group border-b border-white">
                                <input
                                    type="text"
                                    name="entreprise"
                                    id="entreprise"
                                    autoComplete="organization"
                                    className={inputClassName}
                                    placeholder=" "
                                    required
                                    disabled={loading}
                                />

                                <label
                                    htmlFor="entreprise"
                                    className={labelClassName}
                                >
                                    Entreprise
                                </label>
                            </div>

                            <div className="relative z-0 w-full mb-6 group border-b border-white">
                                <input
                                    type="text"
                                    name="referent"
                                    id="referent"
                                    autoComplete="name"
                                    className={inputClassName}
                                    placeholder=" "
                                    required
                                    disabled={loading}
                                />

                                <label
                                    htmlFor="referent"
                                    className={labelClassName}
                                >
                                    Nom du référent
                                </label>
                            </div>

                            <div className="relative z-0 w-full mb-6 group border-b border-white">
                                <input
                                    type="text"
                                    name="poste"
                                    id="poste"
                                    autoComplete="organization-title"
                                    className={inputClassName}
                                    placeholder=" "
                                    required
                                    disabled={loading}
                                />

                                <label
                                    htmlFor="poste"
                                    className={labelClassName}
                                >
                                    Titre du poste
                                </label>
                            </div>

                            <div className="relative z-0 w-full mb-6 group border-b border-white">
                                <input
                                    type="date"
                                    name="date"
                                    id="date"
                                    className={inputClassName}
                                    required
                                    disabled={loading}
                                />

                                <label
                                    htmlFor="date"
                                    className={labelClassName}
                                >
                                    Date
                                </label>
                            </div>

                            <div className="relative z-0 w-full mb-6 group border-b border-white">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    autoComplete="email"
                                    className={inputClassName}
                                    placeholder=" "
                                    required
                                    disabled={loading}
                                />

                                <label
                                    htmlFor="email"
                                    className={labelClassName}
                                >
                                    E-mail
                                </label>
                            </div>

                            <div className="relative z-0 w-full mb-6 group border-b border-white">
                                <input
                                    type="tel"
                                    name="phone"
                                    id="phone"
                                    autoComplete="tel"
                                    className={inputClassName}
                                    placeholder=" "
                                    required
                                    disabled={loading}
                                />

                                <label
                                    htmlFor="phone"
                                    className={labelClassName}
                                >
                                    Téléphone
                                </label>
                            </div>

                            <div className="relative z-0 w-full mb-6 group">
                                <textarea
                                    name="appreciation"
                                    id="appreciation"
                                    rows={4}
                                    className={`${inputClassName} resize-y`}
                                    placeholder=" "
                                    required
                                    disabled={loading}
                                />

                                <label
                                    htmlFor="appreciation"
                                    className={labelClassName}
                                >
                                    Appréciation
                                </label>
                            </div>

                            <div className="flex justify-center my-6">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    aria-busy={loading}
                                    className="mt-5 tracking-wide font-semibold bg-[#6cc4ff] text-[#0b3855] w-96 max-w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none disabled:cursor-not-allowed disabled:opacity-60"
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
                                                Ajout en cours…
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
                                                    d="m4.5 12.75 6 6 9-13.5"
                                                />
                                            </svg>

                                            <span className="ml-3">
                                                Ajouter une nouvelle référence
                                            </span>
                                        </>
                                    )}
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