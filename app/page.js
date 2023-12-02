"use client"

import AlquranCard from '@/components/AlquranCard'
import Header from '@/components/Header'
import Loading from '@/components/Loading'
import { useEffect, useState } from 'react'



export default function Home() {

  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {

    setLoading(true)
    const abort = new AbortController()
    const signal = abort.signal

    const data = async () => {
      await fetch("https://quran-api.santrikoding.com/api/surah", { signal })
        .then(e => e.json())
        .then(( data ) => {
          setData(prev => data)
          setLoading(false)
        })
    }

    data()

    return () => abort.abort()

  }, [])

  if(isLoading)
  return <Loading />

  return (
    <div className='bg-amber-200'>
      <Header />
      <div className='flex mt-2 justify-center px-10 gap-1 flex-wrap'>
        {data.length > 0 && data.map((e, id) => <AlquranCard key={id} data={e} />)}
      </div>
    </div>
  )
}
