import { AdminLeft } from "@/app/_components/adminLeft";
import Link from "next/link";

export default function Pengguna() {
  return (
    <>
      <main className="flex lg:flex-row flex-col bg-gray-100 min-h-screen">
        <AdminLeft />
        <div className="shadow-md p-6 rounded-lg w-screen">
          <h2 className="mb-4 font-bold text-2xl">📁 Daftar Postingan</h2>

          {/* Filter & Search */}
          <div className="flex flex-wrap justify-between items-center gap-4 mb-4">
            <input
              type="text"
              placeholder="Cari judul atau pengguna..."
              className="input-bordered w-full max-w-sm input"
            />
            <select className="select-bordered select">
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
                      className="rounded-md w-14 h-14"
                    />
                  </td>
                  <td>Poster Ramadan Ceria</td>
                  <td>@genzku</td>
                  <td>120 ❤️</td>
                  <td>
                    <span className="badge badge-success">Aktif</span>
                  </td>
                  <td className="space-x-1">
                    <Link href="/admin/postingan/123">
                      <button className="btn btn-xs btn-info">Detail</button>
                    </Link>
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
                      className="rounded-md w-14 h-14"
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
