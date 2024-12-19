'use client'

import { FormEvent, useState } from 'react'
import Link from 'next/link'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'next/navigation';
import firebase from '../../lib/firebase/firebase';
import { auth } from "../../lib/firebase/firebaseConfig"

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const [error, setError] = useState<string | null>(null);
  const[ newUser, setNewUser] = useState()
  const [signUpError, setSignUpError] = useState(null)

  const handleSignUp = async (e) => {
    e.preventDefault()
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      router.push("/") // Navigate to the home page
    } catch (error) {
      console.error("Error signing up:", error)
      setSignUpError(error.message)
    }
  }
  

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Register</h1>
      <form onSubmit={handleSignUp} className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full border p-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border p-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full border p-2 rounded"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="confirmPassword" className="block mb-2">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="w-full border p-2 rounded"
          />
        </div>
        <button type="submit" className="w-full bg-primary-300 text-white px-6 py-2 rounded hover:bg-primary-500 transition">
          Register
        </button>
      </form>
      <p className="mt-4 text-center">
        Already have an account? <Link href="/login" className="text-primary-500 hover:underline">Login here</Link>
      </p>
    </div>
  )
}

