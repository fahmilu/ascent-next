
import TeamPageIndex from "@/components/Pages/Team";

export async function generateMetadata() {   
  const team = await fetch(`${process.env.NEXT_PUBLIC_API}/pages/our-team`).then((res) => res.json());
  return {
    title: `${team.data.title} | ${process.env.NEXT_PUBLIC_COMPANY_NAME}`,
    description: team.data.description,
  }
}


const TeamPage = () => {

  return (
      <TeamPageIndex />
  );
}

export default TeamPage;