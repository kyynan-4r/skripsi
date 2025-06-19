import { Header } from "./_components/header";
import { LeftNav } from "./_components/leftNav";
import { RightNav } from "./_components/rightNav";

export default function HomePage() {
  return (<>
    <Header />
    <main className="flex justify-between gap-4 p-4">
      <LeftNav />

      <div className="space-y-4">
        {
          [1, 2, 3, 4, 5].map((index) => (
            <div key={index} className="max-w-2xl">
              <div className="bg-base-100 shadow-sm card">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Card Title</h2>
                  <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                  <div className="justify-end card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>

      <RightNav />
    </main>
  </>)
}