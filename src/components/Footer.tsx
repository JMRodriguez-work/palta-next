import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

export default function Footer (): JSX.Element {
  return (
    <footer className='flex justify-around mt-auto pb-4'>
      <p>JMR ©</p>
      <a
        href='https://github.com/JMRodriguez-work'
        target='_blank'
        rel='noreferrer'
        className='transition-all ease duration-200 hover:scale-125'
        aria-label='Github icon'
      ><GitHubIcon />
      </a>
      <a
        href='https://www.linkedin.com/in/juan-martin-rodriguez-front-end'
        target='_blank'
        rel='noreferrer'
        className='transition-all ease duration-200 hover:scale-125'
        aria-label='Linkedin icon'
      ><LinkedInIcon />
      </a>
    </footer>
  )
}
