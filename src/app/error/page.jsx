import { CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Component() {
  return (
    <Card className="flex flex-col items-center justify-center min-h-screen text-center">
      <CardContent className="space-y-4">
        <h1 className="text-3xl font-bold">Oops! Something went wrong!</h1>
        <p className="text-sm">Please contact support to resolve this issue.</p>
      </CardContent>
      <CardFooter>
        <Link className="w-full" href="/login">
          <Button>Back to login</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

