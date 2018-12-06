import React, { Fragment } from 'react'

import Layout from '../templates/layout'
import Banner from '../components/Banner'
import Sidebar from '../components/Sidebar'
import ContentArea from '../components/ContentArea'

const IndexPage = () => (
  <Fragment>
    <Sidebar />
    <ContentArea>
      <Banner />
      <Layout>
        <section id="yleistä">
          <h1>Opettajille ja opinto-ohjaajille</h1>
          <p>
            Kurssin tai sen osan saa ottaa vapaasti osaksi peruskoulun, lukion,
            ammattikoulun, ammattikorkeakoulun tai yliopiston opintotarjontaa.
            Kerro opiskelijoillesi mahdollisuudesta osallistua kurssille.
          </p>
          <p>
            Jos haluat, että kurssillasi on koe ja opiskelijasi saavat kurssista
            merkinnän Helsingin yliopiston Avoimelta yliopistolta, ohjeista
            opiskelijasi osallistumaan Helsingin yliopiston Avoimen yliopiston
            ilmaiseksi tarjoamaan kokeeseen. Saat lisätietoja tästä
            järjestelystä ottamalla meihin yhteyttä (mooc@cs.helsinki.fi).
          </p>
          <p>
            Avoimen yliopiston kurssisuoritus luetaan automaattisesti osaksi
            Helsingin yliopiston opintoja. Useat toisen asteen oppilaitokset
            kuten lukiot tarjoavat Ohjelmoinnin MOOCin suorittamisesta
            suoritusmerkintöjä.
          </p>
        </section>
      </Layout>
    </ContentArea>
  </Fragment>
)

export default IndexPage
