import {
    ThemeIcon,
    Text,
    Title,
    Container,
    SimpleGrid,
    useMantineTheme,
    createStyles,
    Divider
} from "@mantine/core"
import { RiComputerLine } from "react-icons/ri"
import { BsCashStack } from "react-icons/bs"
import { MdAccessTime, MdOpenInNewOff } from "react-icons/md"
import { AiOutlineCloudUpload } from "react-icons/ai"
import { RxCircleBackslash } from "react-icons/rx"
import { BiDonateHeart, BiCheckShield } from "react-icons/bi"

export const MOCKDATA = [
    // {
    //     icon: BiDonateHeart,
    //     title: "Provide evidence based and personalized care plans",
    //     description:
    //         "Smartplan allows anyone to create detailed care plans that cover all aspects of patient care, including disease specific symptom analysis, medication management, lifestyle modifications, education, and follow-up appointments."
    // },
    {
        icon: BsCashStack,
        title: "Earn reccuring revenue",
        description:
            "SmartPlan allows you to bill for Chronic Care Management (CCM) services, which is a reimbursable CPT code under Medicare. These services are perfomed on a recurring basis, and can be billed monthly, quarterly, or annually, depending on the CPT code."
    },
    {
        icon: MdOpenInNewOff,
        title: "Handle CCM in your own practice",
        description:
            "Don't outsource your patient's care to a third party, keep your patient's trust and own your business' revenue by easily implementing CCM in your own practice."
    },
    {
        icon: MdAccessTime,
        title: "Save time",
        description:
            "Your staff members can create comprehensive, dynamic, and patient specific care plans without the need for the ordering provider to be present. You can use this to create an alternative revenue stream, while still providing excellent care to your chronic patients."
    },
    {
        icon: AiOutlineCloudUpload,
        title: "Access anywhere",
        description:
            "SmartPlan is cloud based and can be accessed from anywhere. No need to download any annoying installers, just log in and you're ready to go."
    },
    {
        icon: RxCircleBackslash,
        title: "No test limits",
        description:
            "We don't limit the number of patients you can bill CCMs for, or try to charge you extra for each patient you test. Pay one monthly fee and bill as many patients as you want."
    },

    // {
    //     icon: RiComputerLine,
    //     title: "24/7 Support",
    //     description:
    //         "Rapidash usually can be seen casually cantering in the fields and plains, Skitty is known to chase around after its own tail"
    // },
    {
        icon: BiCheckShield,
        title: "Secure by default",
        description:
            "We utilize the latest in encryption technology to ensure that your patient's data is always safe and secure. We utilize a HIPAA compliant database, server, and hosting provider and require 2FA everytime for all of our users."
    }
]

export function Feature({ icon: Icon, title, description }) {
    const theme = useMantineTheme()
    return (
        <div>
            <ThemeIcon variant="light" size={40} radius={40}>
                <Icon size={20} stroke={1.5} />
            </ThemeIcon>
            <Text
                size={"lg"}
                style={{ marginTop: theme.spacing.sm, marginBottom: 7 }}
            >
                {title}
            </Text>
            <Text size="md" color="dimmed" style={{ lineHeight: 1.6 }}>
                {description}
            </Text>
        </div>
    )
}

const useStyles = createStyles((theme) => ({
    wrapper: {
        paddingTop: theme.spacing.xl * 4,
        paddingBottom: theme.spacing.xl * 4
    },

    // title: {
    //     fontFamily: "Raleway, sans-serif",
    //     fontWeight: 700,
    //     marginBottom: theme.spacing.md,
    //     textAlign: "center",

    //     [theme.fn.smallerThan("sm")]: {
    //         fontSize: 28,
    //         textAlign: "left"
    //     }
    // },

    description: {
        textAlign: "center",

        [theme.fn.smallerThan("sm")]: {
            textAlign: "left"
        }
    }
}))

export function FeaturesGrid({ title, description, data = MOCKDATA }) {
    const { classes, theme } = useStyles()
    const features = data.map((feature, index) => (
        <Feature {...feature} key={index} />
    ))

    return (
        <div
            className="bg-gradient-to-b from-white to-blue-50 dark:from-neutral-900 dark:to-neutral-800 "
            id="features"
        >
            <Container size={"lg"} className={classes.wrapper}>
                <h1 className="text-4xl font-bold text-center mb-5">{title}</h1>

                <Container size={560} p={0}>
                    <Text size="lg" className={classes.description}>
                        {description}
                    </Text>
                </Container>
                {/* <Divider mt={20} size={2} /> */}

                <SimpleGrid
                    mt={60}
                    cols={3}
                    spacing={theme.spacing.xl * 2}
                    breakpoints={[
                        { maxWidth: 980, cols: 2, spacing: "xl" },
                        { maxWidth: 755, cols: 1, spacing: "xl" }
                    ]}
                >
                    {features}
                </SimpleGrid>
            </Container>
        </div>
    )
}
