import { MoveRight } from "lucide-react";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="p-4 flex items-center bg-white justify-between">
      <h1 className="ml-4 text-xl font-semibold">
        Health Board
      </h1>
      <div className="flex gap-2">
        <div className="flex gap-2 items-center text-md">
          check out the dashboard
          <MoveRight color="#000000" strokeWidth={2} />
        </div>
        <Button >
          Login
        </Button>
      </div>
    </header>
  )
}
