import { Briefcase, GraduationCap } from "lucide-react"
import DevImg from "./DevImg"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import Image from "next/image"
import { infoData, qualificationData, skillData } from "./data/data"

const About = () => {
  
    const getData = ((arr, title) => {
        return arr.find(item => item.title === title)
    })

  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
        <div className="container mx-auto">
            <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
                About Me
            </h2>
            <div className="flex flex-col xl:flex-row">
                <div className="hidden xl:flex flex-1 relative">
                    <DevImg 
                        containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative' 
                        imgSrc='/about/programming.svg'
                    />
                </div>

                <div className="flex-1">
                    <Tabs defaultValue="personal">
                        <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none'>
                            <TabsTrigger className='w-[162px] xl:w-auto' value='personal'>Personal Info</TabsTrigger>
                            <TabsTrigger className='w-[162px] xl:w-auto' value='qualifications'>Qualifications</TabsTrigger>
                            <TabsTrigger className='w-[162px] xl:w-auto' value='skills'>Skills</TabsTrigger>
                        </TabsList>
                        <div className="text-lg mt-12 xl:mt-8">
                            <TabsContent value='personal'>
                                <div className="text-center xl:text-left">
                                    <h3 className='h3 mb-4'>Developing Service Quality for Over 3 years</h3>
                                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                                        I specialize in crafting intuitive websites with cutting-edge Technology, delivering dynamic and engaging user experiences.
                                    </p>

                                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                                        {infoData.map((info, index) => {
                                            return (
                                                <div className="flex items-center gap-x-4 mx-auto xl:mx-0" key={index}>
                                                    <div className="text-primary">{info.icon}</div>
                                                    <div>{info.text}</div>
                                                </div>
                                            )
                                        })}
                                    </div>

                                    <div className="flex flex-col gap-y-2">
                                        <div className="text-primary">Language Skill</div>
                                        <div className="border-b border-border"></div>
                                        <div>English, Igbo, Yoruba</div>
                                    </div>
                                </div>
                            </TabsContent>
                            <TabsContent value='qualifications'>
                                <div>
                                    <h3 className="h3 mb-8 text-center xl:text-left">
                                        My Astounding Journey
                                    </h3>

                                    <div className="grid md:grid-cols-2 gap-y-8">
                                        <div className="flex flex-col gap-y-6">
                                            <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                                <Briefcase />
                                                <h4 className="capitalize font-medium">
                                                    {getData(qualificationData, 'experience').title}
                                                </h4>
                                            </div>
                                            <div className="flex flex-col gap-y-8">
                                                {getData(qualificationData, 'experience').data.map((item, index) => {
                                                    const { company, role, years } = item
                                                    return (
                                                        <div className='flex gap-x-8 group' key={index}>
                                                            <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                                <div 
                                                                    className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"
                                                                ></div>
                                                            </div>
                                                            <div>
                                                                <div className="font-semibold text-xl leading-none mb-2">{company}</div>
                                                                <div className="text-lg leading-none text-muted-foreground mb-4">{role}</div>
                                                                <div>{years}</div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        
                                        <div className="flex flex-col gap-y-6">
                                            <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                                <GraduationCap size={28} />
                                                <h4 className="capitalize font-medium">
                                                    {getData(qualificationData, 'education').title}
                                                </h4>
                                            </div>
                                            <div className="flex flex-col gap-y-8">
                                                {getData(qualificationData, 'education').data.map((item, index) => {
                                                    const { university, qualification, years } = item
                                                    return (
                                                        <div className='flex gap-x-8 group' key={index}>
                                                            <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                                <div 
                                                                    className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"
                                                                ></div>
                                                            </div>
                                                            <div>
                                                                <div className="font-semibold text-xl leading-none mb-2">{university}</div>
                                                                <div className="text-lg leading-none text-muted-foreground mb-4">{qualification}</div>
                                                                <div>{years}</div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>
                            <TabsContent value='skills'>
                                <div className="text-center xl:text-left">
                                    <h3 className="h3 mb-8">Tech Stack for Development</h3>
                                    <div className="mb-16">
                                        <h4 className="text-xl font-semibold mb-2">Skills</h4>
                                        <div className="border-b border-border mb-4"></div>
                                        <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 xs:grid-cols-1 w-full">
                                            {getData(skillData, 'skills').data.map((item, index) => {
                                                const { name, percent } = item
                                                return (
                                                    <div className="w-3/4 text-center xl:text-left py-1.5 mx-auto xl:mx-0" key={index}>
                                                        <div className="font-medium">{name}</div>
                                                        
                                                        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                                            <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: `${percent}` }}> {percent}</div>
                                                        </div>

                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-xl font-semibold mb-2 xl:text-left">Tools</h4>
                                        <div className="border-b border-border mb-4"></div>
                                        <div className="flex gap-x-8 justify-center xl:justify-start">
                                            {getData(skillData, 'tools').data.map((item, index) => {
                                                const { imgPath } = item
                                                return (
                                                    <div key={index}>
                                                        <Image 
                                                            src={imgPath}
                                                            width={40}
                                                            height={48}
                                                            alt=''
                                                            priority
                                                        />
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>
                        </div>
                    </Tabs>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default About