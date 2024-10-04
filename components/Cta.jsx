'use client'

import Link from "next/link"
import { Button } from "./ui/button"

const Cta = () => {
  return (
    <section className="py-24 bg-tertiary dark:bg-secondary/40 mt-[150px]">
        <div className="container mx-auto">
            <div className="flex flex-col items-center">
                <h2 className="h2 max-w-xl text-center mb-8">
                    I am ready and willing to help turn your ideas into reality!
                </h2>
                <Link href='/contact'>
                    <Button>Contact me</Button>
                </Link>
            </div>
        </div>
    </section>
  )
}

export default Cta