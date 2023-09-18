import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";

const Phones = () => {
  const [phones, setPhones] = useState([]);
  useEffect(() => {
    //   fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
    //     .then((res) => res.json())
    //     .then((data) => setPhones(data.data));
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const phoneData = data.data.data;
        const phonesWithFakeData = phoneData.map((phone) => {
          const obj = {
            name: phone.phone_name,
            price: parseInt(phone.slug.split("-")[1]),
          };
          return obj;
        });
        console.log(phonesWithFakeData);
        setPhones(phonesWithFakeData);
      });
  }, []);
  return (
    <div>
      <h2 className="text-4xl font-semibold mb-7">Phone: {phones.length}</h2>
     <div className="w-2/4">
     <ResponsiveContainer width="100%" height={400}>
        <BarChart width={600} height={40} data={phones}>
          <Bar dataKey="price" fill="#8884d8" />
          <XAxis dataKey={"name"} />
          <YAxis/>
          <Tooltip/>
        </BarChart>
      </ResponsiveContainer>
     </div>
    </div>
  );
};

export default Phones;
