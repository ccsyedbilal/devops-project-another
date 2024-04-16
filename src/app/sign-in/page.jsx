
import Link from "next/link";
import UserAuthForm from "@/components/user-auth-form";
import ModeTog from "@/components/ModeTog";
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"


export default async function Component() {
  

  return (
    <div key="1" className="flex flex-col min-h-screen">
      
  <header
      className="flex h-18 items-center justify-between px-10 py-5 md:px-6 lg:px-8 dark:bg-gray-800"
      style={{
        border: "transparent white",
        height: "top",
      }}
    >
      <div className="flex items-center space-x-2">
      <Link href="#" className="flex items-center space-x-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
      </svg>
        <span className="text-lg font-semibold">Builder HUC</span>
        </Link>
        <Badge className="text-xs" variant="secondary">
          Beta
        </Badge>
      </div>
      <nav className="hidden md:flex space-x-4">
        
      <Button variant="outline">
            <Link href="/login">Contact</Link>
          </Button>
        
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button className="md:hidden" size="icon" variant="outline">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <nav className="grid gap-4 py-6">
            <Link className="text-lg font-semibold hover:underline" href="#">
              Home
            </Link>
            <Link className="text-lg font-semibold hover:underline" href="#">
              Docs
            </Link>
            <Link className="text-lg font-semibold hover:underline" href="#">
              Contact
            </Link>
            <Link className="text-lg font-semibold hover:underline" href="#">
              Pricing
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  <main className="flex-1 py-6 flex items-center justify-center">
    <div className="lg:p-8 w-full md:w-[40%] lg:w-[30%] flex items-center justify-center">
      <div className="mx-auto flex flex-col justify-center space-y-6">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Create an account
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your email below to create your account
          </p>
        </div>
        <UserAuthForm />
        <p className="px-8 text-center text-sm text-muted-foreground">
          By clicking continue, you agree to our{" "}
          <Link
            href="/terms"
            className="underline underline-offset-4 hover:text-primary"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            href="/privacy"
            className="underline underline-offset-4 hover:text-primary"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  </main>
  <footer className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 px-4 py-6 md:px-6 bg-gray-100 dark:bg-gray-800">
    <a className="flex items-center gap-2" href="#">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
      </svg>
      <span className="sr-only">Acme Inc</span>
    </a>
    <p className="text-sm text-gray-500 dark:text-gray-400">© 2024</p>
    <p className="text-sm text-gray-500 dark:text-gray-400 hover:text-green-500 hover:rounded-full">
      <span className="text-lg">•</span>
      All systems normal.
    </p>
    <nav className="flex items-center gap-4 md:gap-6">
      <Link className="text-sm hover:underline flex items-center gap-2" href="#">
        <HomeIcon className="h-4 w-4" />
        <span>Home</span>
      </Link>
      <Link className="text-sm hover:underline flex items-center gap-2" href="#">
        <FileTextIcon className="h-4 w-4" />
        <span>Docs</span>
      </Link>
      <Link className="text-sm hover:underline flex items-center gap-2" href="#">
        <HelpCircleIcon className="h-4 w-4" />
        <span>Help</span>
      </Link>
      <Link className="text-sm hover:underline flex items-center gap-2" href="#">
        <FileTextIcon className="h-4 w-4" />
        <span>Legal</span>
      </Link>
    </nav>
    <ModeTog />
  </footer>
</div>

  );
}

function FileTextIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" x2="8" y1="13" y2="13" />
      <line x1="16" x2="8" y1="17" y2="17" />
      <line x1="10" x2="8" y1="9" y2="9" />
    </svg>
  )
}


function HelpCircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <path d="M12 17h.01" />
    </svg>
  )
}


function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}

function FlameIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  )
}


function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}