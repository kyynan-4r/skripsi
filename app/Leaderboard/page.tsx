import { Header } from "../_components/header";

export default function Leaderboard() {
  return (
    <>
      <Header />
      <main className="flex justify-center gap-4 bg-blue-100 p-4 min-h-screen">
        <div>
          <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl p-6 text-white shadow-md mb-6">
            <h2 className="text-2xl font-bold mb-1 text-center gap-2">
              🏆 Leaderboard Komunitas
            </h2>
            <p className="text-sm text-white/90 text-center">
              Siapa yang paling aktif minggu ini? Cek di bawah.
            </p>

            <div className="flex flex-wrap gap-2 mt-4 flex justify-center">
              <button className="btn btn-sm bg-white text-purple-700 hover:bg-purple-100">
                🔥 Paling Aktif
              </button>
              <button className="btn btn-sm bg-white text-purple-700 hover:bg-purple-100">
                🎖️ Badge Terbanyak
              </button>
              <button className="btn btn-sm bg-white text-purple-700 hover:bg-purple-100">
                🏅 Level Tertinggi
              </button>
              <button className="btn btn-sm bg-white text-purple-700 hover:bg-purple-100">
                🗨️ Sang Komentator
              </button>
            </div>
          </div>
          <div className="mt-6 space-y-6">
            {/* PODIUM TOP 3 */}
            <div className="flex justify-center gap-4">
              {/* Posisi #2 */}
              <div className="bg-gray-800 text-white p-3 rounded-xl w-28 text-center shadow opacity-80">
                <img
                  src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp"
                  className="w-full h-20 object-cover rounded mb-2"
                />
                <p className="text-sm font-bold truncate">wahuydi</p>
                <p className="text-xs text-gray-300 mt-1">⭐ 26</p>
                <p className="text-lg mt-1">🥈</p>
              </div>

              {/* Posisi #1 */}
              <div className="bg-gray-800 text-white p-4 rounded-xl w-32 text-center shadow scale-110 border-2 border-blue-400">
                <img
                  src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp"
                  className="w-full h-24 object-cover rounded mb-2"
                />
                <p className="text-sm font-bold truncate">adi ajah</p>
                <p className="text-xs text-gray-300 mt-1">⭐ 30</p>
                <p className="text-lg mt-1">🥇</p>
              </div>

              {/* Posisi #3 */}
              <div className="bg-gray-800 text-white p-3 rounded-xl w-28 text-center shadow opacity-80">
                <img
                  src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp"
                  className="w-full h-20 object-cover rounded mb-2"
                />
                <p className="text-sm font-bold truncate">Nostalgia</p>
                <p className="text-xs text-gray-300 mt-1">⭐ 25</p>
                <p className="text-lg mt-1">🥉</p>
              </div>
            </div>

            {/* LIST RANKING 4–10 */}
            <div className="space-y-3">
              {[
                { rank: 4, title: "Bro nge-cheat", likes: 18 },
                { rank: 5, title: "Trio apa lagi ini", likes: 18 },
                { rank: 6, title: "Ofkors", likes: 17 },
                { rank: 7, title: "Bruhhh 💀", likes: 17 },
                { rank: 8, title: "Khayalan cowok terlalu sesat", likes: 17 },
              ].map((item) => (
                <div
                  key={item.rank}
                  className="flex justify-between items-center bg-gray-900 text-white p-3 rounded-lg shadow"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold text-gray-400 w-5">
                      {item.rank}
                    </span>
                    <img
                      src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp"
                      className="w-8 h-8 rounded object-cover"
                    />
                    <p className="text-sm truncate max-w-[160px]">
                      {item.title}
                    </p>
                  </div>
                  <p className="text-xs text-gray-300">⭐ {item.likes}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
