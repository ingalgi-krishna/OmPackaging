"use client";

import Image from "next/image";

interface TeamMember {
    id: string;
    name: string;
    position: string;
    company?: string;
    bio: string;
    expertise: string[];
    image?: string; // profile image path
    placeholder?: boolean;
}

interface TeamSectionProps {
    boardOfDirectors: TeamMember[];
    expertTeam: TeamMember[];
}

export function TeamSection({ boardOfDirectors, expertTeam }: TeamSectionProps) {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Board of Directors */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
                        Board of Directors
                    </h2>
                    <div className="flex justify-center">
                        {boardOfDirectors.map((member) => (
                            <div
                                key={member.id}
                                className="bg-white p-6 rounded-2xl shadow-lg text-center max-w-sm"
                            >
                                <div className="w-24 h-24 rounded-full overflow-hidden flex items-center justify-center mx-auto mb-4 bg-gray-100">
                                    {member.image ? (
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            width={96}
                                            height={96}
                                            className="object-cover w-full h-full"
                                        />
                                    ) : (
                                        <span className="text-2xl font-bold text-gray-700">
                                            {member.name
                                                .split(" ")
                                                .map((n) => n[0])
                                                .join("")}
                                        </span>
                                    )}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900">
                                    {member.name}
                                </h3>
                                <p className="text-sm text-indigo-600">{member.position}</p>
                                <p className="mt-3 text-sm text-gray-600">{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
