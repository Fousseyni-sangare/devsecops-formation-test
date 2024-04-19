import { FC } from "react";

const Home: FC = () => {
  return (
    <>
      <section>
      <div className="hero min-h-[calc(100vh-64px)] bg-[#0b3855]">
          <div className="hero-content flex-col lg:flex-row py-6">
            <p className="font-rubik font-bold text-4xl text-white">Garantissez en un clic l'authenticité de votre diplôme et vos références professionnelles avec kibaroCert!
              <br /><br />
              <button className="btn-primary btn">Commencer maintenant</button>
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
        <div className="hero min-h-[calc(100vh-64px)] bg-[#0b3855]">
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
        </div>
      </section>
    </>
  );
};

export default Home;
