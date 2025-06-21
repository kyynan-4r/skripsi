export function RightNav() {
  return (
    <div className="">
      <ul className="top-20 sticky rounded-box w-70 menu">
        <section>
          <h3 class="text-sm font-semibold text-gray-700 mb-2">
            🆕 Pengguna Baru Minggu Ini
          </h3>
          <ul class="space-y-1 text-sm text-gray-600">
            <li>@wahuydi</li>
            <li>@okta.draws</li>
            <li>@adelux</li>
            <li>@rahma.fx</li>
          </ul>
        </section>
        <div className="border-t border-gray-400 mt-5 mb-5"></div>
        <section class="mb-4">
          <h3 class="text-sm font-semibold text-gray-700 mb-2">
            📅 Event Bulanan
          </h3>
          <div class="text-sm text-gray-600 space-y-1">
            <p>
              🎨 <strong>Challenge:</strong> Poster Peduli Lingkungan
            </p>
            <p>
              🕒 <strong>Deadline:</strong> 30 Juni 2025
            </p>
          </div>
        </section>
        <div className="border-t border-gray-400 mt-5 mb-5"></div>
        <section class="mb-4">
          <h3 class="text-sm font-semibold text-gray-700 mb-2">
            💡 Tips & Trik
          </h3>
          <blockquote class="text-sm italic text-gray-500">
            "Gunakan kontras warna untuk menonjolkan elemen utama."
          </blockquote>
        </section>
      </ul>
    </div>
  );
}
