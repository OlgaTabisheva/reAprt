'use client'
import { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Link from 'next/link';

export default function LoginPage() {

  const [email, setEmail] = useState<string>("");
  const [passwordOne, setPasswordOne] = useState<string>("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const [error, setError] = useState(null);
  const[ newUser, setNewUser] = useState()
  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault()
  //   // Handle login logic here
  //   console.log({ email, password })
  // }
  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        setNewUser(
        {
            email: user.email,
            id: 'user.uid',
            displayName: 'user.displayName',
            photoURL: 'user.photoURL',
            phoneNumber: 'user.phoneNumber,',
            token: 'user.refreshToken',
      }
        );

      })
      .then(() => {
        setTimeout(() => {
          console.log(newUser,'newUser')
        }, 1000);
      })
      .catch((e) => {
        console.log(e,'eee')
      });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Login</h1>
      <form onSubmit={()=>handleLogin} className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            className="w-full border p-2 rounded"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="passwordOne" className="block mb-2">Password</label>
          <input
            type="passwordOne"
            id="passwordOne"
            value={passwordOne}
            onChange={(event) => setPasswordOne(event.target.value)}
            required
            className="w-full border p-2 rounded"
          />
        </div>
        <button type="submit" className="w-full bg-primary-300 text-white px-6 py-2 rounded hover:bg-primary-500 text-white transition">
          Login
        </button>
      </form>
      <p className="mt-4 text-center">
        Don't have an account? <Link href="/register" className="text-primary-500 hover:underline">Register here</Link>
      </p>
 
    </div>
  )
}

