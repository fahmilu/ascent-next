import Banner from "@/components/Banner";

export async function generateMetadata() {   
    return {
      title: 'Partner With Us | ' + process.env.NEXT_PUBLIC_COMPANY_NAME,
      description: '',
    }
}

const ContactPage = () => {
    return (
        <>
            <Banner title="Partner With Us" />
            <section className="">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] xl:gap-[130px]">
                        <div className="py-[40px] xl:py-[97px]" data-aos="fade-right">
                            <div className="text-[20px] md:text-[24px] font-medium leading-[150%] mb-[20px] md:mb-[40px]">
                            Ascent Ventures Group is a thesis driven venture capital firm specializing in early-stage investments to empower extended Southeast Asian builders manifest viable vision into investible ventures. 
                            </div>
                            <div className="contents">
                                <p>With expertise in MSME Enabler, Next Gen. Fintech, and Neo Consumer, Ascent Ventures Group combine bottom-up thesis sourcing and diligence, strategic collaboration with major corporations, while providing long-term capital to accelerate business model fit.</p>
                                <p>We are always on the lookout for passionate founders, innovative ideas, and opportunities for meaningful collaboration. If you are a startup seeking a growth partner, a passionate individual interested in joining our team, or have ideas of how we could work together, we would love to hear from you. Please reach out to us by writing to <a href="mailto:info@ascentgroup.vc">info@ascentgroup.vc</a>.</p>
                                <p>We look forward to connecting!</p>
                            </div>
                        </div>                        
                        <div className="relative h-[500px] lg:h-auto lg:order-last order-first" data-aos="fade-left">
                            <div className="absolute top-0 lg:left-0 lg:translate-x-0 left-1/2 -translate-x-1/2 w-[100vw] lg:w-[50vw] h-full">
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.822406240001!2d103.8493311!3d1.2802095000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da195be45e4b4b%3A0xb90907909866129e!2s80%20Robinson%20Road!5e0!3m2!1sen!2sid!4v1745310735868!5m2!1sen!2sid" 
                                    width="100%" 
                                    height="100%" 
                                    style={{ border: 0 }} 
                                    allowFullScreen="" 
                                    loading="lazy"
                                    title="Google Map"
                                    aria-hidden="false"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ContactPage;