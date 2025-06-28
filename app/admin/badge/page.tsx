import { AdminLeft } from "@/app/_components/adminLeft";
import Link from "next/link";

export default function Badge() {
  return (
    <>
      <main className="flex lg:flex-row flex-col bg-gray-100 min-h-screen">
        <AdminLeft />
        <div className="shadow-md p-6 rounded-lg w-screen">
          <h2 className="mb-6 font-bold text-2xl">🏅 Manajemen Badge</h2>

          {/* Tabs */}
          <div role="tablist" className="mb-4 tabs-bordered tabs">
            <a role="tab" className="tab tab-active">
              Default Badge
            </a>
            <a role="tab" className="tab">
              Event Badge
            </a>
          </div>

          {/* === Tab: Default Badge === */}
          <div className="mb-8">
            <h3 className="mb-2 font-semibold text-xl">
              🎯 Badge Default (Sistem)
            </h3>
            <p className="mb-4 text-gray-500 text-sm">
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
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold text-xl">🎉 Badge Event (Custom)</h3>
              <Link href="/admin/badge/add">
                <button className="btn btn-primary btn-sm">
                  ➕ Tambah Badge
                </button>
              </Link>
            </div>

            <div className="overflow-x-auto">
              <table className="table table-zebra text-sm">
                <thead className="bg-base-200">
                  <tr>
                    <th>Ikon</th>
                    <th>Nama</th>
                    <th>Deskripsi</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>🌙</td>
                    <td>Pemenang Ramadan</td>
                    <td>Juara lomba desain Ramadan 2025</td>
                    <td className="space-x-1">
                      <Link href="/admin/badge/1">
                        <button className="btn btn-xs btn-info">Edit</button>
                      </Link>

                      <button className="btn btn-xs btn-error">Hapus</button>
                    </td>
                  </tr>
                  <tr>
                    <td>🎤</td>
                    <td>Kontributor Webinar</td>
                    <td>Menjadi pembicara di event komunitas</td>
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
