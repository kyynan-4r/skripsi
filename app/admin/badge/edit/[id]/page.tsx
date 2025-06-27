"use client";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function EditBadgeEvent() {
  const { id } = useParams();
  const router = useRouter();

  // Simulasi data badge berdasarkan ID
  const [badge, setBadge] = useState({
    nama: "",
    event: "",
  });

  // Dummy ambil data badge dari "database"
  useEffect(() => {
    const dummyData = {
      b2: {
        nama: "Peserta Ramadan 2025",
        event: "Ramadan 2025",
      },
      b4: {
        nama: "Peserta Lomba Desain",
        event: "Lomba Desain 2025",
      },
    };

    if (id && dummyData[id as string]) {
      setBadge(dummyData[id as string]);
    }
  }, [id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lakukan proses simpan data ke server di sini...
    alert(`Badge "${badge.nama}" berhasil diperbarui!`);
    router.push("/admin/badge");
  };

  return (
    <div className="bg-white shadow mx-auto mt-8 p-6 rounded-xl max-w-xl">
      <h2 className="mb-4 font-bold text-2xl">✏️ Edit Badge Event {id} </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="label">Nama Badge</label>
          <input
            type="text"
            className="input-bordered w-full input"
            value={badge.nama}
            onChange={(e) => setBadge({ ...badge, nama: e.target.value })}
            required
          />
        </div>

        <div>
          <label className="label">Event Terkait</label>
          <input
            type="text"
            className="bg-gray-100 input-bordered w-full input"
            value={badge.event}
            readOnly
          />
        </div>

        <div className="flex justify-between">
          <button
            type="button"
            className="btn btn-ghost"
            onClick={() => router.back()}
          >
            Batal
          </button>
          <button type="submit" className="btn btn-primary">
            Simpan Perubahan
          </button>
        </div>
      </form>
    </div>
  );
}
