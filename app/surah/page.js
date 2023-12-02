"use client"

import Loading from '@/components/Loading';
import React, { useEffect, useState } from 'react'
import localFont from 'next/font/local'
import Link from 'next/link';
import Header from '@/components/Header';
import { useRouter, useSearchParams } from 'next/navigation';
const myFont = localFont({
    src: '../../assets/IsepMisbah.ttf',
    display: 'swap'
})


const Surah = () => {
    const searhParam = useSearchParams()
    const  surahId  = searhParam.get('id')

    const [data, setData] = useState({})
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {

        setLoading(true)
        const abort = new AbortController()
        const signal = abort.signal

        const data = async () => {
            await fetch(`https://quran-api.santrikoding.com/api/surah/${surahId}`, { signal, cache: 'no-store' })
                .then(e => e.json())
                .then((data) => {
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
        <div className='bg-amber-200 p-2 md:p-5'>
            {/* <Header /> */}
            <div className='border border-amber-900 p-5 rounded-md'>
                <div className='mb-10'><Link className='dark:text-white' href="/">&lt; Kembali ke daftar surah</Link></div>
                {<>

                    {(surahId != 1 && surahId != 9) && <Basmallah />}

                    {data.ayat.map(e => {

                        return (
                            <CardAyah key={e.id} ayah={e} />
                        )

                    })}</>}
            </div>
        </div>
    )
}


const CardAyah = ({ ayah }) => {
    return (
        <div className='flex gap-3 flex-col justify-between border-b border-amber-400 py-7 dark:text-white'>
            <div className='order-2 mt-2 leading-relaxed'>
                 
                <table>
                    <tbody>
                        <tr>
                            <td valign='top'>{ayah.nomor}.{` `}</td>
                            <td className='text-justify'>{ayah.idn}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div style={{lineHeight: "3"}} className={`text-right ${myFont.className} text-2xl`}>
                {ayah.ar}
            </div>
        </div>
    )
}

const Basmallah = () => {
    return <div className={`text-center text-2xl my-5 ${myFont.className} dark:text-white`}>بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</div>
}

export default Surah