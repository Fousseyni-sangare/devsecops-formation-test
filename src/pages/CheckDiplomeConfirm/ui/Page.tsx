import { FC } from "react";
import { Link } from "react-router-dom";
import IMAGES from "@/images/documents-256.png";
import { useSharedData } from "../../../context/StateContext";

const PINATA_GATEWAY =
    "https://azure-naval-rooster-743.mypinata.cloud/ipfs";

const CheckDiplomeConfirm: FC = () => {
    const { sharedData } = useSharedData();
    const cid = sharedData?.cid;
    const diplomaUrl = cid
        ? `${PINATA_GATEWAY}/${encodeURIComponent(cid)}`
        : null;

    return (
        <section>
            <div className="min-h-screen bg-[#0b3855] text-white-900 flex justify-center">
                <div className="max-w-screen-xl m-0 sm:m-10 shadow sm:rounded-lg flex justify-center flex-1">
                    <div className="xl:w-5/6 p-6 sm:p-12 xs:py-10 md:p-6 text-[#fff]">
                        <div className="mt-12 flex flex-col items-center">
                            <img
                                src={IMAGES}
                                alt="Diplôme authentique"
                                className="w-32 mx-auto"
                            />

                            <div className="mt-12 flex flex-col items-center">
                                <h1 className="text-2xl xl:text-3xl font-extrabold text-[#6cc4ff]">
                                    Vérification réussie !
                                </h1>

                                <p className="mt-8 text-xl xl:text-2xl text-center font-bold">
                                    L’URL correspond bien à un diplôme
                                    authentique.
                                </p>

                                {diplomaUrl ? (
                                    <div className="mt-8 grid gap-4 grid-cols-1 sm:grid-cols-3">
                                        <a
                                            href={diplomaUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center justify-center"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="w-6 h-6 mr-2"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                                                />

                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                                />
                                            </svg>

                                            <span>Visualiser</span>
                                        </a>

                                        <a
                                            href={`mailto:?subject=${encodeURIComponent(
                                                "Diplôme authentifié",
                                            )}&body=${encodeURIComponent(
                                                `Vous pouvez consulter le diplôme authentifié à cette adresse : ${diplomaUrl}`,
                                            )}`}
                                            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center justify-center"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="w-6 h-6 mr-2"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                                                />
                                            </svg>

                                            <span>Envoyer</span>
                                        </a>

                                        <a
                                            href={diplomaUrl}
                                            download
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center justify-center"
                                        >
                                            <svg
                                                className="fill-current w-4 h-4 mr-2"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                aria-hidden="true"
                                            >
                                                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                                            </svg>

                                            <span>Télécharger</span>
                                        </a>
                                    </div>
                                ) : (
                                    <div
                                        role="alert"
                                        className="mt-8 rounded-lg bg-red-100 px-6 py-4 text-center text-red-800"
                                    >
                                        Le diplôme est authentique, mais
                                        aucun identifiant IPFS n’est
                                        disponible pour afficher le
                                        document.
                                    </div>
                                )}

                                <Link
                                    to="/verifier"
                                    className="mt-8 tracking-wide font-semibold bg-[#6cc4ff] text-[#0b3855] w-96 max-w-full py-4 px-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center text-center focus:shadow-outline focus:outline-none"
                                >
                                    Effectuer une autre vérification
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CheckDiplomeConfirm;