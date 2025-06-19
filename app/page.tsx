import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white shadow z-50 h-15">
        <div className="mx-auto max-w-screen-xl sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <a className="block text-teal-600" href="#">
                <span className="sr-only">Home</span>
                <Image
                  src="/home.svg"
                  alt="Logo"
                  width={32}
                  height={32}
                  className="h-8 w-auto"
                ></Image>
              </a>
            </div>

            <div className="hidden md:block ml-50">
              <div className=" border-gray-100 ">
                <nav className="-mb-px flex gap-6" aria-label="Tabs">
                  <a
                    href="/profile.html"
                    className="shrink-0 border-b-2 border-transparent px-10 pb-1 text-base text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  >
                    Beranda
                  </a>
                  <a
                    href="/profile.html"
                    className="shrink-0 border-b-2 border-transparent px-10 pb-1 text-base  text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  >
                    Trending ✨
                  </a>

                  <a
                    href="/about.html"
                    className="shrink-0 border-b-2 border-transparent px-10 pb-4 text-base text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  >
                    About
                  </a>
                </nav>
              </div>
            </div>
            <div className=" -mr-20">
               <a 
               className="group inline-block rounded-full p-[2px] hover:text-black focus:ring-1"
               href="#">
                <span 
                className="block rounded-full bg-blue-500 px-10 py-3 text-sm font-medium group-hover:bg-blue-600"
                >
                  Mau Share apa nih?
                  </span>
              </a>
            </div>
{/* Profile sudut kanan */}
            <div className="dropdown relative group bg-white text-gray-900 rounded-lg -mr-10">
              <button className="flex items-center gap-1 transition hover:brightness-75 transition duration-300">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="size-10 object-cover rounded-full"
                />
              </button>
              <div className="bg-white absolute hidden group-focus-within:flex flex-col rounded-lg p-4 w-50 right-0 shadow-lg z-10">
                    <a
                      href="#"
                      className="hover:bg-gray-300 px-4 py-2 rounded-lg"
                    >
                      Laporkan Postingan ini
                    </a>
                    <a
                      href="#"
                      className="hover:bg-gray-300 px-4 py-2 rounded-lg"
                    >
                      Item 2
                    </a>
                    <a
                      href="#"
                      className="hover:bg-gray-300 px-4 py-2 rounded-lg"
                    >
                      Item 3
                    </a>
                  </div>
            </div>
          </div>
        </div>
      </header>
      {/* Body */}
      <main className="bg-sky-100 mt-6 overflow-y-hidden">
        <div className="flex items-center justify-center w-full h-full p-10 mx-auto grid grid-cols-[1fr_2fr_1fr] gap-4">
          {/* side menu */}
          <div className=" h-full -ml-10 mr-30 -mt-2 border-r border-green-400 overflow-hidden">
            <div className="px-20 py-3 -ml-15">
              <ul className="mt-2 space-y-1">
                <li>
                 
                </li>
                <li>
                  <h2 className="text-sm font-semibold text-gray-600">Komunitas</h2>
                  <a
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    Desain Grafis
                  </a>
                  <a
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    Videografi
                  </a>
                  <a
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    Fotografi
                  </a>
                  <a
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    Menulis
                  </a>
                </li>
                <h2 className="text-sm font-semibold text-gray-600 mt-4">
                  Apa ya ini
                </h2>
                <li>
                  <details className="group [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                      <span className="text-sm font-medium"> Teams </span>

                      <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                    </summary>

                    <ul className="mt-2 space-y-1 px-4">
                      <li>
                        <a
                          href="#"
                          className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                          Banned Users
                        </a>
                      </li>

                      <li>
                        <a
                          href="#"
                          className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                          Calendar
                        </a>
                      </li>
                    </ul>
                  </details>
                </li>

                <li>
                  <a
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    Billing
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    Invoices
                  </a>
                </li>

                <li>
                  <details className="group [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                      <span className="text-sm font-medium"> Account </span>

                      <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                    </summary>

                    <ul className="mt-2 space-y-1 px-4">
                      <li>
                        <a
                          href="#"
                          className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                          Details
                        </a>
                      </li>

                      <li>
                        <a
                          href="#"
                          className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                          Security
                        </a>
                      </li>

                      <li>
                        <a
                          href="#"
                          className="w-full rounded-lg px-4 py-2 [text-align:_inherit] text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                          Logout
                        </a>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </div>
          </div>
          {/* Konten Utama */}
          <div className="overflow-y-auto">
            <div className="flex-1 h-full">
              <div className="p-4 space-y-4">
                <div className="flex justify-center items-center h-80 w-full bg-white shadow-md rounded-lg p-6">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                      Konten Card 1
                    </h2>
                    <p className="text-gray-600">
                      Ini adalah konten pertama yang dapat di-scroll
                    </p>
                  </div>
                </div>

                <div className="flex justify-center items-center h-80 w-full bg-white shadow-md rounded-lg p-6">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                      Konten Card 2
                    </h2>
                    <p className="text-gray-600">
                      Ini adalah konten kedua yang dapat di-scroll
                    </p>
                  </div>
                </div>

                <div className="flex justify-center items-center h-80 w-full bg-white shadow-md rounded-lg p-6">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                      Konten Card 3
                    </h2>
                    <p className="text-gray-600">
                      Ini adalah konten ketiga yang dapat di-scroll
                    </p>
                  </div>
                </div>

                <div className="flex justify-center items-center h-80 w-full bg-white shadow-md rounded-lg p-6">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                      Konten Card 4
                    </h2>
                    <p className="text-gray-600">
                      Ini adalah konten keempat yang dapat di-scroll
                    </p>
                  </div>
                </div>

                <div className="flex justify-center items-center h-80 w-full bg-white shadow-md rounded-lg p-6">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                      Konten Card 5
                    </h2>
                    <p className="text-gray-600">
                      Ini adalah konten kelima yang dapat di-scroll
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Side bar (kanan) */}
          <div className="h-full ml-30 mt-0 bg-white shadow-md rounded-lg">
          </div>
          
        </div>
      </main>
    </>
  );
