"use client";

import Banner from "@/components/Banner";
import TeamMember from "@/components/TeamMember";

import useSWR from "swr";
const fetcher = (url) => fetch(url).then((res) => res.json());
const TeamPageIndex = () => {
    const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_API}/pages/our-team`,
        fetcher
    );
    const { data: teams, error: teamsError } = useSWR(`${process.env.NEXT_PUBLIC_API}/teams`,
        fetcher
    );

    return (
        <div>
            {(data && teams) && (
                <>
                    <Banner title={data.data.title} />
                    <section className="md:pt-[72px] md:pb-[140px] pt-[40px] pb-[80px] bg-white teams-section">
                        <div className="container">
                            <h2 className="title-section max-w-[720px]" data-aos='fade-down'>{data.data.components[0] ? data.data.components[0].data.title : 'We are a team of strategic experts paving your way towards success.'}</h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-x-[30px] md:gap-y-[34px]">
                                {teams.data.map((member) => (
                                    <TeamMember
                                        key={member.id}
                                        data={member}
                                    />
                                ))}
                            </div>
                        </div>
                    </section>
                </>
            )}
        </div>
    );
}

export default TeamPageIndex;