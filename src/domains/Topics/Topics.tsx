import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// Assumed custom multiselect component
import { motion } from "framer-motion";
import { MultiSelect } from "./components/MultiSelect";
import { BowArrow } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { postData } from "@/services/apiServices";
import { toast } from "sonner";
import { useNavigate } from "react-router";


const data = [
  { id: 1, category: "Programming Language", name: "JavaScript", level: "Intermediate", type: "Interpreted" },
  { id: 2, category: "Programming Language", name: "Python", level: "Beginner", type: "Interpreted" },
  { id: 3, category: "Programming Language", name: "C++", level: "Advanced", type: "Compiled" },
  { id: 4, category: "CS Concept", name: "Data Structures", level: "Beginner", type: "Core Concept" },
  { id: 5, category: "CS Concept", name: "Operating Systems", level: "Intermediate", type: "Theory" },
  { id: 6, category: "CS Concept", name: "Networking", level: "Intermediate", type: "Theory" },
  { id: 7, category: "Programming Language", name: "Rust", level: "Advanced", type: "Compiled" },
  { id: 8, category: "CS Concept", name: "Algorithms", level: "Intermediate", type: "Core Concept" },
  { id: 9, category: "Programming Language", name: "Java", level: "Intermediate", type: "Compiled" },
  { id: 10, category: "CS Concept", name: "Databases", level: "Beginner", type: "Theory" }
];

const allCategories = [...new Set(data.map(d => d.category))];
const allLevels = ["Beginner", "Intermediate", "Advanced"];

export default function Topics() {
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedLevel, setSelectedLevel] = useState("");

  const navigate = useNavigate()

  const filtered = data.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategories.length ? selectedCategories.includes(item.category) : true;
    const matchesLevel = selectedLevel ? item.level === selectedLevel : true;
    return matchesSearch && matchesCategory && matchesLevel;
  });

  const { mutateAsync: mutateGenerateQuiz } = useMutation({
    mutationKey: ["mutateGenerateQuiz"],
    mutationFn: async (topic: string) => postData(`quiz/createQuiz?topic=${topic}`),
    onSuccess: () => {
      toast.dismiss("gen-quiz")
      toast.success("Quiz generated successfuly")
      navigate("/quizes")
    },
    onError:() =>{
      toast.dismiss("gen-quiz")
      toast.error("Failed to generate quiz. please try again")
    }
  })

  const handleGenerateQuiz = (topic: string) =>{
    toast.loading(`Generating quiz for ${topic}`,{id: "gen-quiz"})
    mutateGenerateQuiz(topic)
  }


  return (
    <div className="py-6 px-12 space-y-6 w-full">
      <div className="flex flex-col sm:flex-row sm:items-end gap-4">
        <Input
          placeholder="Search topics..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="sm:w-1/3"
        />

        <MultiSelect
          placeholder="Filter by category"
          options={allCategories.map(cat => ({ label: cat, value: cat }))}
          selected={selectedCategories}
          onChange={setSelectedCategories}
        />

        <Select value={selectedLevel} onValueChange={setSelectedLevel}>
          <SelectTrigger className="sm:w-1/3">
            <SelectValue placeholder="Filter by level" />
          </SelectTrigger>
          <SelectContent>
            {allLevels.map(level => (
              <SelectItem key={level} value={level}>{level}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filtered.map(topic => (
          <motion.div
            key={topic.id}
            whileHover={{ scale: 1.01 }}
            className="transition-transform"
          >
            <Card className="rounded-2xl shadow-sm hover:shadow-md border-none hover:cursor-pointer">
              <CardContent className="p-4 space-y-2">
                <div className="text-lg font-semibold">{topic.name}</div>
                <div className="text-sm text-muted-foreground">{topic.category}</div>
                <div className="text-sm">Type: {topic.type}</div>
                {/* <Badge variant="outline" className="mt-2">{topic.level}</Badge> */}
              </CardContent>
              <CardFooter>
                <Button onClick={()=>{
                  handleGenerateQuiz(topic.name)
                }} variant="outline" className="w-full flex items-center group">Generate Quiz<span><BowArrow className="group-hover:translate-x-1 duration-200 transition-all" /></span></Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
