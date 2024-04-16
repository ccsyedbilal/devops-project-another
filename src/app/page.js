import { redirect } from "next/navigation";
import { auth, signOut} from "./auth";

export default async function Home() {
  const session = await auth();


  if(!session) redirect("/api/auth/signin")
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      <div> <h1>Protected Page</h1> </div>
       <hr />
       

      <form
      action={async () => {
        "use server"
        await signOut()
      }}
    >
     <button className="px-5 py-1 border border-green-400">
       Logout
      </button>
    </form>

      <hr />
      <div>
        {session.user.name}
        <p> email address : {
          session.user.email
          } </p>
      </div>
      </div>
    </main>
  );
}
