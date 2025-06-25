import { AdminLeft } from "@/app/_components/adminLeft";

export default function Pengguna() {
  return (
    <>
      <main className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
        <AdminLeft />
        <div className="p-6 rounded-lg shadow-md w-screen">
          <h2 className="text-2xl font-bold mb-4">📁 Daftar Postingan</h2>

          {/* Filter & Search */}
          <div className="flex flex-wrap items-center justify-between mb-4 gap-4">
            <input
              type="text"
              placeholder="Cari judul atau pengguna..."
              className="input input-bordered w-full max-w-sm"
            />
            <select className="select select-bordered">
              <option>Status: Semua</option>
              <option>Aktif</option>
              <option>Dilaporkan</option>
              <option>Diarsipkan</option>
            </select>
          </div>

          {/* Tabel Postingan */}
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              <thead className="bg-base-200 text-base-content">
                <tr>
                  <th>#</th>
                  <th>Thumbnail</th>
                  <th>Judul</th>
                  <th>Pengguna</th>
                  <th>Like</th>
                  <th>Status</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {/* Baris 1 */}
                <tr>
                  <td>1</td>
                  <td>
                    <img
                      src="https://source.unsplash.com/random/100x100"
                      className="w-14 h-14 rounded-md"
                    />
                  </td>
                  <td>Poster Ramadan Ceria</td>
                  <td>@genzku</td>
                  <td>120 ❤️</td>
                  <td>
                    <span className="badge badge-success">Aktif</span>
                  </td>
                  <td className="space-x-1">
                    <button className="btn btn-xs btn-info">Detail</button>
                    <button className="btn btn-xs btn-error">Hapus</button>
                    <button className="btn btn-xs btn-warning">Arsip</button>
                    <button className="btn btn-xs btn-primary">
                      Unggulkan
                    </button>
                  </td>
                </tr>

                {/* Baris 2 */}
                <tr>
                  <td>2</td>
                  <td>
                    <img
                      src="https://source.unsplash.com/random/100x101"
                      className="w-14 h-14 rounded-md"
                    />
                  </td>
                  <td>Ilustrasi Malam</td>
                  <td>@nandakreatif</td>
                  <td>45 ❤️</td>
                  <td>
                    <span className="badge badge-error">Dilaporkan</span>
                  </td>
                  <td className="space-x-1">
                    <button className="btn btn-xs btn-info">Detail</button>
                    <button className="btn btn-xs btn-error">Hapus</button>
                    <button className="btn btn-xs btn-success">
                      Tandai Aman
                    </button>
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
