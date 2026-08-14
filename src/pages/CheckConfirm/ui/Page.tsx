import { FC } from "react";
import { Link } from "react-router-dom";
import IMAGES from "@/images/documents-256.png";
import { useSharedData } from "../../../context/StateContext";

const CheckConfirm: FC = () => {
    const { sharedData } = useSharedData();

    return (
        <section>
            <div className="min-h-screen bg-[#0b3855] text-white-900 flex justify-center">
                <div className="max-w-screen-xl m-0 sm:m-10 shadow sm:rounded-lg flex justify-center flex-1">
                    <div className="xl:w-5/6 p-6 sm:p-12 xs:py-10 md:p-6 text-[#fff]">
                        <div className="mt-12 flex flex-col items-center">
                            <div>
                                <img
                                    src={IMAGES}
                                    alt="Document authentique"
                                    className="w-32 mx-auto"
                                />
                            </div>

                            <div className="mt-12 flex flex-col items-center">
                                <h1 className="text-2xl xl:text-3xl font-extrabold text-[#6cc4ff]">
                                    Vérification réussie !
                                </h1>

                                <br />
                                <br />

                                <p className="text-xl xl:text-2xl text-left font-bold">
                                    L’URL correspond bien à une référence authentique.
                                </p>

                                <br />

                                <div className="grid text-center">
                                    <p>
                                        Cette référence est attribuée à{" "}
                                        <span className="font-bold">
                                            {sharedData?.nom} {sharedData?.prenom}
                                        </span>{" "}
                                        pour avoir occupé le poste de{" "}
                                        <span className="font-bold">
                                            {sharedData?.mission}
                                        </span>
                                        .
                                    </p>

                                    <p>
                                        Appréciation : {sharedData?.appreciation}
                                    </p>

                                    <p>
                                        Fait le {sharedData?.string}
                                    </p>

                                    <br />
                                    <hr />
                                    <br />

                                    <p>
                                        Le manager :{" "}
                                        <span className="font-bold">
                                            {sharedData?.referent}
                                        </span>
                                    </p>
                                </div>

                                <Link
                                    to="/verifier"
                                    className="mt-5 tracking-wide font-semibold bg-[#6cc4ff] text-[#0b3855] w-96 max-w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                                >
                                    <span>
                                        Effectuer une autre vérification
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CheckConfirm;
