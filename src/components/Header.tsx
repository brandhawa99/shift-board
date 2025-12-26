import { MoveRight } from "lucide-react";
import { Link, useLocation } from "@tanstack/react-router";
import logo from "../images/health-checklist-svgrepo-com.svg"
import { Button } from "./ui/button";
import { Container } from "./Container";

export default function Header() {
  // based on route, show different header content
  const location = useLocation()
  const isDashboard = location.pathname === "/dashboard"


  return (
    <Container className="flex items-center justify-between py-6" >
      <Link to={"/"}>
        <h1 className="max-md:ml-4 text-xl font-semibold flex items-center">
          Health Board
          <img src={logo} alt="logo" className="h-8 w-8 ml-2" />
        </h1>
      </Link>
      <div className="flex gap-2">
        <div className="flex items">
          <div className="flex gap-2 items-center text-md">
            Click Here
            <MoveRight color="#000000" strokeWidth={2} />
          </div>
        </div>
        <Button>
          <Link to={isDashboard ? "/" : "/dashboard"}>
            {isDashboard ? "Home" : "Dashboard"}
          </Link>
        </Button>
      </div>
    </Container >
  )
}