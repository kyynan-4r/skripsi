export function stat() {
  return (
    <div className="card space-y-4 ">
      <div className="p-4 bg-white rounded-lg shadow space-y-4 w-60 bg-base-100 shadow-sm h-70">
        {/* Level */}
        <div className="text-center">
          <p className="text-3xl font-bold text-purple-600">Level 2</p>
          <p className="text-sm text-gray-500">Pendatang Aktif</p>
        </div>
        {/* Progress Bar */}
        <div>
          <p className="text-sm text-gray-500">menuju level 3 : 70%</p>
          <progress
            className="progress progress-primary w-56"
            value="70"
            max="100"
          ></progress>
          <p className="text-sm text-gray-500">150/250 XP</p>
          <div className="flex justify-center items-center">
            <p className="text-sm text-gray-500 mt-4">
              Kegiatan kamu dalam mengapresiasi keren, lanjutkan ya!
            </p>
          </div>
        </div>
      </div>
      {/* Badges */}
      <div className="top-20 sticky p-4 bg-white rounded-lg shadow space-y-4 w-60 bg-base-100 shadow-sm h-89">
        <p className="text-sm font-semibold">Badge</p>
        <div className="flex flex-wrap gap-2 mt-4">
          <span className="bg-yellow-100 text-yellow-800 px-3 py-1 text-sm rounded-full">
            🔥 Aktif 30 Hari
          </span>
          <span className="bg-blue-100 text-blue-800 px-3 py-1 text-sm rounded-full">
            🎨 12 Karya
          </span>
          <span className="bg-purple-100 text-purple-800 px-3 py-1 text-sm rounded-full">
            🧠 Mentor UI/UX
          </span>
          <span className="bg-purple-100 text-grey-800 px-3 py-1 text-sm rounded-full">
            Lainnya
          </span>
        </div>

        {/* Statistik Angka */}
        <p className="text-sm font-semibold mt-4">Statistik</p>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-yellow-100 p-3 rounded-lg text-center">
            <p className="text-xl font-bold text-yellow-600">18</p>
            <p className="text-sm">Karya</p>
          </div>
          <div className="bg-blue-100 p-3 rounded-lg text-center">
            <p className="text-xl font-bold text-blue-600">230</p>
            <p className="text-sm">Like</p>
          </div>
        </div>
      </div>
    </div>
  );
}
