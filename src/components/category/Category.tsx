import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

type CategoryProps = {
    link: string;
    title: string;
    backgroundLink: string;
}

const Category = ({backgroundLink, link, title} : CategoryProps) => {
  return (
    <div>
        <Link href={link}>
            <Image fill src={backgroundLink} alt={`${title}-Background`}/>
        </Link>
    </div>
  )
}

export default Category