import { Link } from 'react-router-dom'
import Cards from './components/Cards'

function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <h1 class='text-center font-bold text-2xl p-5'>Albun panini</h1>

      <div className='grid grid-cols-6 gap-5 my-5'>
        <Cards imgSrc="https://ca-times.brightspotcdn.com/dims4/default/bb9d842/2147483647/strip/true/crop/3843x2562+0+0/resize/1200x800!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F21%2F43%2Fc0c750da7dec1cd43dcc511bde1a%2F2363e2d9c9af494f97b405b0f5f73d2b" name="MESSI" />
        <Cards imgSrc="https://ca-times.brightspotcdn.com/dims4/default/bb9d842/2147483647/strip/true/crop/3843x2562+0+0/resize/1200x800!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F21%2F43%2Fc0c750da7dec1cd43dcc511bde1a%2F2363e2d9c9af494f97b405b0f5f73d2b" name="MESSI" />

        <Cards imgSrc="https://ca-times.brightspotcdn.com/dims4/default/bb9d842/2147483647/strip/true/crop/3843x2562+0+0/resize/1200x800!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F21%2F43%2Fc0c750da7dec1cd43dcc511bde1a%2F2363e2d9c9af494f97b405b0f5f73d2b" name="MESSI" />

        <Cards imgSrc="https://ca-times.brightspotcdn.com/dims4/default/bb9d842/2147483647/strip/true/crop/3843x2562+0+0/resize/1200x800!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F21%2F43%2Fc0c750da7dec1cd43dcc511bde1a%2F2363e2d9c9af494f97b405b0f5f73d2b" name="MESSI" />

        <Cards imgSrc="https://ca-times.brightspotcdn.com/dims4/default/bb9d842/2147483647/strip/true/crop/3843x2562+0+0/resize/1200x800!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F21%2F43%2Fc0c750da7dec1cd43dcc511bde1a%2F2363e2d9c9af494f97b405b0f5f73d2b" name="MESSI" />

        <Cards imgSrc="https://ca-times.brightspotcdn.com/dims4/default/bb9d842/2147483647/strip/true/crop/3843x2562+0+0/resize/1200x800!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F21%2F43%2Fc0c750da7dec1cd43dcc511bde1a%2F2363e2d9c9af494f97b405b0f5f73d2b" name="MESSI" />
      </div>
      
    </div>
  )
}

export default App
