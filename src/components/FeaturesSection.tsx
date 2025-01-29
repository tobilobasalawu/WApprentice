'use client';
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from "next/image";

export default function FeaturesSection() {
    return (
        <div className="container mx-auto px-4 py-8 md:py-12">
            {/* Main Content Section */}
            <div className="flex flex-col lg:flex-row gap-6 md:gap-10">
                {/* Left Column - Text Content */}
                <div className="lg:w-1/2 space-y-6">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                        All the <span className="text-[var(--special)]">tools,</span><br />
                        you need to secure<br />
                        an <span className="text-[var(--special)]">Apprenticeship</span>
                    </h2>

                    <div className="space-y-4 text-gray-600 text-lg">
                        <p>Know your options with Employer/training provider reviews, compare salaries across different levels, discover what happens after an apprenticeship, set a dedicated time for application (balance your a-levels) and so many other features.</p>
                    </div>
                </div>

                {/* Right Column - Cards */}
                <div className="lg:w-1/2 space-y-8">
                    {/* Test Cards Section */}
                    <div className="bg-[var(--subsecond)] p-6 rounded-2xl shadow-lg">
                        <h3 className="text-xl md:text-2xl font-bold text-[var(--foreground)] mb-6">
                            Ace Applications with Exclusive Interview & Assessment Resources
                        </h3>
                        
                        <Swiper
                            spaceBetween={10}
                            slidesPerView={1.8}
                            breakpoints={{
                                768: {
                                    slidesPerView: 1.5
                                }
                            }}
                            pagination={{ clickable: true }}
                            className="pb-8"
                        >
                            <SwiperSlide>
                                <Card className="h-full">
                                    <CardHeader>
                                        <CardTitle>Situational Judgement Test (SJT)</CardTitle>
                                        <CardDescription>
                                            Assess how you handle workplace scenarios by presenting real-life work situations with multiple-choice responses to evaluate decision-making and problem-solving.
                                        </CardDescription>
                                    </CardHeader>
                                    <div className="px-6 pb-4">
                                        <Button className="w-full bg-[#008055] hover:bg-[#006747] text-white">
                                            Start Test
                                        </Button>
                                    </div>
                                </Card>
                            </SwiperSlide>

                            <SwiperSlide>
                                <Card className="h-full">
                                    <CardHeader>
                                        <CardTitle>Numerical Data Test</CardTitle>
                                        <CardDescription>
                                            Evaluate your ability  to work with numbers, percentages, ratios, and basic statistics, often involving data interpretation from graphs, charts, and tables.
                                        </CardDescription>
                                    </CardHeader>
                                    <div className="px-6 pb-4">
                                        <Button className="w-full bg-[#008055] hover:bg-[#006747] text-white">
                                            Start Test
                                        </Button>
                                    </div>
                                </Card>
                            </SwiperSlide>

                            <SwiperSlide>
                                <Card className="h-full">
                                    <CardHeader>
                                        <CardTitle>Verbal Reasoning Test</CardTitle>
                                        <CardDescription>
                                            Measure your ability to understand & interpret written information, usually through comprehension-based multiple-choice questions. It helps assess your communication & critical thinking skills.
                                        </CardDescription>
                                    </CardHeader>
                                    <div className="px-6 pb-4">
                                        <Button className="w-full bg-[#008055] hover:bg-[#006747] text-white">
                                            Start Test
                                        </Button>
                                    </div>
                                </Card>
                            </SwiperSlide>


                            <SwiperSlide>
                                <Card className="h-full">
                                    <CardHeader>
                                        <CardTitle>Logical/Abstract Reasoning Test</CardTitle>
                                        <CardDescription>
                                            This examines your ability to identify patterns, sequences, and relationships between shapes and symbols, testing problem-solving and analytical thinking.
                                        </CardDescription>
                                    </CardHeader>
                                    <div className="px-6 pb-4">
                                        <Button className="w-full bg-[#008055] hover:bg-[#006747] text-white">
                                            Start Test
                                        </Button>
                                    </div>
                                </Card>
                            </SwiperSlide>


                            <SwiperSlide>
                                <Card className="h-full">
                                    <CardHeader>
                                        <CardTitle>Personality Assessment</CardTitle>
                                        <CardDescription>
                                            Evaluates behavioral traits and work style to determine cultural fit, with no right or wrong answers.
                                        </CardDescription>
                                    </CardHeader>
                                    <div className="px-6 pb-4">
                                        <Button className="w-full bg-[#008055] hover:bg-[#006747] text-white">
                                            Start Test
                                        </Button>
                                    </div>
                                </Card>
                            </SwiperSlide>

                            <SwiperSlide>
                                <Card className="h-full">
                                    <CardHeader>
                                        <CardTitle>Technical Skills Test</CardTitle>
                                        <CardDescription>
                                            Coding challenges, Debugging tasks, or problem-solving exercises using languages like Python, JavaScript, or SQL
                                        </CardDescription>
                                    </CardHeader>
                                    <div className="px-6 pb-4">
                                        <Button className="w-full bg-[#008055] hover:bg-[#006747] text-white">
                                            Start Test
                                        </Button>
                                    </div>
                                </Card>
                            </SwiperSlide>

                        </Swiper>
                    </div>

                    {/* Employer Reviews Section */}
                    <div className="bg-[var(--subsecond)] p-6 rounded-2xl shadow-lg">
                        <h3 className="text-xl md:text-2xl font-bold text-[var(--foreground)] mb-6">
                            Discover Top Employers: Exclusive Reviews and Ratings from Apprentices
                        </h3>
                            <div className="space-y-6">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>KPMG</CardTitle>
                                        <CardDescription>
                                            "Great Company, doing an apprenticeship @KPMG was the best decision of my life"
                                        </CardDescription>
                                        <div className="mt-4 text-sm text-gray-500">
                                            <Image src={''}/>
                                            <div>
                                                <p>Pra******</p>
                                                <p>Level 6 Audit Apprentice</p>
                                            </div>
                                        </div>
                                    </CardHeader>
                                </Card>

                                <Card>
                                    <CardHeader>
                                        <CardTitle>LLOYDS BANKING GROUP</CardTitle>
                                        <CardDescription>
                                            "Best Company, doing an apprenticeship @LLOYDS is an unforgettable experience"
                                        </CardDescription>
                                    </CardHeader>
                                </Card>
                            </div>                          
                    </div>
                </div>
            </div>
        </div>
    );
}