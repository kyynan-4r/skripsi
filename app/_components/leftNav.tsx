export function LeftNav() {
  return (
    <div className="p-4 w-72 min-h-screen">
      <div className="top-20 sticky space-y-4 p-4 w-80">
        {/* Tombol Unggah */}
        <button className="shadow-md mb-6 w-full text-white hover:scale-105 transition-all btn btn-primary">
          ✨ Unggah Karyamu
        </button>

        {/* Navigasi Menu */}
        <ul className="space-y-1 font-medium text-base menu">
          <li>
            <a className="flex items-center gap-3 hover:bg-blue-100 p-3 rounded-lg transition">
              🏅 <span>Koleksi Badge</span>
              <span className="ml-auto text-xs badge badge-info">3 Baru</span>
            </a>
          </li>

          {/* <li>
            <details open className="group">
              <summary className="flex items-center gap-3 hover:bg-blue-100 p-3 rounded-lg transition">
                👥 <span>Komunitas</span>
                <svg
                  className="ml-auto group-open:rotate-90 transition-transform"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </summary>
              <ul className="space-y-1 pt-1 pl-6">
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
          </li> */}

          <li>
            <a className="flex items-center gap-3 hover:bg-blue-100 p-3 rounded-lg transition">
              🌙 <span>Tampilan</span>
              <span className="ml-auto badge-outline badge badge-sm">Mode</span>
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
