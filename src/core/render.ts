import { drawMap } from "~/maps";
import { DotState, MapData } from "~/maps/map.types";

export const renderMap = <T>(mapData: MapData, outputFn: (dot: string) => T) => {
  return mapData.map(col => col.map(row => outputFn(drawMap[row]))) 
}