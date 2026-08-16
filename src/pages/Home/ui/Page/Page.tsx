import { FC } from "react";

const Home: FC = () => {
  return (
    <>
      <section>
        <div className="hero min-h-[calc(100vh-64px)] bg-[#0b3855]">
          <div className="hero-content flex-col lg:flex-row py-6">
            <p className="font-rubik font-bold text-4xl text-white">Garantissez en un clic l'authenticité de votre diplôme et vos références professionnelles avec kibaroCert!
              <br /><br />
              <button className="btn-primary btn bg-[#6cc4ff] text-[#0b3855]">Commencer maintenant</button>
              <br /><br />
            </p>

            <div>
              <img
                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="w-full"
                alt="Phone image" />
            </div>
          </div>
        </div>
        {/* <div className="hero min-h-[calc(100vh-64px)] bg-[#0b3855]">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="/images/hero.webp"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">Welcome</h1>
              <p className="py-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
                minima laboriosam maxime sed dignissimos harum provident itaque
                fugiat. A repellat aliquid inventore dolor tempora, omnis
                perferendis aspernatur quo nisi excepturi. Ex, ullam odio iusto
                esse necessitatibus doloremque repudiandae!
              </p>
              <button className="btn-primary btn">Get Started</button>
            </div>
          </div>
        </div> */}





        <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
          <h2 className="mb-1 text-3xl font-extrabold leading-tight text-gray-900">Services</h2>
          <p className="mb-12 text-lg text-gray-500">Here is a few of the awesome Services we provide.</p>
          <div className="w-full">
            <div className="flex flex-col w-full mb-10 sm:flex-row">
              <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div className="relative h-full ml-0 mr-0 sm:mr-10">
                  <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
                  <div className="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg">
                    <div className="flex items-center -mt-1">
                      <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">DAPP Development</h3>
                    </div>
                    <p className="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">------------</p>
                    <p className="mb-2 text-gray-600">A decentralized application (dapp) is an application built on a
                      decentralized network that combines a smart contract and a frontend user interface.</p>
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/2">
                <div className="relative h-full ml-0 md:mr-10">
                  <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-500 rounded-lg"></span>
                  <div className="relative h-full p-5 bg-white border-2 border-purple-500 rounded-lg">
                    <div className="flex items-center -mt-1">
                      <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Web 3.0 Development</h3>
                    </div>
                    <p className="mt-3 mb-1 text-xs font-medium text-purple-500 uppercase">------------</p>
                    <p className="mb-2 text-gray-600">Web 3.0 is the third generation of Internet services that will
                      focus on understanding and analyzing data to provide a semantic web.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full mb-5 sm:flex-row">
              <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div className="relative h-full ml-0 mr-0 sm:mr-10">
                  <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
                  <div className="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg">
                    <div className="flex items-center -mt-1">
                      <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Project Audit</h3>
                    </div>
                    <p className="mt-3 mb-1 text-xs font-medium text-blue-400 uppercase">------------</p>
                    <p className="mb-2 text-gray-600">A Project Audit is a formal review of a project, which is intended
                      to assess the extent up to which project management standards are being upheld.</p>
                  </div>
                </div>
              </div>
              <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div className="relative h-full ml-0 mr-0 sm:mr-10">
                  <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg"></span>
                  <div className="relative h-full p-5 bg-white border-2 border-yellow-400 rounded-lg">
                    <div className="flex items-center -mt-1">
                      <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Hacking / RE</h3>
                    </div>
                    <p className="mt-3 mb-1 text-xs font-medium text-yellow-400 uppercase">------------</p>
                    <p className="mb-2 text-gray-600">A security hacker is someone who explores methods for breaching
                      defenses and exploiting weaknesses in a computer system or network.</p>
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/2">
                <div className="relative h-full ml-0 md:mr-10">
                  <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-500 rounded-lg"></span>
                  <div className="relative h-full p-5 bg-white border-2 border-green-500 rounded-lg">
                    <div className="flex items-center -mt-1">
                      <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Bot/Script Development</h3>
                    </div>
                    <p className="mt-3 mb-1 text-xs font-medium text-green-500 uppercase">------------</p>
                    <p className="mb-2 text-gray-600">Bot development frameworks were created as advanced software tools
                      that eliminate a large amount of manual work and accelerate the development process.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>




        <div className="bg-white font-[sans-serif] p-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-xl mx-auto">
              <h2 className="text-3xl font-extrabold text-[#333] inline-block">LATEST BLOGS</h2>
              <p className="text-gray-600 text-sm mt-6  ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-md:max-w-lg mx-auto">
              <div className="bg-white cursor-pointer rounded overflow-hidden group relative before:absolute before:inset-0 before:z-10 before:bg-black before:opacity-50">
                <img src="https://readymadeui.com/Imagination.webp" alt="Blog Post 1" className="w-full h-96 object-cover group-hover:scale-110 transition-all duration-300" />
                <div className="p-6 absolute bottom-0 left-0 right-0 z-20">
                  <span className="text-sm block mb-2 text-yellow-400 font-semibold">10 FEB 2023 | BY JOHN DOE</span>
                  <h3 className="text-xl font-bold text-white">A Guide to Igniting Your Imagination</h3>
                  <div className="mt-4">
                    <p className="text-gray-200 text-sm ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
                  </div>
                </div>
              </div>
              <div className="bg-white cursor-pointer rounded overflow-hidden group relative before:absolute before:inset-0 before:z-10 before:bg-black before:opacity-50">
                <img src="https://readymadeui.com/hacks-watch.webp" alt="Blog Post 2" className="w-full h-96 object-cover group-hover:scale-110 transition-all duration-300" />
                <div className="p-6 absolute bottom-0 left-0 right-0 z-20">
                  <span className="text-sm block mb-2 text-yellow-400 font-semibold">7 JUN 2023 | BY MARK ADAIR</span>
                  <h3 className="text-xl font-bold text-white">Hacks to Supercharge Your Day</h3>
                  <div className="mt-4">
                    <p className="text-gray-200 text-sm ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
                  </div>
                </div>
              </div>
              <div className="bg-white cursor-pointer rounded overflow-hidden group relative before:absolute before:inset-0 before:z-10 before:bg-black before:opacity-50">
                <img src="https://readymadeui.com/prediction.webp" alt="Blog Post 3" className="w-full h-96 object-cover group-hover:scale-110 transition-all duration-300" />
                <div className="p-6 absolute bottom-0 left-0 right-0 z-20">
                  <span className="text-sm block mb-2 text-yellow-400 font-semibold">5 OCT 2023 | BY SIMON KONECKI</span>
                  <h3 className="text-xl font-bold text-white">Trends and Predictions</h3>
                  <div className="mt-4">
                    <p className="text-gray-200 text-sm ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>






        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mb-4">
            <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
              {/* <p className="text-base font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-200">
                Contact
              </p> */}
              <h2
                className="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl">
                Contactez nous
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">In hac habitasse platea
                dictumst
              </p>
            </div>
          </div>
          <div className="flex items-stretch justify-center">
            <div className="grid md:grid-cols-2">
              <div className="h-full pr-6">
                <p className="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400">
                  Class aptent taciti sociosqu ad
                  litora torquent per conubia nostra, per inceptos himenaeos. Duis nec ipsum orci. Ut scelerisque
                  sagittis ante, ac tincidunt sem venenatis ut.
                </p>
                <ul className="mb-6 md:mb-0">
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round" className="h-6 w-6">
                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                        <path
                          d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z">
                        </path>
                      </svg>
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Our Address
                      </h3>
                      <p className="text-gray-600 dark:text-slate-400">1230 Maecenas Street Donec Road</p>
                      <p className="text-gray-600 dark:text-slate-400">New York, EEUU</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round" className="h-6 w-6">
                        <path
                          d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2">
                        </path>
                        <path d="M15 7a2 2 0 0 1 2 2"></path>
                        <path d="M15 3a6 6 0 0 1 6 6"></path>
                      </svg>
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Contact
                      </h3>
                      <p className="text-gray-600 dark:text-slate-400">Mobile: +1 (123) 456-7890</p>
                      <p className="text-gray-600 dark:text-slate-400">Mail: tailnext@gmail.com</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round" className="h-6 w-6">
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                        <path d="M12 7v5l3 3"></path>
                      </svg>
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Working
                        hours</h3>
                      <p className="text-gray-600 dark:text-slate-400">Monday - Friday: 08:00 - 17:00</p>
                      <p className="text-gray-600 dark:text-slate-400">Saturday &amp; Sunday: 08:00 - 12:00</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
                <h2 className="mb-4 text-2xl font-bold dark:text-white">Ready to Get Started?</h2>
                <form id="contactForm">
                  <div className="mb-6">
                    <div className="mx-0 mb-1 sm:mb-4">
                      <div className="mx-0 mb-1 sm:mb-4">
                        <label className="pb-1 text-xs uppercase tracking-wider"></label><input type="text" id="name" placeholder="Your name" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="name" />
                      </div>
                      <div className="mx-0 mb-1 sm:mb-4">
                        <label className="pb-1 text-xs uppercase tracking-wider"></label><input type="email" id="email" placeholder="Your email address" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="email" />
                      </div>
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label className="pb-1 text-xs uppercase tracking-wider"></label><textarea id="textarea" name="textarea" placeholder="Write your message..." className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"></textarea>
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="w-full bg-blue-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>




        <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
          <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxjb2RlfGVufDB8MHx8fDE2OTQwOTg0MTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Background Image" className="object-cover object-center w-full h-full" />
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>

          <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
            <h1 className="text-5xl font-bold leading-tight mb-4">Welcome to Our Awesome Website</h1>
            <p className="text-lg text-gray-300 mb-8">Discover amazing features and services that await you.</p>
            <a href="#" className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">Get Started</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
