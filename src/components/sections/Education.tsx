import { GraduationCap, BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Education = () => {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "California State University, East Bay",
      year: "August 2022 - May 2024",
      details: "Focused on Advanced Software Engineering, Machine Learning, and Cloud Computing",
      icon: <GraduationCap className="w-8 h-8 text-primary" />
    },
    {
      degree: "Bachelor of Technology in Computer Science",
      school: "Sreenidhi Institute of Science and Technology",
      year: "August 2018 - June 2022",
      details: "Core Computer Science fundamentals, Data Structures, and Algorithms",
      icon: <BookOpen className="w-8 h-8 text-primary" />
    }
  ];

  return (
    <section className="py-32 mt-16" id="education">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white hover:text-primary transition-colors duration-300 animate-fade-up font-playfair text-center">Education</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <Card key={index} className="p-8 bg-black/50 backdrop-blur-sm border-white/10 hover:border-primary/50 transition-all duration-300 card-hover">
              <div className="flex items-start gap-4">
                <div className="mt-1">{edu.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-white">{edu.degree}</h3>
                  <p className="text-lg text-primary mb-2">{edu.school}</p>
                  <p className="text-muted-foreground mb-4">{edu.year}</p>
                  <p className="text-gray-300">{edu.details}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};