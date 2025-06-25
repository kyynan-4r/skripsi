export function LeftNav() {
  return (
    <div className="min-h-screen w-72 p-4">
      <div className="top-20 sticky p-4 space-y-4 w-80">
        {/* Tombol Unggah */}
        <button className="btn btn-primary w-full mb-6 text-white shadow-md hover:scale-105 transition-all">
          ✨ Unggah Karyamu
        </button>

        {/* Navigasi Menu */}
        <ul className="menu text-base font-medium space-y-1">
          <li>
            <a className="flex items-center gap-3 hover:bg-blue-100 p-3 rounded-lg transition">
              🏅 <span>Koleksi Badge</span>
              <span className="badge badge-info ml-auto text-xs">3 Baru</span>
            </a>
          </li>

          <li>
            <details open className="group">
              <summary className="flex items-center gap-3 hover:bg-blue-100 p-3 rounded-lg transition">
                👥 <span>Komunitas</span>
                <svg
                  className="ml-auto transition-transform group-open:rotate-90"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </summary>
              <ul className="pl-6 pt-1 space-y-1">
                <li>
                  <a className="hover:text-blue-600">🎨 Desain Grafis</a>
                </li>
                <li>
                  <a className="hover:text-blue-600">🎥 Videografi</a>
                </li>
                <li>
                  <a className="hover:text-blue-600">📷 Fotografi</a>
                </li>
                <li>
                  <a className="hover:text-blue-600">✍️ Menulis</a>
                </li>
              </ul>
            </details>
          </li>

          <li>
            <a className="flex items-center gap-3 hover:bg-blue-100 p-3 rounded-lg transition">
              🌙 <span>Tampilan</span>
              <span className="badge badge-sm badge-outline ml-auto">Mode</span>
            </a>
          </li>

          <li>
            <a className="flex items-center gap-3 hover:bg-blue-100 p-3 rounded-lg transition">
              ⚙️ <span>Pengaturan</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
