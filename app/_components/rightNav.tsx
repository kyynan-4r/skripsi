export function RightNav() {
  return (
    <div className="top-20 sticky min-h-screen w-72 space-y-6 p-4">
      {/* Pengguna Baru */}
      <div className="bg-white rounded-xl p-4 shadow-md">
        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
          👥 Pengguna Baru Minggu Ini
        </h3>
        <ul className="space-y-2 text-sm text-gray-700">
          <li>
            <span className="font-medium text-blue-600">@wahuydi</span>
          </li>
          <li>
            <span className="font-medium text-blue-600">@okta.draws</span>
          </li>
          <li>
            <span className="font-medium text-blue-600">@adelux</span>
          </li>
          <li>
            <span className="font-medium text-blue-600">@rahma.fx</span>
          </li>
        </ul>
      </div>

      {/* Event Bulanan */}
      <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl p-4 shadow-md">
        <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
          🎉 Event Bulanan
        </h3>
        <div className="text-sm space-y-1 text-gray-800">
          <p>
            <strong>Challenge:</strong> Poster Peduli Lingkungan
          </p>
          <p>
            <strong>🗓️ Deadline:</strong>{" "}
            <span className="text-red-600 font-semibold">30 Juni 2025</span>
          </p>
          <button className="mt-2 btn btn-xs btn-outline btn-accent">
            Lihat Detail
          </button>
        </div>
      </div>

      {/* Tips & Trik */}
      <div className="bg-yellow-100 rounded-xl p-4 shadow-md">
        <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
          💡 Tips & Trik
        </h3>
        <p className="text-sm italic text-gray-700">
          "Gunakan{" "}
          <span className="font-semibold text-purple-600">kontras warna</span>{" "}
          untuk menonjolkan elemen utama."
        </p>
      </div>
    </div>
  );
}
