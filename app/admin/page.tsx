import { AdminLeft } from "../_components/adminLeft";

export default function Admin() {
  return (
    <>
      <main className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
        <AdminLeft />

        <div className="p-6">
          <h1 className="text-3xl font-bold mb-6">📊 Dashboard Admin</h1>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="stats bg-primary text-primary-content">
              <div className="stat">
                <div className="stat-title">Total Pengguna</div>
                <div className="stat-value">1,204</div>
                <div className="stat-desc">+32 hari ini</div>
              </div>
            </div>

            <div className="stats bg-secondary text-secondary-content">
              <div className="stat">
                <div className="stat-title">Total Karya</div>
                <div className="stat-value">3,562</div>
                <div className="stat-desc">+120 minggu ini</div>
              </div>
            </div>

            <div className="stats bg-accent text-accent-content">
              <div className="stat">
                <div className="stat-title">Pengguna Aktif Hari ini</div>
                <div className="stat-value">200</div>
                <div className="stat-desc"></div>
              </div>
            </div>

            <div className="stats bg-error text-error-content">
              <div className="stat">
                <div className="stat-title">Laporan Aktif</div>
                <div className="stat-value">7</div>
                <div className="stat-desc">butuh ditindak</div>
              </div>
            </div>
          </div>

          {/* Grafik & Aktivitas */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Grafik Placeholder */}
            <div className="col-span-2 bg-white rounded-xl shadow p-6">
              <h2 className="text-xl font-semibold mb-4">
                📈 Aktivitas Mingguan
              </h2>
              <div className="h-40 bg-gray-100 rounded flex items-center justify-center text-gray-500">
                Grafik aktivitas akan ditampilkan di sini
              </div>
            </div>

            {/* Aktivitas Terbaru */}
            <div className="bg-white rounded-xl shadow p-6">
              <h2 className="text-xl font-semibold mb-4">
                🕒 Aktivitas Terbaru
              </h2>
              <ul className="space-y-3 text-sm">
                <li>
                  👤 <strong>AyuDesign</strong> mendaftar - 2 menit lalu
                </li>
                <li>
                  🖼️ <strong>FirmanX</strong> mengunggah karya baru
                </li>
                <li>
                  🗣️ <strong>LalaGZ</strong> komentar di "Poster Merdeka"
                </li>
                <li>
                  🚩 Laporan pelanggaran dari <strong>admin2</strong>
                </li>
              </ul>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-semibold mb-4">⚡ Aksi Cepat</h2>
            <div className="flex flex-wrap gap-4">
              <button className="btn btn-primary">🔍 Tinjau Laporan</button>
              <button className="btn btn-secondary">🏅 Tambah Badge</button>
              <button className="btn btn-accent">📢 Buat Pengumuman</button>
              <button className="btn btn-outline">➕ Posting Tips</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
