import { useEffect, useState } from 'react'
import Cards from '../components/Cards'

const ProductPage = () => {
  const url = 'https://dummyjson.com/products'
  const [data, setData] = useState([])
  const [categori, setCategori] = useState([])
  const [categoriFilter, setCategoriFilter] = useState([])

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data.products)
        setCategoriFilter(data.products)
      })

    fetch(url + '/categories')
      .then((res) => res.json())
      .then((data) => setCategori(data.slice(0, 6)))
  }, [])
  return (
    <>
      <div className='flex gap-4 p-4'>
        <button onClick={() => setCategoriFilter(data)} className='text-zinc-50 whitespace-nowrap p-1 bg-zinc-400 rounded-md text-sm'>All</button>
        {categori.map((item) => (
          <button
            onClick={() => setCategoriFilter(data.filter((data) => data.category === item))}
            className='text-zinc-50 whitespace-nowrap p-1 bg-zinc-400 rounded-md text-sm'
            key={item}
          >
            {item}
          </button>
        ))}
      </div>
      <div className='flex flex-wrap gap-8 p-4 justify-center'>
        {categoriFilter.map((item) => (
          <Cards key={item.id} title={item.title} description={item.description} image={item.thumbnail} />
        ))}
      </div>
    </>
  )
}
export default ProductPage
