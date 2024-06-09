import { FC } from "react";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DiplomeService from "../../../services/diplomeApi"
import { useNavigate } from 'react-router-dom';

export default function Digitaliser() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [dragActive, setDragActive] = useState<boolean>(false);
  const inputRef = useRef<any>(null);
  const [files, setFiles] = useState<any>([]);

  function handleChange(e: any) {
    e.preventDefault();
    console.log("File has been added");
    if (e.target.files && e.target.files[0]) {
      console.log(e.target.files);
      for (let i = 0; i < e.target.files["length"]; i++) {
        setFiles((prevState: any) => [...prevState, e.target.files[i]]);
      }
    }
  }

  const handleSubmitFile = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      if (files.length > 0) {
        for (var i = 0; i < files.length; i++) {
          formData.append("file", files[i])
        }
      }
      const metadata = JSON.stringify({
        name: files[0].name,
      });
      formData.append("pinataMetadata", metadata);

      const options = JSON.stringify({
        cidVersion: 0,
      });
      formData.append("pinataOptions", options);

      const res = await fetch(
        "https://api.pinata.cloud/pinning/pinFileToIPFS",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_PINATA_JWT}`,
          },
          body: formData,
        }
      );

      const resData = await res.json();
      try {
        var data = {
          "owner": e.target.holder.value,
          "awards": e.target.issuer.value,
          "adress": e.target.adresse.value,
          "phone": e.target.phone.value,
          "email": e.target.email.value,
          "cid": resData.IpfsHash,
          "date": "2024-06-02T23:41:40.983Z"
        }
        let resp = await DiplomeService.AddNewDiplome(data)

        if (resp.status === 200) {
          navigate("/");
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
      console.log(resData);
    } catch (error) {
      console.log(error);
    }
  };

  // const handleSubmitFile = async (e) => {
  //   e.preventDefault();
  //   if (files.length === 0) {
  //     // no file has been submitted
  //     var formData = new FormData



  //     if (files.length > 0) {
  //       for (var i = 0; i < files.length; i++) {
  //         formData.append("file", files[i])
  //       }
  //     }
  //     // formData.append("params", JSON.stringify(data))
  //     try {
  //       let resp = await DiplomeService.AddPvtHealthDetails(formData);

  //       const response = JSON.parse(await resp.text())

  //       if (response.status === 'ERROR') {
  //         toast.error(response.description)
  //       }
  //       else if (resp.status === 200) {
  //         toast.success(response.description)
  //         // getHealthRecords(args.patientID)
  //         // setIsView(true)
  //       } else if (resp.status) {
  //         toast.error(response.description)
  //       }
  //     } catch (error) {
  //       if (error.code === 'ERR_NETWORK') {
  //         toast.error('Please check your server is up and running')
  //       } else if (error.response?.status) {
  //         toast.error(error.response.data)
  //       } else if (error.message === 'Failed to fetch') {
  //         toast.error('Please make sure IPFS server is up and running.')
  //       } else {
  //         toast.error(error.message);
  //       }
  //     } finally {
  //       // setIsLoading(false);
  //     }
  //     var data = {
  //       "holder": e.target.holder.value,
  //       "issuer": e.target.issuer.value,
  //       "holder_adress": e.target.appreciation.value,
  //       "holder_phone": e.phone.appreciation.value,
  //       "holder_email": e.target.email.value,
  //       "cid": "string",
  //       "issue_date": "2024-05-24T14:10:26.510Z"
  //     }

  //     try {

  //       let resp = await DiplomeService.AddNewDiplome(data)

  //       if (resp.status === 200) {
  //         navigate("/login");
  //       }

  //     } catch (error) {
  //       if (error.response?.status) {
  //         toast.error(error.response.data)
  //       } else {
  //         toast.error(error.message);
  //       }
  //     } finally {
  //       setLoading(false);
  //     }
  //   } else {
  //     // write submit logic here
  //   }
  // }

  function handleDrop(e: any) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      for (let i = 0; i < e.dataTransfer.files["length"]; i++) {
        setFiles((prevState: any) => [...prevState, e.dataTransfer.files[i]]);
      }
    }
  }

  function handleDragLeave(e: any) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  }

  function handleDragOver(e: any) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  }

  function handleDragEnter(e: any) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  }

  function removeFile(fileName: any, idx: any) {
    const newArr = [...files];
    newArr.splice(idx, 1);
    setFiles([]);
    setFiles(newArr);
  }

  function openFileExplorer() {
    inputRef.current.value = "";
    inputRef.current.click();
  }

  return (
    <section className="bg-[#0b3855] min-h-screen">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 ">
        <div className="place-self-center lg:col-span-6">
          <h2 className="text-2xl xl:text-3xl font-extrabold text-center text-white mb-6">
            Importer le diplôme
          </h2>
          <br />
          <form
            className={`${dragActive ? "bg-blue-400" : "bg-blue-100"
              }  p-4 w-3/3 rounded-lg  min-h-[10rem] text-center flex flex-col items-center justify-center`}
            onDragEnter={handleDragEnter}
            onDrop={handleDrop}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
          >
            {/* this input element allows us to select files for upload. We make it hidden so we can activate it when the user clicks select files */}
            <input
              placeholder="fileInput"
              className="hidden"
              ref={inputRef}
              type="file"
              multiple={true}
              onChange={handleChange}
              accept=".xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf"
            />

            <p>
              Drag & Drop files or{" "}
              <span
                className="font-bold text-blue-600 cursor-pointer"
                onClick={openFileExplorer}
              >
                <u>Select files</u>
              </span>{" "}
              to upload
            </p>

            <div className="flex flex-col items-center p-3">
              {files.map((file: any, idx: any) => (
                <div key={idx} className="flex flex-row space-x-5">
                  <span>{file.name}</span>
                  <span
                    className="text-red cursor-pointer"
                    onClick={() => removeFile(file.name, idx)}
                  >
                    remove
                  </span>
                </div>
              ))}
            </div>
          </form>

          {/* <button
          className="bg-black rounded-lg p-2 mt-3 w-auto"
          onClick={handleSubmitFile}
        >
          <span className="p-2 text-white">Submit</span>
        </button> */}


        </div>
        <div className="lg:col-span-6">
          <h2 className="text-2xl xl:text-3xl font-extrabold text-white px-10 mt-10">
            Informations étudiant
          </h2>
          <br></br>
          <form className="mx-auto items" onSubmit={handleSubmitFile}>
            <div className="relative z-0 w-full mb-6 group border-b border-white">
              <input
                type="text"
                name="holder"
                id="holder"
                className="block py-2.5 px-0 w-full text-sm text-white-900 bg-transparent border-0 border-b-2 border-white-300 appearance-none dark:text-white dark:border-white-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white-600 peer"
                placeholder=""
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-white dark:text-white-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white-600 peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Descerné à
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group border-b border-white">
              <input
                type="text"
                name="issuer"
                id="issuer"
                className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white-300 appearance-none dark:text-white dark:border-white-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white-600 peer"
                placeholder=""
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-white dark:text-white-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white-600 peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                délivré par
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group border-b border-white">
              <input
                type="text"
                name="adresse"
                id="adresse"
                className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white-300 appearance-none dark:text-white dark:border-white-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white-600 peer"
                placeholder=""
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-white dark:text-white-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white-600 peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                adresse
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group border-b border-white">
              <input
                type="email"
                name="email"
                id="email"
                className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white-300 appearance-none dark:text-white dark:border-white-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white-600 peer"
                placeholder=""
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-white dark:text-white-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white-600 peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Email
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group border-b border-white">
              <input
                type="text"
                name="phone"
                id="phone"
                className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white-300 appearance-none dark:text-white dark:border-white-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white-600 peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-white dark:text-white-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white-600 peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Téléphone
              </label>
            </div>
            <button
              className="mt-6 tracking-wide font-semibold bg-[#6cc4ff] text-[#0b3855] w-64 py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none text-center">
              <span className="mr-4">
                Sauvegarder
              </span>
              <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
            </button>
          </form>
        </div>
      </div></section>
  );
}