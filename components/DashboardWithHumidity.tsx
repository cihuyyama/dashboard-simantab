"use client"
import Image from 'next/image'
import React from 'react'
import volcanic from '../app/assets/images/vulcanic.png'
import tectonic from '../app/assets/images/tectonic.png'
import smoke from '../app/assets/images/smoke.png'
import Link from 'next/link'
import { FaGooglePlay } from "react-icons/fa";
import { FaGlobe } from 'react-icons/fa6'
import { parseWeatherData } from '@/utils/dataParser'
import HumidityChart from './HumidityChart'
import { TimeData } from '@/types/type'
import { Separator } from './ui/separator'
import { Lightbulb } from 'lucide-react'

const DashboardWithHumidity = () => {
    const [data, setData] = React.useState<any>()
    const [humidityData, setHumidityData] = React.useState<TimeData[]>([]);
    const [temperatureData, setTemperatureData] = React.useState<TimeData[]>([]);
    const [windSpeedData, setWindSpeedData] = React.useState<TimeData[]>([]);
    const [windDirectionData, setWindDirectionData] = React.useState<TimeData[]>([]);
    const [weatherData, setWeatherData] = React.useState<TimeData[]>([]);

    React.useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://cuaca-gempa-rest-api.vercel.app/weather/di-yogyakarta/sleman')
            const data = await response.json()
            const parsed = parseWeatherData(data.data)
            setData(parsed)
            setHumidityData(parsed.humidity.times)
            setTemperatureData(parsed.temperature.times)
            setWindSpeedData(parsed.windSpeed.times)
            setWeatherData(parsed.weather.times)
            console.log(data.data)
        }

        fetchData()
    }, [])

    return (
        <div className='md:w-[600px] h-fit rounded-md px-4 py-2 shadow-lg border border-gray-300'>
            <div className='w-full flex flex-row justify-between items-center'>
                <h2 className='text-2xl font-bold'>
                    Merapi Jogja Dashboard
                </h2>
                <div className='flex flex-row items-center justify-center'>
                    <span className='md:flex hidden text-sm font-semibold'>
                        {'Status Merapi : '}
                    </span>
                    <span className='text-sm text-green-600 font-semibold'>
                        <Lightbulb size={20} />
                    </span>
                    <span className='text-sm text-green-600 font-semibold'>
                        Normal
                    </span>
                </div>
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
                <h3 className='text-left'>
                    Prakiraan cuaca Sekitar Merapi
                </h3>
                <div className='w-full flex md:flex-row flex-col gap-2'>
                    <div className='md:w-1/3 flex flex-col bg-white justify-start items-start rounded-xl shadow-md px-3 py-1 gap-2'>
                        <span className='text-sm'>
                            Hari Ini
                        </span>

                        <Separator />

                        <div className='w-full flex flex-row items-center justify-between my-3'>
                            {temperatureData && temperatureData.length > 0 && (
                                <span className='text-3xl font-bold'>
                                    {temperatureData[0].celcius?.split(' ')[0]}°
                                </span>
                            )}
                            <div className='flex flex-col gap-2'>
                                {weatherData && weatherData.length > 0 && (
                                    <span className='text-xs'>
                                        {weatherData[0].name}
                                    </span>
                                )}
                                {windSpeedData && windSpeedData.length > 0 && (
                                    <span className='text-xs'>
                                        {windSpeedData[0].kph} km/jam
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className='md:w-1/3 flex flex-col bg-white justify-start items-start rounded-xl shadow-md px-3 py-1 gap-2'>
                        <span className='text-sm'>
                            Besok
                        </span>

                        <Separator />

                        <div className='w-full flex flex-row items-center justify-between my-3'>
                            {temperatureData && temperatureData.length > 0 && (
                                <span className='text-3xl font-bold'>
                                    {temperatureData[4].celcius?.split(' ')[0]}°
                                </span>
                            )}
                            <div className='flex flex-col gap-2'>
                                {weatherData && weatherData.length > 0 && (
                                    <span className='text-xs'>
                                        {weatherData[4].name}
                                    </span>
                                )}
                                {windSpeedData && windSpeedData.length > 0 && (
                                    <span className='text-xs'>
                                         {windSpeedData[4].kph} km/jam
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className='md:w-1/3 flex flex-col bg-white justify-start items-start rounded-xl shadow-md px-3 py-1 gap-2'>
                        <span className='text-sm'>
                            Besok Lusa
                        </span>

                        <Separator />

                        <div className='w-full flex flex-row items-center justify-between my-3'>
                            {temperatureData && temperatureData.length > 0 && (
                                <span className='text-3xl font-bold'>
                                    {temperatureData[8].celcius?.split(' ')[0]}°
                                </span>
                            )}
                            <div className='flex flex-col gap-2'>
                                {weatherData && weatherData.length > 0 && (
                                    <span className='text-xs'>
                                        {weatherData[8].name}
                                    </span>
                                )}
                                {windSpeedData && windSpeedData.length > 0 && (
                                    <span className='text-xs'>
                                        {windSpeedData[8].kph} km/jam
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <HumidityChart data={humidityData} />

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

            </div>

        </div>
    )
}

export default DashboardWithHumidity