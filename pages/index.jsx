export async function getServerSideProps() {
  const {status} = await fetch("http://localhost:8000/status").then(x => x.json());
  const {username} = await fetch("http://localhost:8000/username").then(x => x.json());
  return {
    props: {
      status: status,
      username: username,
    }
  }
}

export default function Home({status, username})   {
  return (
    <div className="">


      <main className="">
        <h1 className="">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <div>Status is: {status}, your username is: {username}</div>
      </main>
    </div>
  )
}