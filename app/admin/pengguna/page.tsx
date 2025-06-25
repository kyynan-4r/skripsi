import { AdminLeft } from "@/app/_components/adminLeft";

export default function Pengguna() {
  return (
    <>
      <main className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
        <AdminLeft />
        <div className="overflow-x-auto rounded-xl shadow p-6 w-screen">
          <div>
            <h2 className="text-xl font-semibold mb-4">👥 Daftar Pengguna</h2>

            <input
              type="text"
              placeholder="Cari pengguna..."
              className="input input-bordered mb-4 w-full max-w-xs"
            />
              <table className="table table-zebra">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Profil</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                {[1, 2, 3, 4, 5].map((index) => (
                <tbody key={index} >
                  <tr>
                    <th>1</th>
                    <td>
                      <img
                        src="https://i.pravatar.cc/40"
                        className="rounded-full w-10 h-10"
                      />
                    </td>
                    <td>@ayuDesign</td>
                    <td>ayu@email.com</td>
                    <td>User</td>
                    <td>
                      <span className="badge badge-success">Aktif</span>
                    </td>
                    <td className="space-x-2">
                      <button className="btn btn-xs btn-info">Detail</button>
                      <button className="btn btn-xs btn-warning">
                        Suspend
                      </button>
                      <button className="btn btn-xs btn-error">Hapus</button>
                    </td>
                  </tr>
                  {/* Tambah baris lainnya */}
                </tbody>
                ))}
              </table>
            
          </div>
        </div>
      </main>
    </>
  );
}
