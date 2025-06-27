"use client";
import { AdminLeft } from "@/app/_components/adminLeft";
import Link from "next/link";

export default function Laporan() {
  const laporan = [
    {
      jenis: "komentar",
      id: "komentar123",
      isi: "Komentar tidak sopan pada karya Ramadhan.",
      pelapor: "@rani",
    },
    {
      jenis: "postingan",
      id: "post456",
      isi: "Postingan berisi konten plagiat.",
      pelapor: "@budi",
    },
    {
      jenis: "pengguna",
      id: "user789",
      isi: "Akun ini sering spam di kolom komentar.",
      pelapor: "@salsa",
    },
  ];
  return (
    <>
      <main className="flex lg:flex-row flex-col bg-gray-100 min-h-screen">
        <AdminLeft />
        <div className="shadow-md p-6 rounded-lg w-screen">
          <h2 className="mb-4 font-bold text-2xl">🚨 Daftar Laporan Masuk</h2>
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th>Jenis</th>
                  <th>Isi Laporan</th>
                  <th>Pelapor</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {laporan.map((item, i) => {
                  const link =
                    item.jenis === "komentar"
                      ? `/admin/komentar/${item.id}`
                      : item.jenis === "postingan"
                      ? `/admin/postingan/${item.id}`
                      : `/admin/pengguna/${item.id}`;

                  return (
                    <tr key={i}>
                      <td className="capitalize">{item.jenis}</td>
                      <td>{item.isi}</td>
                      <td>{item.pelapor}</td>
                      <td>
                        <Link href={link}>
                          <button className="btn btn-xs btn-info">
                            Detail
                          </button>
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
}
