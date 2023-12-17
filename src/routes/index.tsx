import { A } from 'solid-start'

type DotState = 0 | 1 | 2 | 3 | 4 

export default function Home() {
  // const map = Array(16).fill(Array(16).fill(1))
  // console.log(map);
  const rawMapData: DotState[][] = [
    Array(8).fill(0),
    Array(8).fill(0),
    Array(8).fill(0),
    Array(8).fill(0),
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 3, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 2, 4, 2, 3, 0],
    [0, 3, 1, 2, 1, 0, 0, 0],
    [0, 0, 0, 0, 2, 0, 0, 0],
    [0, 0, 0, 0, 3, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    Array(8).fill(0),
    Array(8).fill(0),
    Array(8).fill(0),
    Array(8).fill(0),
  ]
  console.log(rawMapData);
  const map = rawMapData.map(col => {
    return [...Array(4).fill(0), ...col, ...Array(4).fill(0)]
  }) 

  const drawMap = ['🪨', '', '📦', '🎯', '🚶‍♂️', '💠']

  console.log(map);  

  return (
    <main px-4 py-10 flex justify-center>
      <div w-192 grid grid-cols-16 grid-rows-16 gap-0 rounded-md overflow-hidden  bg-slate-200>
        {map.map((col, colIndex) => {
          return col.map((row, rowIndex) => (
            <div lh-10 text-center text-10 w-12 h-12>
              {drawMap[row]}
            </div>
          ))
        })}
      </div>
    </main>
  )
}