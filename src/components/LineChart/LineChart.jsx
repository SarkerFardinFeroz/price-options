import {
  LineChart as LChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
const LineChart = () => {
  const subjectMarksData = [
    { id: 1, name: "Alice", physics: 85, chemistry: 90, math: 78 },
    { id: 2, name: "Bob", physics: 78, chemistry: 85, math: 80 },
    { id: 3, name: "Charlie", physics: 92, chemistry: 88, math: 95 },
    { id: 4, name: "David", physics: 88, chemistry: 84, math: 90 },
    { id: 5, name: "Emma", physics: 70, chemistry: 75, math: 68 },
    { id: 6, name: "Frank", physics: 95, chemistry: 91, math: 97 },
    { id: 7, name: "Grace", physics: 82, chemistry: 78, math: 85 },
    { id: 8, name: "Hannah", physics: 79, chemistry: 83, math: 77 },
    { id: 9, name: "Ian", physics: 87, chemistry: 89, math: 84 },
    { id: 10, name: "Jack", physics: 90, chemistry: 88, math: 92 },
  ];

  const data1 = [
    { name: "Score", value: 5000, value2: 3000 },
    { name: "Level", value: 500, value2: 300 },
    { name: "High Score", value: 1500, value2: 750 },
    { name: "Experience", value: 3500, value2: 1750 },
    { name: "Accuracy", value: 9200.5, value2: 4600.25 },
  ];

  return (
    <div className="flex flex-col md:flex-row mt-14">
      <ResponsiveContainer width="100%" height={400}>
        <LChart width={400} height={350} data={subjectMarksData}>
          <XAxis dataKey={"name"} />
          <YAxis />
          <Line dataKey="math" stroke="red" />
          <Line dataKey="physics" stroke="blue" />
        </LChart>
      </ResponsiveContainer>
      <ResponsiveContainer width="100%" height={400}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data1}>
          <PolarGrid />
          <PolarAngleAxis dataKey="name" />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Radar
            name="Mike"
            dataKey="value"
            stroke="#3d0f0ff0 "
            fill="#3d0f0ff0 "
            fillOpacity={0.6}
          />
          <Radar
            name="Lily"
            dataKey="value2"
            stroke="#ff710094"
            fill="#ff710094"
            fillOpacity={0.6}
          />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChart;
