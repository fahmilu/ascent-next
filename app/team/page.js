import Banner from "@/components/Banner";
import TeamMember from "@/components/TeamMember";

const teamData = [
  {
    id: 1,
    image: "/imgs/dummy/team.png",
    name: "Sarah Johnson",
    role: "CEO & Founder",
    description: "With over 15 years of experience in the industry, Sarah leads our team with vision and passion.",
    linkedin: "https://linkedin.com/in/sarahjohnson"
  },
  {
    id: 2,
    image: "/imgs/dummy/team.png",
    name: "Michael Chen",
    role: "Chief Technology Officer",
    description: "Michael brings cutting-edge technical expertise and innovation to every project we undertake.",
    linkedin: "https://linkedin.com/in/michaelchen"
  },
  {
    id: 3,
    image: "/imgs/dummy/team.png",
    name: "Emily Rodriguez",
    role: "Design Director",
    description: "Emily's creative vision and attention to detail ensure our designs exceed client expectations.",
    linkedin: "https://linkedin.com/in/emilyrodriguez"
  },
  {
    id: 4,
    image: "/imgs/dummy/team.png",
    name: "David Kim",
    role: "Project Manager",
    description: "David ensures our projects are delivered on time and within budget while maintaining quality.",
    linkedin: "https://linkedin.com/in/davidkim"
  },
  {
    id: 5,
    image: "/imgs/dummy/team.png",
    name: "Olivia Martinez",
    role: "Marketing Specialist",
    description: "Olivia develops strategies that elevate our brand and connect us with our target audience.",
    linkedin: "https://linkedin.com/in/oliviamartinez"
  },
  {
    id: 6,
    image: "/imgs/dummy/team.png",
    name: "James Wilson",
    role: "Lead Developer",
    description: "James brings technical excellence and problem-solving skills to our development team.",
    linkedin: "https://linkedin.com/in/jameswilson"
  }
];

const TeamPage = () => {
    return (
        <>
            <Banner title="Our Team" />
            <section className="md:pt-[72px] md:pb-[140px] pt-[40px] pb-[80px] bg-white teams-section">
                <div className="container">
                    <h2 className="title-section max-w-[720px]" data-aos='fade-down' data-aos-delay='1500'>We are a team of strategic experts paving your way towards success.</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-[30px] gap-y-[34px]">
                        {teamData.map((member) => (
                            <TeamMember 
                                key={member.id}
                                data={member}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default TeamPage;