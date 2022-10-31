import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { client } from '../utils/client'

import Hero from '../components/Hero/Hero'
import HouseSection from '../components/HouseSection/HouseSection'

export default function Home({ heroImages, sections }) {
  
  return (
    <div className={styles.container}>
      <header>
        <Hero
          images = {heroImages}
        />
      </header>
      <main>
        {sections.map((section, i) => (
          <section id= {section.section}>
            <HouseSection 
              section={section}
            />
          </section>
        ))}
       
        <section>
          location
        </section>
        <section>
          contact
        </section>
      </main>
    </div>
  )
}

export const getStaticProps = async () => {
  const heroQuery = '*[_type == "heroImage"]'
  const heroData = await client.fetch(heroQuery)

  const sectionsQuery = '*[_type == "houseSection"]'
  const sectionsData = await client.fetch(sectionsQuery)

  return {
    props: {
      heroImages: heroData,
      sections: sectionsData
    },
    revalidate: 1
  }
}
