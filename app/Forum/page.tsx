import { Header } from "../_components/header";

export default function Forum() {
  return (
    <>
      <main>
        <Header />
        <div className="h-screen w-screen grid grid-cols-[16rem_22rem_1fr] bg-gray-50 text-sm">
          {/* Sidebar Komunitas */}
          <aside className="bg-white border-r p-6 overflow-y-auto shadow-sm">
            <h2 className="font-semibold text-lg mb-4 text-gray-700">
              📚 Komunitas
            </h2>
            <ul className="space-y-2">
              {[
                "Desain Grafis",
                "Video dan Editing",
                "Photography",
                "Tulis Menulis",
                "📣 Saran & Feedback",
              ].map((item) => (
                <li
                  key={item}
                  className="hover:bg-gray-100 px-4 py-2 rounded-lg cursor-pointer transition text-gray-600 hover:text-black"
                >
                  {item}
                </li>
              ))}
            </ul>
          </aside>

          {/* List Topik Diskusi */}
          <section className="bg-gray-50 border-r p-6 overflow-y-auto">
            <h2 className="font-semibold text-lg mb-4 text-gray-700">
              🗨️ Obrolan
            </h2>
            <div className="space-y-3">
              <div className="card bg-white hover:bg-gray-50 cursor-pointer transition shadow-sm">
                <div className="card-body p-4">
                  <h3 className="font-medium text-sm text-gray-800">
                    💬 Obrolan Umum
                  </h3>
                </div>
              </div>

              <h2 className="font-semibold text-lg text-gray-700 mt-6">
                🔥 Topik Diskusi
              </h2>
              <div className="space-y-3">
                <div className="card bg-white hover:bg-gray-50 cursor-pointer transition shadow-sm">
                  <div className="card-body p-4">
                    <h3 className="font-medium text-sm text-gray-800">
                      Tips palet warna buat desain fashion
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      oleh @nadiagrafis • 2 jam lalu
                    </p>
                  </div>
                </div>
                <div className="card bg-white hover:bg-gray-50 cursor-pointer transition shadow-sm">
                  <div className="card-body p-4">
                    <h3 className="font-medium text-sm text-gray-800">
                      Cara atur harga jasa desain buat pemula
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      oleh @rafi21 • 1 hari lalu
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Chat Area */}
          <main className="p-6 flex flex-col relative overflow-y-auto">
            <div className="border-b pb-2 mb-4">
              <h2 className="text-lg font-semibold text-gray-800">
                💬 Obrolan: Tips palet warna
              </h2>
              <p className="text-sm text-gray-500">Forum: Desain Grafis</p>
            </div>

            {/* Isi Chat */}
            <div className="space-y-4 flex-1 overflow-y-auto pr-2">
              {[
                {
                  name: "Obi-Wan Kenobi",
                  msg: "You were the Chosen One!",
                  time: "2 jam lalu",
                },
                {
                  name: "Obi-Wan Kenobi",
                  msg: "I loved you.",
                  time: "2 jam lalu",
                },
              ].map((chat, i) => (
                <div key={i} className="chat chat-start">
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                      <img
                        alt="User"
                        src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
                      />
                    </div>
                  </div>
                  <div className="chat-header text-sm text-gray-600">
                    {chat.name}
                    <time className="text-xs text-gray-400 ml-2">
                      {chat.time}
                    </time>
                  </div>
                  <div className="chat-bubble bg-blue-100 text-gray-800">
                    {chat.msg}
                  </div>
                </div>
              ))}
            </div>

            {/* Input Chat */}
            <div className="mt-4 sticky bottom-0 left-0 right-0 bg-white p-4 border-t shadow-sm z-10">
              <div className="flex items-center gap-2">
                <button className="btn btn-sm btn-outline rounded-full px-3">
                  ➕
                </button>
                <input
                  type="text"
                  placeholder="Tulis pesan di sini..."
                  className="input input-bordered w-full rounded-full text-sm"
                />
                <button className="btn btn-primary btn-sm rounded-full">
                  Kirim
                </button>
              </div>
            </div>
          </main>
        </div>
      </main>
    </>
  );
}
