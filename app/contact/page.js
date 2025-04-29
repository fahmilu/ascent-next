import ContactPageIndex from "@/components/Pages/Contact";

export async function generateMetadata() {   
    return {
      title: 'Partner With Us | ' + process.env.NEXT_PUBLIC_COMPANY_NAME,
      description: '',
    }
}

const ContactPage = async () => {
    return (
        <ContactPageIndex />
    );
}

export default ContactPage;