import Link from 'next/link'

export default function NotFound() {
    return (
        <div>
            <h2 className='text-2xl font-bold'>404 - Not Found</h2>
            <p>Could not find requested resource</p>
            <Link href="/" className='text-blue-500 hover:underline'>Return Home</Link>
        </div>
    )
}