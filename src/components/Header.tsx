import { MoveRight } from 'lucide-react'
import { Link, useLocation } from '@tanstack/react-router'
import logo from '../images/health-checklist-svgrepo-com.svg'
import logoColour from '../images/health-checklist-svgrepo-com-colour.svg'
import { Button } from './ui/button'
import { Container } from './Container'

export default function Header() {
  const location = useLocation()
  const isDashboard = location.pathname === '/dashboard'

  return (
    <div className={`${!isDashboard ? '' : 'bg-blue-200'}`}>
      <Container className="flex items-center justify-between py-6">
        <Link to={'/'}>
          <h1 className="max-md:ml-4 text-xl font-semibold flex items-center">
            Health Board
            {!isDashboard ? (
              <img
                src={logo}
                alt="logo"
                className="h-8 w-8 ml-2 fill-current"
              />
            ) : (
              <img
                src={logoColour}
                alt="logo"
                className="h-8 w-8 ml-2 fill-current"
                loading="lazy"
              />
            )}
          </h1>
        </Link>
        <div className="flex gap-2">
          <div className="flex items">
            {!isDashboard && (
              <div className="flex gap-2 items-center text-md max-md:hidden">
                Click Here
                <MoveRight color="#000000" strokeWidth={2} />
              </div>
            )}
          </div>
          <Button asChild name={!isDashboard ? 'Dashboard' : 'Home'}>
            <Link to={isDashboard ? '/' : '/dashboard'}>
              {isDashboard ? 'Home' : 'Dashboard'}
            </Link>
          </Button>
        </div>
      </Container>
    </div>
  )
}
