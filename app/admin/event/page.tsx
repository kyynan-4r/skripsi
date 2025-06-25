import { AdminLeft } from "@/app/_components/adminLeft";

export default function Event() {
  return (
    <>
      <main className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
        <AdminLeft />
        <div className="p-6 rounded-lg shadow-md w-screen">
          <h2 className="text-2xl font-bold mb-6">
            📅 Manajemen Event Komunitas
          </h2>

          {/* Tombol Tambah Event */}
          <div className="flex justify-end mb-4">
            <button className="btn btn-primary btn-sm">
              ➕ Tambah Event Baru
            </button>
          </div>

          {/* Tabel Event */}
          <div className="overflow-x-auto">
            <table className="table table-zebra text-sm">
              <thead className="bg-base-200">
                <tr>
                  <th>📛 Judul</th>
                  <th>🗓️ Tanggal</th>
                  <th>🎖️ Badge Hadiah</th>
                  <th>📌 Status</th>
                  <th>👥 Peserta</th>
                  <th>⚙️ Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Lomba Poster Kemerdekaan</td>
                  <td>1–17 Agustus 2025</td>
                  <td>
                    <span className="badge badge-info">🇮🇩 Pahlawan Desain</span>
                  </td>
                  <td>
                    <span className="badge badge-success">Aktif</span>
                  </td>
                  <td>12 peserta</td>
                  <td className="space-x-1">
                    <button className="btn btn-xs btn-info">Detail</button>
                    <button className="btn btn-xs btn-warning">
                      Nonaktifkan
                    </button>
                    <button className="btn btn-xs btn-error">Hapus</button>
                  </td>
                </tr>
                <tr>
                  <td>Challenge Vector Ramadhan</td>
                  <td>10–20 Maret 2025</td>
                  <td>
                    <span className="badge badge-warning">
                      🌙 Vector Ramadan
                    </span>
                  </td>
                  <td>
                    <span className="badge badge-neutral">Selesai</span>
                  </td>
                  <td>28 peserta</td>
                  <td className="space-x-1">
                    <button className="btn btn-xs btn-info">Detail</button>
                    <button className="btn btn-xs btn-ghost">Hapus</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
}
