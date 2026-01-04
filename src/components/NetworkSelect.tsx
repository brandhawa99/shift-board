import { memo } from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/select";
import type { Dispatch, SetStateAction } from "react";


type NetworkSelectProps = {
  setNetwork: Dispatch<SetStateAction<string>>
}

const NetworkSelect = ({ setNetwork }: NetworkSelectProps) => {
  return (
    <Select onValueChange={setNetwork} defaultValue="normal">
      <SelectTrigger className="w-59 border-black text-black">
        <SelectValue placeholder="Simulations" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Simulations</SelectLabel>
          <SelectItem value="normal">Normal Speed</SelectItem>
          <SelectItem value="slow">Slow Speed</SelectItem>
          <SelectItem value="empty">No Items</SelectItem>
          <SelectItem value="error">Error</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default memo(NetworkSelect)