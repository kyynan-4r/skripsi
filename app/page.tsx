import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white shadow z-50 h-15">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
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

            <div className="hidden md:block">
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

            <div className="flex items-center gap-4">
              <button
                type="button"
                className="overflow-hidden rounded-full border border-gray-300 shadow-inner"
              >
                <span className="sr-only">Toggle dashboard menu</span>

                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="size-10 object-cover"
                />
              </button>

              <div className="block md:hidden">
                <button className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
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
                  <h2 class="text-sm font-semibold text-gray-600">Komunitas</h2>
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
                <h2 class="text-sm font-semibold text-gray-600 mt-4">
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
            <div class="flex-1 h-full">
              <div class="p-4 space-y-4">
                <div class="flex justify-center items-center h-80 w-full bg-white shadow-md rounded-lg p-6">
                  <div class="text-center">
                    <h2 class="text-2xl font-bold text-gray-800 mb-4">
                      Konten Card 1
                    </h2>
                    <p class="text-gray-600">
                      Ini adalah konten pertama yang dapat di-scroll
                    </p>
                  </div>
                </div>

                <div class="flex justify-center items-center h-80 w-full bg-white shadow-md rounded-lg p-6">
                  <div class="text-center">
                    <h2 class="text-2xl font-bold text-gray-800 mb-4">
                      Konten Card 2
                    </h2>
                    <p class="text-gray-600">
                      Ini adalah konten kedua yang dapat di-scroll
                    </p>
                  </div>
                </div>

                <div class="flex justify-center items-center h-80 w-full bg-white shadow-md rounded-lg p-6">
                  <div class="text-center">
                    <h2 class="text-2xl font-bold text-gray-800 mb-4">
                      Konten Card 3
                    </h2>
                    <p class="text-gray-600">
                      Ini adalah konten ketiga yang dapat di-scroll
                    </p>
                  </div>
                </div>

                <div class="flex justify-center items-center h-80 w-full bg-white shadow-md rounded-lg p-6">
                  <div class="text-center">
                    <h2 class="text-2xl font-bold text-gray-800 mb-4">
                      Konten Card 4
                    </h2>
                    <p class="text-gray-600">
                      Ini adalah konten keempat yang dapat di-scroll
                    </p>
                  </div>
                </div>

                <div class="flex justify-center items-center h-80 w-full bg-white shadow-md rounded-lg p-6">
                  <div class="text-center">
                    <h2 class="text-2xl font-bold text-gray-800 mb-4">
                      Konten Card 5
                    </h2>
                    <p class="text-gray-600">
                      Ini adalah konten kelima yang dapat di-scroll
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Side bar (kanan) */}
          <div className="h-full ml-30 mt-0 bg-white shadow-md rounded-lg"></div>
        </div>
      </main>
    </>
  );
}
