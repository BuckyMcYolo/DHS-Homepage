import Head from "next/head"
import Image from "next/image"
import ContactUs from "../components/mantine-Components/contactUs"
import { FaqSimple } from "../components/mantine-Components/faq"
import { FeaturesGrid } from "../components/mantine-Components/features"
import { HeroHomePage } from "../components/mantine-Components/heroHomePage"
import HomeCards from "../components/page-Components/HomeCards"
import { motion } from "framer-motion"
import SmartPlanDescription from "../components/page-Components/smartplanDescription"

export default function Home() {
    return (
        <motion.main
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
        >
            <Head>
                <title>Digital Healthcare Solutions - Home</title>
                <meta
                    name="description"
                    content="
                Digital Healthcare Solutions is a healthcare software company that provides a cloud-based practice management software for healthcare professionals.
                "
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <HeroHomePage />
            <SmartPlanDescription />
            <FeaturesGrid
                title="Benefits of SmartPlan"
                description="We offer variety of features that can help you  run your practice more efficiently."
            />
            <HomeCards />
            <section
                id="contact"
                className="flex justify-center bg-gradient-to-b from-blue-50 to-white dark:from-neutral-800 dark:to-neutral-900"
            >
                <ContactUs />
            </section>{" "}
            <FaqSimple />
        </motion.main>
    )
}
