import { MoveRight } from "lucide-react";
import logo from "../health-checklist-svgrepo-com.svg"
import { Button } from "./ui/button";
import { Container } from "./Container";

export default function Header() {
  return (
    <Container className="flex items-center justify-between p-4" >
      <h1 className="ml-4 text-xl font-semibold flex items-center">
        Health Board
        <img src={logo} alt="logo" className="h-8 w-8 ml-2" />
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
    </Container>
  )
}
