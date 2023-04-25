import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Soy lucas estoy aprendiendo next y esto lo voy a usar para postear contenido</p>
        <p>
          (Este link te va a llevar a mi proyecto mejor desarrollado hasta el momento{' '}
          <a href="https://nextjs.org/learn">Proyecto pro pro</a>.)
        </p>
      </section>
    </Layout>
  );
}