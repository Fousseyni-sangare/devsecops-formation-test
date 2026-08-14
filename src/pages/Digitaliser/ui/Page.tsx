import { FormEvent, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DiplomeService from "../../../services/diplomeApi";

type FormElements = HTMLFormControlsCollection & {
    holder: HTMLInputElement;
    issuer: HTMLInputElement;
    adresse: HTMLInputElement;
    phone: HTMLInputElement;
    email: HTMLInputElement;
};

type DigitaliserForm = HTMLFormElement & {
    readonly elements: FormElements;
};

export default function Digitaliser() {
    const [, setLoading] = useState(false);
    const navigate = useNavigate();
    const [dragActive, setDragActive] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const [files, setFiles] = useState<File[]>([]);

    function addFiles(selectedFiles: FileList) {
        const newFiles = Array.from(selectedFiles);

        setFiles((currentFiles) => [
            ...currentFiles,
            ...newFiles,
        ]);
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        event.preventDefault();

        if (event.target.files?.length) {
            addFiles(event.target.files);
        }
    }

    async function handleSubmitFile(
        event: FormEvent<DigitaliserForm>,
    ) {
        event.preventDefault();

        if (files.length === 0) {
            toast.error(
                "Veuillez sélectionner au moins un fichier avant de sauvegarder.",
            );
            return;
        }

        setLoading(true);

        try {
            const formData = new FormData();

            files.forEach((file) => {
                formData.append("file", file);
            });

            const metadata = JSON.stringify({
                name: files[0].name,
            });

            formData.append("pinataMetadata", metadata);

            const options = JSON.stringify({
                cidVersion: 0,
            });

            formData.append("pinataOptions", options);

            const pinataToken = import.meta.env.VITE_PINATA_JWT;

            if (!pinataToken) {
                throw new Error(
                    "Le jeton Pinata VITE_PINATA_JWT n’est pas configuré.",
                );
            }

            const pinataResponse = await fetch(
                "https://api.pinata.cloud/pinning/pinFileToIPFS",
                {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${pinataToken}`,
                    },
                    body: formData,
                },
            );

            if (!pinataResponse.ok) {
                throw new Error(
                    `Échec de l’envoi vers Pinata : HTTP ${pinataResponse.status}.`,
                );
            }

            const pinataData = await pinataResponse.json();

            if (!pinataData.IpfsHash) {
                throw new Error(
                    "Pinata n’a retourné aucun identifiant IPFS.",
                );
            }

            const form = event.currentTarget;
            const formElements = form.elements;

            const diplomaData = {
                owner: formElements.holder.value,
                awards: formElements.issuer.value,
                adress: formElements.adresse.value,
                phone: formElements.phone.value,
                email: formElements.email.value,
                cid: pinataData.IpfsHash,
                date: new Date().toISOString(),
            };

            const response =
                await DiplomeService.AddNewDiplome(diplomaData);

            if (response.status === 200) {
                toast.success("Le diplôme a été sauvegardé avec succès.");
                navigate("/");
                return;
            }

            toast.error(
                `La sauvegarde a échoué : HTTP ${response.status}.`,
            );
        } catch (error: any) {
            if (error.response?.data) {
                toast.error(
                    typeof error.response.data === "string"
                        ? error.response.data
                        : JSON.stringify(error.response.data),
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
    }

    function handleDrop(
        event: React.DragEvent<HTMLFormElement>,
    ) {
        event.preventDefault();
        event.stopPropagation();
        setDragActive(false);

        if (event.dataTransfer.files?.length) {
            addFiles(event.dataTransfer.files);
        }
    }

    function handleDragLeave(
        event: React.DragEvent<HTMLFormElement>,
    ) {
        event.preventDefault();
        event.stopPropagation();
        setDragActive(false);
    }

    function handleDragOver(
        event: React.DragEvent<HTMLFormElement>,
    ) {
        event.preventDefault();
        event.stopPropagation();
        setDragActive(true);
    }

    function handleDragEnter(
        event: React.DragEvent<HTMLFormElement>,
    ) {
        event.preventDefault();
        event.stopPropagation();
        setDragActive(true);
    }

    function removeFile(index: number) {
        setFiles((currentFiles) =>
            currentFiles.filter((_, fileIndex) => fileIndex !== index),
        );
    }

    function openFileExplorer() {
        if (!inputRef.current) {
            return;
        }

        inputRef.current.value = "";
        inputRef.current.click();
    }

    return (
        <section className="bg-[#0b3855] min-h-screen">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="place-self-center lg:col-span-6">
                    <h2 className="text-2xl xl:text-3xl font-extrabold text-center text-white mb-6">
                        Importer le diplôme
                    </h2>

                    <br />

                    <form
                        className={`${
                            dragActive
                                ? "bg-blue-400"
                                : "bg-blue-100"
                        } p-4 w-full rounded-lg min-h-[10rem] text-center flex flex-col items-center justify-center`}
                        onDragEnter={handleDragEnter}
                        onDrop={handleDrop}
                        onDragLeave={handleDragLeave}
                        onDragOver={handleDragOver}
                    >
                        <input
                            aria-label="Sélectionner les fichiers du diplôme"
                            className="hidden"
                            ref={inputRef}
                            type="file"
                            multiple
                            onChange={handleChange}
                            accept=".xlsx,.xls,image/*,.doc,.docx,.ppt,.pptx,.txt,.pdf"
                        />

                        <p>
                            Glissez-déposez les fichiers ou{" "}
                            <button
                                type="button"
                                className="font-bold text-blue-600 cursor-pointer underline"
                                onClick={openFileExplorer}
                            >
                                sélectionnez-les
                            </button>{" "}
                            pour les importer.
                        </p>

                        <div className="flex flex-col items-center p-3">
                            {files.map((file, index) => (
                                <div
                                    key={`${file.name}-${file.lastModified}-${index}`}
                                    className="flex flex-row items-center space-x-5"
                                >
                                    <span>{file.name}</span>

                                    <button
                                        type="button"
                                        className="text-red-600 cursor-pointer"
                                        onClick={() => removeFile(index)}
                                        aria-label={`Supprimer ${file.name}`}
                                    >
                                        Supprimer
                                    </button>
                                </div>
                            ))}
                        </div>
                    </form>
                </div>

                <div className="lg:col-span-6">
                    <h2 className="text-2xl xl:text-3xl font-extrabold text-white px-10 mt-10">
                        Informations de l’étudiant
                    </h2>

                    <br />

                    <form
                        className="mx-auto items"
                        onSubmit={handleSubmitFile}
                    >
                        <div className="relative z-0 w-full mb-6 group border-b border-white">
                            <input
                                type="text"
                                name="holder"
                                id="holder"
                                className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none focus:outline-none focus:ring-0 peer"
                                placeholder=" "
                                required
                            />

                            <label
                                htmlFor="holder"
                                className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Décerné à
                            </label>
                        </div>

                        <div className="relative z-0 w-full mb-6 group border-b border-white">
                            <input
                                type="text"
                                name="issuer"
                                id="issuer"
                                className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none focus:outline-none focus:ring-0 peer"
                                placeholder=" "
                                required
                            />

                            <label
                                htmlFor="issuer"
                                className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Délivré par
                            </label>
                        </div>

                        <div className="relative z-0 w-full mb-6 group border-b border-white">
                            <input
                                type="text"
                                name="adresse"
                                id="adresse"
                                className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none focus:outline-none focus:ring-0 peer"
                                placeholder=" "
                                required
                            />

                            <label
                                htmlFor="adresse"
                                className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Adresse
                            </label>
                        </div>

                        <div className="relative z-0 w-full mb-6 group border-b border-white">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none focus:outline-none focus:ring-0 peer"
                                placeholder=" "
                                required
                            />

                            <label
                                htmlFor="email"
                                className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                E-mail
                            </label>
                        </div>

                        <div className="relative z-0 w-full mb-6 group border-b border-white">
                            <input
                                type="tel"
                                name="phone"
                                id="phone"
                                className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none focus:outline-none focus:ring-0 peer"
                                placeholder=" "
                                required
                            />

                            <label
                                htmlFor="phone"
                                className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Téléphone
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="mt-6 tracking-wide font-semibold bg-[#6cc4ff] text-[#0b3855] w-64 py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none text-center"
                        >
                            <span className="mr-4">
                                Sauvegarder
                            </span>

                            <svg
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
                                    d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                                />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}