
import { useEffect, useState } from 'react'
import { IoSearch } from 'react-icons/io5'



function NavInput() {

  
  const [query, setQuery] = useState ("")
  const [result, setResult] = useState ([])
  const [loading, setLoading] = useState (false)
  const [error, setError] = useState ("")

  useEffect(()=>{

    if(!query || query.length < 2){
      setResult([])
      return
    }

    const SearchProduct = async () => {
      setLoading(true)
      try {
        const response = await fetch (`https://dummyjson.com/products/search?q=${query}`)
        if(!response.ok){
          throw new Error ("product is not available")
        } const data = await response.json()
          setResult(data.products || [])
      } catch (error) {
        setError(error?.message)
        console.log(error);
        
      }finally{
        setLoading(false)
      }
    }
    const timeoutId = setTimeout(()=>{
      SearchProduct()
    }, 500)

    return () => clearTimeout(timeoutId)
    }, [query])

  return (   
    
           <div className="flex gap-5 items-center justify-center relative">
            <div className="relative lg:w-[387px] w-full lg:px-0 px-4">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="What are you looking for?"
                className="font-poppins text-[0.75rem] font-normal leading-4 w-full h-9.5 bg-[#F5F5f5] rounded-sm border-none text-black px-3"
              />
              <IoSearch className="absolute right-6 top-2 text-[1.2rem] cursor-pointer " />
            </div>
            {result.length > 0 && (
              <ul className='w-full max-h-60 overflow-y-auto absolute top-full left-0 shadow-lg border border-gray-200 bg-[#F5F5f5] z-100 rounded-b-sm '>
                  {result.map((product)=>(
                  <li key={product.id} className='p-2 text-sm'>
                    {product.title}
                  </li>
                  ))}
                
              </ul>
            )}
            
            {loading && <div className='absolute top-2 right-10 text-xs'></div> }
            
          </div>
    
  )
}

export default NavInput 