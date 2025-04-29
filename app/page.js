import HomeIndex from "@/components/Home";

export async function generateMetadata() {   
  return {
    title: 'Home | ' + process.env.NEXT_PUBLIC_COMPANY_NAME,
    description: '',
  }
}

export default async function Home() {

  return (
    <div className={`home-page`}>
      <HomeIndex />
    </div>
  );
}
