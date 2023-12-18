import { renderMap } from '~/core';
import { drawMap, level1 } from '~/maps';

export default function Home() {
  const renderedData = renderMap(level1, (dot) => (
    <div lh-10 text-center text-8 w-10 h-10>
      {dot}
    </div>
  ))
  return (
    <main px-4 py-10 flex justify-center>
      <div style={{
        "grid-template-rows": `repeat(${renderedData.length},minmax(0,1fr))`,
        "grid-template-columns": `repeat(${renderedData[0].length},minmax(0,1fr))`,
      }} grid grid-cols-16 grid-rows-16 gap-0 rounded-md overflow-hidden bg-slate-200>
        {renderedData}
      </div>
    </main>
  )
}