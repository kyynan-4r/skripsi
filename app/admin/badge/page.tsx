import { AdminLeft } from "@/app/_components/adminLeft";

export default function Badge() {
  return (
    <>
      <main className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
        <AdminLeft />
        <div className="p-6 rounded-lg shadow-md w-screen">
          <h2 className="text-2xl font-bold mb-6">🏅 Manajemen Badge</h2>

          {/* Tabs */}
          <div role="tablist" className="tabs tabs-bordered mb-4">
            <a role="tab" className="tab tab-active">
              Default Badge
            </a>
            <a role="tab" className="tab">
              Event Badge
            </a>
          </div>

          {/* === Tab: Default Badge === */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">
              🎯 Badge Default (Sistem)
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              Badge ini diberikan otomatis oleh sistem dan tidak bisa diubah
              admin.
            </p>

            <div className="overflow-x-auto">
              <table className="table table-zebra text-sm">
                <thead className="bg-base-200">
                  <tr>
                    <th>Ikon</th>
                    <th>Nama</th>
                    <th>Kriteria</th>
                    <th>Total Pemilik</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>🎨</td>
                    <td>Kreator Aktif</td>
                    <td>Upload 5 karya</td>
                    <td>34 pengguna</td>
                    <td>
                      <span className="badge badge-success">Aktif</span>
                    </td>
                  </tr>
                  <tr>
                    <td>💬</td>
                    <td>Rajin Komentar</td>
                    <td>Komentar 10 kali</td>
                    <td>21 pengguna</td>
                    <td>
                      <span className="badge badge-success">Aktif</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* === Tab: Event Badge === */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl font-semibold">🎉 Badge Event (Custom)</h3>
              <button className="btn btn-sm btn-primary">
                ➕ Tambah Badge
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="table table-zebra text-sm">
                <thead className="bg-base-200">
                  <tr>
                    <th>Ikon</th>
                    <th>Nama</th>
                    <th>Deskripsi</th>
                    <th>Total Pemilik</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>🌙</td>
                    <td>Pemenang Ramadan</td>
                    <td>Juara lomba desain Ramadan 2025</td>
                    <td>3 pengguna</td>
                    <td className="space-x-1">
                      <button className="btn btn-xs btn-info">Edit</button>
                      <button className="btn btn-xs btn-error">Hapus</button>
                    </td>
                  </tr>
                  <tr>
                    <td>🎤</td>
                    <td>Kontributor Webinar</td>
                    <td>Menjadi pembicara di event komunitas</td>
                    <td>5 pengguna</td>
                    <td className="space-x-1">
                      <button className="btn btn-xs btn-info">Edit</button>
                      <button className="btn btn-xs btn-error">Hapus</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
