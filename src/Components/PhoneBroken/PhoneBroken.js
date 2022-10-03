import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
const PhoneBroken = () => {
  const [phones, setPhones] = useState([]);
  //   useEffect(() => {
  //     axios
  //       .get("https://openapi.programming-hero.com/api/phones?search=iphone")
  //       .then((data) => console.log(data));
  //   }, []);
  useEffect(() => {
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const phonesLoaded = data.data.data;
        const phoneData = phonesLoaded.map((phone) => {
          const parts = phone.slug.split("-");
          const price = parseInt(parts[1]);
          const singlePhone = {
            name: phone.phone_name,
            price: price,
          };
          return singlePhone;
        });
        console.log(phoneData);
        setPhones(phoneData);
      });
  }, []);
  return (
    <div>
      <BarChart width={550} height={440} data={phones}>
        <Bar type="monotone" dataKey="price" stroke="#8884d8" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </BarChart>
    </div>
  );
};

export default PhoneBroken;
