import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { client } from '../utils/client'

import Hero from '../components/Hero/Hero'
import HouseSection from '../components/HouseSection/HouseSection'
import Location from '../components/Location/Location'
import Contact from '../components/Contact/Contact'
import AboutUs from '../components/AboutUs/AboutUs'
import Footer from '../components/Footer/Footer'

import MotionWrapper from '../wrappers/MotionWrapper'

export default function Home({ heroImages, sections, location, contact, about }) {
  
  return (
    <div className={styles.container} id = 'home'>
      <header id = 'home'>
        <MotionWrapper>
          <Hero
            images = {heroImages}
          />
        </MotionWrapper>
      </header>
      <main>
        {sections.map((section, i) => (
          <section id= {section.section} key = {i}>
            <MotionWrapper>
              <HouseSection 
                section={section}
              />
            </MotionWrapper>
          </section>
        ))}
       
        <section id = 'location'>
          <MotionWrapper>
            <Location location = {location} />
          </MotionWrapper>
        </section>

        <section id = 'contact-us'>
          <MotionWrapper>
            <Contact contact = {contact} />
          </MotionWrapper>
        </section>

        <section id = 'about-us'>
          <MotionWrapper>
            <AboutUs aboutUs={about}/>
          </MotionWrapper>
        </section>
        
        <footer>
          <Footer />
        </footer>
      </main>
    </div>
  )
}

export const getStaticProps = async () => {
  const heroQuery = '*[_type == "heroImage"]'
  const heroData = await client.fetch(heroQuery)

  const sectionsQuery = '*[_type == "houseSection"]'
  const sectionsData = await client.fetch(sectionsQuery)

  const locationQuery = '*[_type == "location"]'
  const locationData = await client.fetch(locationQuery)

  const contactQuery = '*[_type == "contact"]'
  const contactData = await client.fetch(contactQuery)

  const aboutQuery = '*[_type == "aboutUs"]'
  const aboutData = await client.fetch(aboutQuery)

  return {
    props: {
      heroImages: heroData,
      sections: sectionsData,
      location: locationData[0],
      contact: contactData[0],
      about: aboutData[0]
    },
    revalidate: 1
  }
}
