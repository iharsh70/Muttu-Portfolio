import CertificateCard from "../components/CertificateCard";

const certificates = [
    {
        title: "VLSI for beginners",
        issuer: "Ministry of Electronics and Information Technology, Govt. of India",
        date: "June 2025",
        href: "public/Screenshot 2026-05-31 161041.png",
        thumb: "public/Screenshot 2026-05-31 161041.png",
    },
    {
        title: "Machine Learning with Python",
        issuer: "Ministry of Electronics and Information Technology, Govt. of India",
        date: "August 2025",
        href: "public/Screenshot 2026-05-31 161137.png",
        thumb: "public/Screenshot 2026-05-31 161137.png",
    },
    {
        title: "Embedded for beginners",
        issuer: "Ministry of Electronics and Information Technology, Govt. of India",             
        date: "July 2025", 
        href: "public/Screenshot 2026-05-31 161306.png", 
        thumb: "public/Screenshot 2026-05-31 161306.png", 
    },
     {
        title: "IDEATHON 2.0",
        issuer: "PCU, Pune",
        date: "April 2025",
        href: "public/WhatsApp Image 2026-05-31 at 4.25.47 PM.jpeg",
        thumb: "/Projects/ideathon logo.jpg",
    }, {
        title: "Semiconductor Technology",
        issuer: "IIT BHU Varanasi",
        date: "Novemebr 2025",
        href: "public/Screenshot 2026-05-31 161226.png",
        thumb: "public/Screenshot 2026-05-31 161226.png",
    }, {
        title: "Introduction to Quantum Computing",
        issuer: "NPTEL",
        date: "Septemebr 2025",
        href: "public/Screenshot 2026-05-31 161207.png",
        thumb: "public/Screenshot 2026-05-31 161207.png",
    }, 
    {
        title: "Design Verification Internship",
        issuer: "SiliconMinds Technologies",
        date: "May 2025 - July 2025",
        href: "public/Screenshot 2026-05-31 161101.png",
        thumb: "public/Screenshot 2026-05-31 161101.png",
    }, 
    {
        title: "Embedded Systems Internship",
        issuer: "SlashMark Solutions/Startup India",
        date: "January 2025 - July 2025",
        href: "public/Screenshot 2026-05-31 161244.png",
        thumb: "public/Screenshot 2026-05-31 161244.png",
    }, 
    {
        title: "AI Intern",
        issuer: "Cothon Solutions",
        date: "March 2025 — May 2025",
        href: "public/Screenshot 2026-05-31 161117.png",
        thumb: "public/Screenshot 2026-05-31 161117.png",
    }, 
];

export const Certifications = () => {
    return (
        <section id="certifications" className="py-20">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                        Certifications
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-6">Verified Certificates</h2>
                    <p className="text-muted-foreground mt-3">
                        A curated list of professional certificates and achievements. Click any card to view or download the certificate.
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {certificates.map((c, idx) => (
                        <CertificateCard key={idx} {...c} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;