import React from "react";

const Home = () => {
  return (
    <section className=" ">
      <section className="grid place-content-center h-screen">
        <article>
          <div>
            <img src="" alt="" />
          </div>
          <h2>Hola Entrenador:</h2>
          <p>Para poder comenzar, dame tu nombre campeon</p>
          <div>
            <input className="border border-gray-800" type="text" />
            <button className="px-3 bg-red-700">Comenzar</button>
          </div>
        </article>
      </section>

      <footer className="relative">
        <div className=" h-20 bg-red-600"></div>
        <div className=" h-20 bg-black"></div>
        <div className=" absolute bg-white rounded-full aspect-square border-[8px] border-black ">

        </div>
      </footer>
    </section>
  );
};

export default Home;
