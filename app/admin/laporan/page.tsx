import { AdminLeft } from "@/app/_components/adminLeft";

export default function Laporan() {
  return (
    <>
      <main className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
        <AdminLeft />
        <div className="p-6 rounded-lg shadow-md w-screen">
          <h2 className="text-2xl font-bold mb-4">🚨 Laporan Masuk</h2>

          {/* Filter */}
          <div className="flex flex-wrap items-center justify-between mb-4 gap-4">
            <select className="select select-bordered">
              <option>Semua Jenis</option>
              <option>Karya</option>
              <option>Komentar</option>
              <option>Pengguna</option>
            </select>
            <select className="select select-bordered">
              <option>Status: Semua</option>
              <option>Pending</option>
              <option>Ditindaklanjuti</option>
              <option>Diabaikan</option>
            </select>
          </div>

          {/* Tabel Laporan */}
          <div className="overflow-x-auto">
            <table className="table table-zebra text-sm">
              <thead className="bg-base-200 text-base-content">
                <tr>
                  <th>#</th>
                  <th>Pelapor</th>
                  <th>Jenis</th>
                  <th>Alasan</th>
                  <th>Target</th>
                  <th>Status</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {/* Baris 1 */}
                <tr>
                  <td>1</td>
                  <td>@nandakreatif</td>
                  <td>
                    <span className="badge badge-warning">Komentar</span>
                  </td>
                  <td>"Komentar mengandung kata kasar"</td>
                  <td>
                    <a className="link text-blue-500">Lihat Komentar</a>
                  </td>
                  <td>
                    <span className="badge badge-info">Pending</span>
                  </td>
                  <td className="space-x-1">
                    <button className="btn btn-xs btn-info">Detail</button>
                    <button className="btn btn-xs btn-success">Tindak</button>
                    <button className="btn btn-xs btn-ghost">Abaikan</button>
                  </td>
                </tr>

                {/* Baris 2 */}
                <tr>
                  <td>2</td>
                  <td>@gzt</td>
                  <td>
                    <span className="badge badge-error">Karya</span>
                  </td>
                  <td>"Karya plagiat, mirip dari Behance"</td>
                  <td>
                    <a className="link text-blue-500">Lihat Karya</a>
                  </td>
                  <td>
                    <span className="badge badge-success">Ditindaklanjuti</span>
                  </td>
                  <td className="space-x-1">
                    <button className="btn btn-xs btn-info">Detail</button>
                  </td>
                </tr>

                {/* Baris 3 */}
                <tr>
                  <td>3</td>
                  <td>@anonzz</td>
                  <td>
                    <span className="badge badge-neutral">Pengguna</span>
                  </td>
                  <td>"Mengirim spam di komentar"</td>
                  <td>
                    <a className="link text-blue-500">@akunberisik</a>
                  </td>
                  <td>
                    <span className="badge badge-error">Diabaikan</span>
                  </td>
                  <td className="space-x-1">
                    <button className="btn btn-xs btn-info">Detail</button>
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
