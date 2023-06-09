import nextSSRApi from "@/services/NextSSR";


export default async function Home() {
  const users = await nextSSRApi();
  console.log(users)
  return (
    <main className="">
      <div>
        Total User: {users.length}
        {
          users.map(user => <p>
            {user.name}
          </p>)
        }
      </div>
    </main>
  )
}
