import { drawMap, level1 } from '~/maps';

export default function Home() {
  const mapData = level1
  return (
    <main px-4 py-10 flex justify-center>
      <div style={{
        "grid-template-rows": `repeat(${mapData.length},minmax(0,1fr))`,
        "grid-template-columns": `repeat(${mapData[0].length},minmax(0,1fr))`,
      }} grid grid-cols-16 grid-rows-16 gap-0 rounded-md overflow-hidden bg-slate-200>
        {mapData.map(col => col.map(row => (
          <div lh-10 text-center text-8 w-10 h-10>
            {drawMap[row]}
          </div>
        )))}
      </div>
    </main>
  )
}