'use client'
import { AdminLeft } from "@/app/_components/adminLeft";
import Link from "next/link";

export default function Pengguna() {
  return (
    <>
      <main className="flex lg:flex-row flex-col bg-gray-100 min-h-screen">
        <AdminLeft />
        <div className="shadow p-6 rounded-xl w-screen overflow-x-auto">
          <div>
            <h2 className="mb-4 font-semibold text-xl">👥 Daftar Pengguna</h2>

            <input
              type="text"
              placeholder="Cari pengguna..."
              className="mb-4 input-bordered w-full max-w-xs input"
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
