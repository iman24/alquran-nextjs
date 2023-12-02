import { useRouter } from "next/navigation"
import localFont from "next/font/local"
const myFont = localFont({
    src: '../assets/IsepMisbah.ttf',
    display: 'swap'
  })

const AlquranCard = (props) => {

    const { data } = props
    const router = useRouter()

    const toDetail = (id) => {
        router.push(`/surah?id=${id}`)
    }

    return (
        <div onClick={() => toDetail(data.nomor)} className='transition ease-in-out delay-100 hover:scale-110 dark:bg-gray-800 dark:text-slate-200 dark:shadow-sm dark:shadow-gray-900 dark:border-slate-900 hover:bg-amber-950 hover:text-slate-200 hover:shadow-sm hover:shadow-amber-950 w-[400px] p-3 m-2 border border-amber-900 mx-auto shadow-md rounded-lg cursor-pointer'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center'>
                    <span className='text-xl font-semibold'>{data.nomor}. {data.nama_latin}</span>
                    <span className='text-xs ml-2'>
                        {data.jumlah_ayat} ayat
                    </span>
                </div>
                <div className={`text-xl font-semibold ${myFont.className} `}>{data.nama}</div>
            </div>
            <p className=' my-1'>{data.arti} - {data.tempat_turun}</p>
        </div>
    )
}

export default AlquranCard