'use client'

import { Blocks, GanttChartSquare, Gem } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"


const Services = () => {

  const serviceData = [
    {
        icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
        title: 'Web Design',
        description: 
            'Good web design focus on creating responsive, accessible, and user-friendly interfaces that work across different devices.'
    },
    {
        icon: <Blocks size={72} strokeWidth={0.8} />,
        title: 'Web Development',
        description: 
            'Creating and maintaining sites with the knowledge of both client and server side development ensuring its secure and fast.'
    },
    {
        icon: <Gem size={72} strokeWidth={0.8} />,
        title: 'App Development',
        description: 
            'Involved in the process of creating software applications that run on devices like smartphones(Andriod, IOS) or tablets.'
    },
  ]

  return (
    <section className="mb-12 xl:mb-36">
        <div className="container mx-auto">
            <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
                Services
            </h2>
            <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
                {serviceData.map((item, index) => {
                    return (
                        <Card 
                            className='w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative'
                            key={index}
                        >
                            <CardHeader className='text-primary absolute -top-[60px]'>
                                <div className="w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center">
                                    {item.icon}
                                </div>
                            </CardHeader>
                            <CardContent className='text-center'>
                                <CardTitle className='mb-4'>{item.title}</CardTitle>
                                <CardDescription className='text-lg'>
                                    {item.description}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default Services