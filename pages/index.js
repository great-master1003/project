import Link from 'next/link'

const Home = () => {
  return (
    <div>
      <h1>Welcome!!! This is Main Page.</h1>
      <ul>
      <li>
        <Link href="/login">
          <a>Login</a>
        </Link>
      </li>
      <li>
        <Link href="/register">
          <a>Register Page</a>
        </Link>
      </li>
    </ul>
    </div>
  )
}

export default Home