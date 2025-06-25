import { AdminLeft } from "@/app/_components/adminLeft";

export default function Komentar() {
  return (
    <>
      <main className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
        <AdminLeft />
        <div className="p-6 rounded-lg shadow-md w-screen">
          <h2 className="text-2xl font-bold mb-4">🚩 Komentar Dilaporkan</h2>

          {/* Info ringkas */}
          <div className="alert alert-warning mb-4">
            <span>
              Menampilkan hanya komentar yang telah dilaporkan oleh pengguna.
            </span>
          </div>

          {/* Filter pencarian */}
          <div className="flex flex-wrap items-center justify-between mb-4 gap-4">
            <input
              type="text"
              placeholder="Cari komentar atau pengguna..."
              className="input input-bordered w-full max-w-sm"
            />
            <select className="select select-bordered">
              <option>Urutkan: Terbaru</option>
              <option>Urutkan: Terlama</option>
              <option>Urutkan: Paling banyak laporan</option>
            </select>
          </div>

          {/* Tabel Komentar Dilaporkan */}
          <div className="overflow-x-auto">
            <table className="table table-zebra text-sm">
              <thead className="bg-base-200 text-base-content">
                <tr>
                  <th>#</th>
                  <th>Komentar</th>
                  <th>Pengguna</th>
                  <th>Jumlah Laporan</th>
                  <th>Di Postingan</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {/* Baris 1 */}
                <tr>
                  <td>1</td>
                  <td>"Desain kamu norak, out of trend!"</td>
                  <td>@userrandom</td>
                  <td>
                    <span className="badge badge-error">3 Laporan</span>
                  </td>
                  <td>
                    <a className="link text-blue-500">Lihat Karya</a>
                  </td>
                  <td className="space-x-1">
                    <button className="btn btn-xs btn-info">Detail</button>
                    <button className="btn btn-xs btn-error">Hapus</button>
                    <button className="btn btn-xs btn-success">
                      Tandai Aman
                    </button>
                  </td>
                </tr>

                {/* Baris 2 */}
                <tr>
                  <td>2</td>
                  <td>"Spam link: bit.ly/iklan123"</td>
                  <td>@iklanmurahan</td>
                  <td>
                    <span className="badge badge-error">5 Laporan</span>
                  </td>
                  <td>
                    <a className="link text-blue-500">Lihat Karya</a>
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
