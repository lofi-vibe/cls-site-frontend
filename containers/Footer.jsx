import Image from 'next/image';
import React from 'react';
import { logo } from "../public/assets";
import { footerLinks } from "../constants";
import Link from 'next/link';


const FooterColumn = ({title, links}) => (
    <div className='footer_column'>
        <h3 className='font-bold'>{title}</h3>
        <ul className='flex flex-col gap-2 font-normal  text-color-text'>{links.map((link) => 
            <Link href="/" key={link}>
                {link}
            </Link>
        )}
        </ul>
    </div>
    
)

const Footer = () => {
  return (
    <footer className= "flexStart footer w-full">
        <div className='flex flex-col gap-12 w-full'>
            <div className='flex flex-col gap-4'>
                <div className='flex flex-row gap-2'>
                <Image
                    src={logo}
                    alt='logo'
                    width={30}
                    height={30}
                />
                <h3 className='logo_text'>Creative Learning Services</h3>
            </div>
                <p className='paragraph_footer text-start text-sm font-manrope mt-5 '>
                    Creative Learning Services is a full-service digital learning agency 
                    that helps organizations modernize their learning ecosystems.
                </p>
            </div>
            <div className='flex flex-wrap gap-12'>
                <FooterColumn title ={footerLinks[0].title} links={footerLinks[0].links}/>
                <FooterColumn title ={footerLinks[1].title} links={footerLinks[1].links}/>
                <FooterColumn title ={footerLinks[2].title} links={footerLinks[2].links}/>
                <FooterColumn title ={footerLinks[3].title} links={footerLinks[3].links}/>
                <FooterColumn title ={footerLinks[4].title} links={footerLinks[4].links}/>
                <FooterColumn title ={footerLinks[5].title} links={footerLinks[5].links}/>
                <FooterColumn title ={footerLinks[6].title} links={footerLinks[6].links}/>
            </div>
        </div>
    </footer>
  )
}

export default Footer
