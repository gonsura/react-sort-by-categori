const Cards = ({ title, description, image }) => {
  return (
    <div className='rounded-md flex flex-col gap-2 p-4 w-96 shadow-md bg-zinc-100'>
      <img className='w-full object-cover h-32' src={image} alt='hp bagus' />
      <p className='text-xl font-semibold mb-2'>{title}</p>
      <p className='text-sm text-gray-500'>{description}</p>
    </div>
  )
}
export default Cards
