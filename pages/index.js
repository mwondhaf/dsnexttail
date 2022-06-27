import Head from "next/head";
import Layout from "../components/common/Layout";
import Projects from "../components/home/Projects";
import Quotation from "../components/home/Quotation";
import Services from "../components/home/Services";
import ServicesTab from "../components/home/ServicesTab";
import WhoWeAre from "../components/home/WhoWeAre";
import Slider from "../components/Slider";

export default function Home() {
  return (
    <Layout>
      <main>
        <Slider />
        <ServicesTab />
        <WhoWeAre />
        <Projects />
        <Quotation />
      </main>
    </Layout>
  );
}
