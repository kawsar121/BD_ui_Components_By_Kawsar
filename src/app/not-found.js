import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='flex flex-col items-center mt-44'>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <button className='btn'><Link href="/">Return Home</Link></button>
    </div>
  )
}