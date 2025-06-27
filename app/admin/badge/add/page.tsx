'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { v4 as uuidv4 } from 'uuid' // (optional, kalau kamu pake uuid)

export default function TambahBadgeEvent() {
  const router = useRouter()

  const [form, setForm] = useState({
    nama: '',
    event: '',
  })

  const daftarEvent = ['Ramadan 2025', 'Lomba Desain', 'Anniversary Ramein']

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Contoh ID otomatis (pakai uuid / timestamp / auto-increment dummy)
    const idBaru = `badge-${Date.now()}`

    console.log('Badge Baru:', {
      id: idBaru,
      ...form
    })

    alert(`Badge "${form.nama}" berhasil ditambahkan!`)
    router.push('/admin/badge')
  }

  return (
    <div className="bg-white shadow mx-auto mt-8 p-6 rounded-xl max-w-xl">
      <h2 className="mb-4 font-bold text-2xl">➕ Tambah Badge Event</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="label">Nama Badge</label>
          <input
            type="text"
            className="input-bordered w-full input"
            placeholder="Contoh: Peserta Ramadan 2025"
            value={form.nama}
            onChange={(e) => setForm({ ...form, nama: e.target.value })}
            required
          />
        </div>

        <div>
          <label className="label">Pilih Event Terkait</label>
          <select
            className="w-full select-bordered select"
            value={form.event}
            onChange={(e) => setForm({ ...form, event: e.target.value })}
            required
          >
            <option value="" disabled>Pilih event...</option>
            {daftarEvent.map((event, i) => (
              <option key={i} value={event}>{event}</option>
            ))}
          </select>
        </div>

        <div className="flex justify-between">
          <button type="button" className="btn btn-ghost" onClick={() => router.back()}>
            Batal
          </button>
          <button type="submit" className="btn btn-primary">Simpan Badge</button>
        </div>
      </form>
    </div>
  )
}
