'use client' // Error components must be Client Components

import Link from 'next/link'
import { useEffect } from 'react'

export default function Error({
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
        <div>
            <h2 className="text-2xl font-bold">Something went wrong!</h2>
            <Link href="/" className='text-blue-500 hover:underline'>Return Home</Link>
        </div>
    )
}