import React from "react";
import { SectionTitle, Card, Button } from "../components/UI";
import { Code2, Cpu, BookOpen, Video } from "lucide-react";

export const Training: React.FC = () => {
    return (
        <div className="min-h-screen py-16 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <SectionTitle
                        title="Our"
                        highlight="Training"
                        centered
                        subtitle="A comprehensive curriculum designed to take you from 'Hello World' to International Finalist."
                    />
                </div>

                {/* Level 0 */}
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-16 md:mb-24">
                    <div className="w-full md:w-1/2 order-2 md:order-1">
                        <div className="inline-block bg-blue-100 text-icpc-blue px-4 py-1 rounded-full text-sm font-bold mb-4">
                            BEGINNERS
                        </div>
                        <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 md:mb-6">
                            Level 0: Foundation
                        </h2>
                        <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
                            Designed for absolute beginners. We cover the basics
                            of C++ programming, simple logic, loops, arrays, and
                            functions. No prior experience required.
                        </p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center text-gray-700">
                                <span className="w-2 h-2 bg-icpc-yellow rounded-full mr-3"></span>{" "}
                                C++ Syntax & Basics
                            </li>
                            <li className="flex items-center text-gray-700">
                                <span className="w-2 h-2 bg-icpc-yellow rounded-full mr-3"></span>{" "}
                                Control Structures (If/Else, Loops)
                            </li>
                            <li className="flex items-center text-gray-700">
                                <span className="w-2 h-2 bg-icpc-yellow rounded-full mr-3"></span>{" "}
                                Introduction to Arrays & Strings
                            </li>
                        </ul>
                        <Button to="/roadmaps" variant="primary">
                            Access Materials
                        </Button>
                    </div>
                    <div className="w-full md:w-1/2 order-1 md:order-2">
                        <img
                            src="https://picsum.photos/seed/level0/600/400"
                            alt="Level 0 Class"
                            className="w-full rounded-2xl shadow-2xl rotate-2 hover:rotate-0 transition-all duration-500"
                        />
                    </div>
                </div>

                {/* Level 1 */}
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                    <div className="w-full md:w-1/2">
                        <img
                            src="https://picsum.photos/seed/level1/600/400"
                            alt="Level 1 Class"
                            className="w-full rounded-2xl shadow-2xl -rotate-2 hover:rotate-0 transition-all duration-500"
                        />
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="inline-block bg-yellow-100 text-yellow-700 px-4 py-1 rounded-full text-sm font-bold mb-4">
                            INTERMEDIATE
                        </div>
                        <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 md:mb-6">
                            Level 1: Algorithms
                        </h2>
                        <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
                            For those who know the syntax but want to solve
                            problems. We dive into STL, Time Complexity, Number
                            Theory, and basic Graph algorithms.
                        </p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center text-gray-700">
                                <span className="w-2 h-2 bg-icpc-blue rounded-full mr-3"></span>{" "}
                                Standard Template Library (STL)
                            </li>
                            <li className="flex items-center text-gray-700">
                                <span className="w-2 h-2 bg-icpc-blue rounded-full mr-3"></span>{" "}
                                Sorting & Searching
                            </li>
                            <li className="flex items-center text-gray-700">
                                <span className="w-2 h-2 bg-icpc-blue rounded-full mr-3"></span>{" "}
                                Math & Number Theory
                            </li>
                        </ul>
                        <Button to="/roadmaps" variant="secondary">
                            Access Materials
                        </Button>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-16 md:mt-24">
                    <Card className="p-6 md:p-8 bg-gray-900">
                        <Code2 className="mb-4 text-icpc-yellow" size={40} />
                        <h3 className="text-xl font-bold mb-2">Hands-on Coding
                        </h3>
                        <p className="text-gray-400 text-sm md:text-base">
                            Every session includes a practice contest to apply
                            what you learned.
                        </p>
                    </Card>
                    <Card className="p-6 md:p-8 bg-icpc-blue">
                        <Cpu className="text-icpc-blue mb-4" size={40} />
                        <h3 className="text-xl font-bold mb-2">Online Judge</h3>
                        <p className="text-gray-600 text-sm md:text-base">
                            Access our private group on Codeforces for exclusive
                            problem sets.
                        </p>
                    </Card>
                    <Card className="p-6 md:p-8 bg-gray border border-gray-200">
                        <Video className="mb-4 text-icpc-yellow" size={40} />
                        <h3 className="text-xl font-bold mb-2">
                            Recorded Sessions
                        </h3>
                        <p className="text-gray-400 text-sm md:text-base">
                            Missed a class? Watch high-quality recordings of all
                            lectures.
                        </p>
                    </Card>
                </div>
            </div>
        </div>
    );
};
