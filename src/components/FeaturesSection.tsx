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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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

                    <div className="space-y-6 bg-[var(--subsecond)] p-5 rounded-2xl shadow-lg">
                    {/* Job Listing Card 1 */}
                        <h3 className="text-xl md:text-2xl font-bold text-[var(--foreground)] mb-6">
                            Apply Fast and Track Your Progress with just One Click
                        </h3>
                            <Swiper
                                spaceBetween={10}
                                slidesPerView={1.5}
                                breakpoints={{
                                    768: {
                                        slidesPerView: 1.5
                                    }
                                }}
                                pagination={{ clickable: true }}
                                className="pb-8"
                            >
                            <SwiperSlide>
                                <Card className="h-full p-6">
                                    <div className="flex justify-between items-start">
                                        <div className="space-y-2">
                                            <h3 className="text-xl font-semibold text-[var(--primary)]">
                                                Cyberspace Communication Specialist
                                            </h3>
                                            <div className="flex gap-4 text-sm">
                                                <span className="bg-[var(--primary)] text-white px-2 py-1 rounded">Full-Time</span>
                                                <span className="text-muted-foreground">Wolverhampton</span>
                                            </div>
                                        </div>
                                        <Button variant="outline" className="border-[var(--special)] text-[var(--special)]">
                                            Apply
                                        </Button>
                                    </div>
                                    
                                    <div className="mt-4 flex flex-col justify-between items-start">
                                        <div className="space-y-1">
                                            <p className="text-2xl font-bold text-[var(--special)]">£25,200</p>
                                            <p className="text-sm text-muted-foreground">Royal Air Force</p>
                                        </div>
                                        <span className="text-sm text-muted-foreground">☐ 12 Hours Ago</span>
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
                        </Swiper>
                    </div>
                    
                    <div className="space-y-6 bg-[var(--subsecond)] p-6 rounded-2xl shadow-lg">
                    {/* Deadline Tracker */}
                        <h3 className="text-xl md:text-2xl font-bold text-[var(--foreground)] mb-6">
                            Ace Applications with Exclusive Interview & Assessment Resources
                        </h3>
                        <Card className="p-6 bg-[var(--subsecond)]">
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-[var(--foreground)]">
                                    Get Timely Updates and Never Miss a Deadline
                                </h3>
                                <div className="flex items-center gap-4">
                                    <div className="text-3xl font-bold text-[var(--special)]">
                                        16:09:03
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        Next application window closes in
                                    </div>
                                </div>
                                <Button className="w-full bg-[var(--special)] hover:bg-[var(--primary)] text-white">
                                    Set Reminder
                                </Button>
                            </div>
                        </Card>
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
                        <h3 className="text-xl md:text-2xl font-bold text-[var(--foreground)] mb-8">
                            Discover Top Employers: Exclusive Reviews and Ratings from Apprentices
                        </h3>
                        <div className="space-y-8">
                            <Card className="p-4">
                                <CardHeader className="space-y-4 px-0 pt-0">
                                    <div className="flex justify-between">
                                        <CardTitle className="text-sm">KPMG</CardTitle>
                                        <p className="text-sm">1k Reviews</p>
                                    </div>
                                    <CardDescription className="text-base">
                                        I do enjoy my program a lot. I am happy working with many different stakeholders and it is exciting to be learning and working with the latest AI models and using them to solve various problems for the Auditors.
                                    </CardDescription>
                                    <div className="flex items-start gap-4 mt-6">
                                        <Avatar>
                                            <AvatarFallback className="bg-[var(--primary)] text-[var(--foreground)]">A</AvatarFallback>
                                        </Avatar>
                                        <div className="space-y-1">
                                            <p className="text-sm font-semibold text-[var(--primary)]">A********</p>
                                            <p className="text-sm text-muted-foreground">Level 6 Data Scientist Apprentice</p>
                                        </div>
                                    </div>
                                </CardHeader>
                            </Card>

                            <Card className="p-4">
                                <CardHeader className="space-y-4 px-0 pt-0">
                                    <div className="flex justify-between">
                                        <CardTitle className="text-sm">LLOYDS BANKING GROUP</CardTitle>
                                        <p className="text-sm">1.25k Reviews</p>
                                    </div>
                                    <CardDescription className="text-base">
                                        I really love my programme. Aside from enjoying the subject matter, everyone I work with is really welcoming of the apprenticeship scheme and as such are always willing to help me. I'm also given a lot of flexibility to explore things that interest me and as a result I have never felt any 2 days to be the same and monotonous.
                                    </CardDescription>
                                    <div className="flex items-start gap-4 mt-6">
                                        <Avatar>
                                            <AvatarFallback className="bg-[var(--special)] text-[var(--foreground)]">A</AvatarFallback>
                                        </Avatar>
                                        <div className="space-y-1">
                                            <p className="text-sm font-semibold text-[var(--primary)]">A*********</p>
                                            <p className="text-sm text-muted-foreground">Level 6 Internal Auditor Apprentice</p>
                                        </div>
                                    </div>
                                </CardHeader>
                            </Card>
                        </div>
                    </div>
  
                </div>
            </div>
        </div>
    );
}