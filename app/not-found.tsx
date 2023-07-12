'use client' // Error components must be Client Components
 
import Title from '@/components/Title'
import Link from 'next/link'
import { useEffect } from 'react'


 
export default function NotFound({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Title />
      
      <h2 className="text-2xl font-semibold mt-4">Oops! Page Not Found</h2>
      <p className="text-gray-500 mt-2">
        The page you are looking for does not exist.
      </p>
      <Link href = "/"
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600 transition-colors"
        onClick={reset}
      >
        Try Again
      </Link>
      </main>
  )
}