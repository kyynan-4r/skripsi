import { AdminLeft } from "@/app/_components/adminLeft";

export default function Badge() {
  return (
    <>
      <main className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
        <AdminLeft />
        <div className="p-6 rounded-lg shadow-md w-screen">
          <h2 className="text-2xl font-bold mb-6">📢 Manajemen Pengumuman</h2>

          {/* Tombol Tambah */}
          <div className="flex justify-end mb-4">
            <button className="btn btn-primary btn-sm">
              ➕ Buat Pengumuman
            </button>
          </div>

          {/* Tabel Pengumuman */}
          <div className="overflow-x-auto">
            <table className="table table-zebra text-sm">
              <thead className="bg-base-200">
                <tr>
                  <th>📛 Judul</th>
                  <th>📅 Tanggal</th>
                  <th>📌 Status</th>
                  <th>⚙️ Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Fitur Komentar Sudah Tersedia!</td>
                  <td>23 Juni 2025</td>
                  <td>
                    <span className="badge badge-success">Aktif</span>
                  </td>
                  <td className="space-x-1">
                    <button className="btn btn-xs btn-info">Detail</button>
                    <button className="btn btn-xs btn-warning">
                      Nonaktifkan
                    </button>
                    <button className="btn btn-xs btn-error">Hapus</button>
                  </td>
                </tr>
                <tr>
                  <td>Maintenance Server</td>
                  <td>18 Juni 2025</td>
                  <td>
                    <span className="badge badge-neutral">Nonaktif</span>
                  </td>
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
