import NavBar from "@/app/(main)/components/NavBar"
import FooterSection from "@/app/(main)/components/FooterSection"
import { TimelineProvider } from "@/context/TimelineContext"
import { Toaster } from "react-hot-toast"

export default function MainLayout({ children }) {
    return (
        <>
            <TimelineProvider >
                <NavBar></NavBar>

                {children}

                <Toaster></Toaster>
                <FooterSection></FooterSection>
            </TimelineProvider>
        </>
    )
}