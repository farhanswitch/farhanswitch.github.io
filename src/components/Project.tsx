import Carousel, { CarouselItem } from "./Carousel";

export default function Project() {
  return (
    <section id="projects" className="py-24 font-sansf relative">
      <h2 className="text-center mb-8 font-semibold text-2xl">Projects</h2>
      <Carousel>
        <CarouselItem>
          <>
            <div className="h-full bg-lynch pl-[3.5vw] pr-1 grid place-items-center w-1/3">
              <img
                src="/caesar.webp"
                alt="Caesar"
                className="border border-white"
              />
            </div>
            <div className="h-full relative w-2/3 py-6 bg-lynch px-8">
              <h3 className="font-semibold text-xl">
                Caesar Cipher
                <span className="hidden md:inline-block">| Cryptography</span>
              </h3>
              <h3 className="font-semibold text-xl md:hidden">
                | Cryptography
              </h3>

              <h4 className="text-lg mt-6 mb-2">Teknologi</h4>
              <div className="w-max px-2 py-2 text-sm bg-white text-slate-700 flex">
                <div className="w-[3px] text-transparent h-full bg-cyan-700 rounded mr-1">
                  {"a"}{" "}
                </div>
                <p className="tracking-wider">Python</p>
              </div>
              <div className="w-max absolute bottom-3 md:bottom-6 right-4 text-md px-4 py-2 flex gap-4">
                <a href="http://github.com/farhanswitch/cryptography-caesarcipher">
                  <div className="rounded-lg after:w-[40%] after:h-1 after:block after:bg-white">
                    {"Repository"}
                  </div>
                </a>
              </div>
            </div>
          </>
        </CarouselItem>

        <CarouselItem>
          <>
            <div className="h-full bg-rosyBrown pl-[3.5vw] pr-1 grid place-items-center w-1/3">
              <img
                src="/enigma.webp"
                alt="enigma"
                className="border border-white"
              />
            </div>
            <div className="h-full relative w-2/3 py-6 bg-rosyBrown px-8">
              <h3 className="font-semibold text-xl">
                AES 128{" "}
                <span className="hidden md:inline-block">| Cryptography</span>
              </h3>
              <h3 className="md:hidden font-semibold text-xl">
                | Cryptography
              </h3>

              <h4 className="text-lg mt-6 mb-2">Teknologi</h4>
              <div className="flex gap-2">
                <div className="w-max px-2 py-2 text-sm bg-white text-slate-700 flex">
                  <div className="w-[3px] text-transparent h-full bg-orange-500 rounded mr-1">
                    {"a"}{" "}
                  </div>
                  <p className="tracking-wider">HTML</p>
                </div>
                <div className="w-max px-2 py-2 text-sm bg-white text-slate-700 flex">
                  <div className="w-[3px] text-transparent h-full bg-sky-700 rounded mr-1">
                    {"a"}{" "}
                  </div>
                  <p className="tracking-wider">CSS</p>
                </div>
                <div className="w-max px-2 py-2 text-sm bg-white text-slate-700  hidden md:flex">
                  <div className="w-[3px] text-transparent h-full bg-yellow-300 rounded mr-1">
                    {"a"}{" "}
                  </div>
                  <p className="tracking-wider">JavaScript</p>
                </div>
              </div>
              <div className="flex mt-2 md:hidden">
                <div className="w-max px-2 py-2 text-sm bg-white text-slate-700 flex">
                  <div className="w-[3px] text-transparent h-full bg-yellow-300 rounded mr-1">
                    {"a"}{" "}
                  </div>
                  <p className="tracking-wider">JavaScript</p>
                </div>
              </div>
              <div className="w-max absolute bottom-3 md:bottom-6 right-4 text-md px-4 py-2 flex gap-4">
                <a href="https://switch-aesencrypt.netlify.app">
                  <div className="px-4 py-1 tracking-wide rounded-md shadow shadow-white bg-white text-rosyBrown">
                    Demo
                  </div>
                </a>
                <a href="https://github.com/farhanswitch/AESEncryption">
                  <div className="rounded-lg after:w-[40%] after:h-1 after:block after:bg-white">
                    {"Repository"}
                  </div>
                </a>
              </div>
            </div>
          </>
        </CarouselItem>
        <CarouselItem>
          <>
            <div className="h-full pl-[3.5vw] pr-1 bg-delRio grid place-items-center w-1/3">
              <img src="/tictactoeedited.webp" alt="Tictactoe" />
            </div>
            <div className="h-full relative w-2/3 py-6 bg-delRio px-8">
              <h3 className="font-semibold text-md">
                Tic Tac Toe{" "}
                <span className="hidden md:inline-block">
                  | Player vs. Computer{" "}
                </span>
              </h3>
              <h3 className="text-xl font-semibold md:hidden">
                | Player vs. Computer
              </h3>

              <h4 className="text-lg mt-6 mb-2">Teknologi</h4>
              <div className="flex gap-2">
                <div className="w-max px-2 py-2 text-sm bg-white text-slate-700 flex">
                  <div className="w-[3px] text-transparent h-full bg-orange-500 rounded mr-1">
                    {"a"}{" "}
                  </div>
                  <p className="tracking-wider">HTML</p>
                </div>
                <div className="w-max px-2 py-2 text-sm bg-white text-slate-700 flex">
                  <div className="w-[3px] text-transparent h-full bg-sky-700 rounded mr-1">
                    {"a"}{" "}
                  </div>
                  <p className="tracking-wider">CSS</p>
                </div>
                <div className="w-max px-2 py-2 text-sm bg-white text-slate-700 hidden md:flex">
                  <div className="w-[3px] text-transparent h-full bg-yellow-300 rounded mr-1">
                    {"a"}{" "}
                  </div>
                  <p className="tracking-wider">JavaScript</p>
                </div>
              </div>
              <div className="flex mt-2 md:hidden">
                <div className="w-max px-2 py-2 text-sm bg-white text-slate-700 flex">
                  <div className="w-[3px] text-transparent h-full bg-yellow-300 rounded mr-1">
                    {"a"}{" "}
                  </div>
                  <p className="tracking-wider">JavaScript</p>
                </div>
              </div>
              <div className="w-max absolute bottom-3 md:bottom-6 right-4 text-md px-4 py-2 flex gap-4">
                <a href="https://tictactoe.farhanswitch.my.id">
                  <div className="px-4 py-1 tracking-wide rounded-md shadow shadow-white bg-white text-delRio">
                    Demo
                  </div>
                </a>
                <a href="https://github.com/farhanswitch/tictactoe">
                  <div className="rounded-lg after:w-[40%] after:h-1 after:block after:bg-white">
                    {"Repository"}
                  </div>
                </a>
              </div>
            </div>
          </>
        </CarouselItem>
        <CarouselItem>
          <>
            <div className="h-full pl-[3.5vw] pr-1 bg-brandy grid place-items-center w-1/3">
              <img src="/todo.webp" alt="ToDo app" />
            </div>
            <div className="h-full relative w-2/3 py-6 bg-brandy px-8">
              <h3 className="font-semibold text-xl">ToDo App</h3>

              <h4 className="text-lg mt-6 mb-2">Teknologi</h4>
              <div className="flex gap-2">
                <div className="w-max px-2 py-2 text-sm bg-white text-slate-700 flex">
                  <div className="w-[3px] text-transparent h-full bg-sky-500 rounded mr-1">
                    {"a"}{" "}
                  </div>
                  <p className="tracking-wider">ReactJS</p>
                </div>
                <div className="w-max px-2 py-2 text-sm bg-white text-slate-700 flex">
                  <div className="w-[3px] text-transparent h-full bg-blue-700 rounded mr-1">
                    {"a"}{" "}
                  </div>
                  <p className="tracking-wider">TypeScript</p>
                </div>
                <div className="w-max px-2 py-2 text-sm bg-white text-slate-700 hidden md:flex">
                  <div className="w-[3px] text-transparent h-full bg-sky-300 rounded mr-1">
                    {"a"}{" "}
                  </div>
                  <p className="text-sm sm:text-sm sm:tracking-wider">
                    Tailwind CSS
                  </p>
                </div>
              </div>
              <div className="flex md:hidden mt-2">
                <div className="w-max px-2 py-2 text-sm bg-white text-slate-700 flex">
                  <div className="w-[3px] text-transparent h-full bg-sky-300 rounded mr-1">
                    {"a"}{" "}
                  </div>
                  <p className="text-sm sm:text-sm sm:tracking-wider">
                    Tailwind CSS
                  </p>
                </div>
              </div>
              <div className="w-max absolute bottom-3 md:bottom-6 right-4 text-md px-4 py-2 flex gap-4">
                <a href="https://farhanswitch-todo-reactts.netlify.app">
                  <div className="px-4 py-1 tracking-wide rounded-md shadow shadow-white bg-white text-brandy">
                    Demo
                  </div>
                </a>
                <a href="https://github.com/farhanswitch/todo-react-ts">
                  <div className="rounded-lg after:w-[40%] after:h-1 after:block after:bg-white">
                    {"Repository"}
                  </div>
                </a>
              </div>
            </div>
          </>
        </CarouselItem>
      </Carousel>
    </section>
  );
}
