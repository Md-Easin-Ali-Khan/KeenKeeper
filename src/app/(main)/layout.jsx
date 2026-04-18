import NavBar from "@/components/NavBar"
import FooterSection from "@/components/FooterSection"

export default function MainLayout({children}){
    return (
        <>
        <NavBar></NavBar>
        {children}
        <FooterSection></FooterSection>
        </>
    )
}