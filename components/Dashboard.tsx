import Image from 'next/image'
import React from 'react'
import volcanic from '../app/assets/images/vulcanic.png'
import tectonic from '../app/assets/images/tectonic.png'
import smoke from '../app/assets/images/smoke.png'
import Link from 'next/link'
import { FaGooglePlay } from "react-icons/fa";
import { FaGlobe } from 'react-icons/fa6'

const Dashboard = () => {
    return (
            <div className='w-[600px] h-fit rounded-md px-4 py-2 shadow-lg border border-gray-300'>
                <div className='w-full flex flex-row justify-between items-center'>
                    <h2 className='text-2xl font-bold'>
                        Merapi Jogja Dashboard
                    </h2>
                    <span className='text-sm text-green-600 font-semibold'>
                        Normal
                    </span>
                </div>
                <div className='w-full flex flex-row justify-start mt-2 text-sm gap-2 font-light'>
                    <span>
                        Letusan terakhir:
                    </span>
                    <span>
                        150 hari yang lalu
                    </span>
                </div>
                <div className='w-full flex flex-col mt-4 gap-2 border shadow-md rounded-md p-2 bg-slate-100'>
                    <h3>
                        Aktivitas Gunung Harian
                    </h3>
                    <div className='w-full flex flex-row gap-2'>
                        <div className='w-1/3 flex flex-col bg-white justify-center items-center py-2 rounded-xl shadow-md'>
                            <span>
                                Gempa Vulkanik
                            </span>
                            <Image
                                src={volcanic}
                                className='z-10'
                                alt='vulcanic earthquake'
                                width={100}
                                height={100}
                            />
                            <span className='font-bold text-2xl'>
                                4
                            </span>
                        </div>
                        <div className='w-1/3 flex flex-col bg-white justify-center items-center py-2 rounded-xl shadow-md'>
                            <span>
                                Gempa Tektonik
                            </span>
                            <Image
                                src={tectonic}
                                className='z-10'
                                alt='Tectonic earthquake'
                                width={100}
                                height={100}
                            />
                            <span className='font-bold text-2xl'>
                                2
                            </span>
                        </div>
                        <div className='w-1/3 flex flex-col bg-white justify-center items-center py-2 rounded-xl shadow-md'>
                            <span>
                                Asap Tebal
                            </span>
                            <Image
                                src={smoke}
                                className='z-10'
                                alt='volcanic smoke'
                                width={100}
                                height={100}
                            />
                            <span className='font-bold text-2xl'>
                                1
                            </span>
                        </div>
                    </div>
                </div>

                <div className='flex flex-row justify-between'>
                    <Link
                        href={'https://play.google.com/store/apps/details?id=com.bencana.sleman&hl=id'}
                        target='_blank'
                    >
                        <div className='w-fit flex flex-row text-green-600 items-center gap-2 hover:border-green-500 rounded-md px-2 py-1 transition-all mt-2 border border-transparent'>
                            <FaGooglePlay />
                            <span className=''>
                                Lihat di Aplikasi Mobile Simantab
                            </span>
                        </div>
                    </Link>
                    <Link
                        href={'https://jeepmerapilavatour.com/'}
                        target='_blank'
                    >
                        <div className='w-fit flex flex-row items-center gap-2 hover:border-black rounded-md px-2 py-1 transition-all mt-2 border border-transparent'>
                            <FaGlobe />
                            <span className=''>
                                Sewa Jeep
                            </span>
                        </div>
                    </Link>

                </div>

            </div>
    )
}

export default Dashboard