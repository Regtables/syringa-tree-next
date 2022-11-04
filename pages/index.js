import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { client } from '../utils/client'

import Hero from '../components/Hero/Hero'
import HouseSection from '../components/HouseSection/HouseSection'
import Location from '../components/Location/Location'

export default function Home({ heroImages, sections, location }) {
  
  return (
    <div className={styles.container}>
      <header id = 'home'>
        <Hero
          images = {heroImages}
        />
      </header>
      <main>
        {sections.map((section, i) => (
          <section id= {section.section} key = {i}>
            <HouseSection 
              section={section}
            />
          </section>
        ))}
       
        <section>
          <Location location = {location} />
        </section>

        <section>
          contact
        </section>

        <footer>
          footer
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

  return {
    props: {
      heroImages: heroData,
      sections: sectionsData,
      location: locationData[0]
    },
    revalidate: 1
  }
}
