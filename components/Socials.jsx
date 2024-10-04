'use client'

import Link from 'next/link'
import {
  RiLinkedinFill,
  RiGithubFill,
  RiTwitterFill,
  RiInstagramFill
} from 'react-icons/ri'

const icons = [
  { path: 'https://www.linkedin.com/in/eze-ebuka-jude-6966091b4', name: <RiLinkedinFill /> },
  { path: 'https://github.com/phyrunez', name: <RiGithubFill /> },
  { path: 'https://x.com/EzeEbukajude1', name: <RiTwitterFill /> },
  { path: 'https://www.instagram.com/itz_phygo?igsh=OGQ5ZDc2ODk2ZA==', name: <RiInstagramFill /> }
]

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        )
      })}
    </div>
  )
}

export default Socials