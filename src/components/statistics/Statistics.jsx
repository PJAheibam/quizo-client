import React from "react";
import { Container, Wrapper, FooterText } from "./Statistics.styles";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useLoaderData } from "react-router-dom";
import { getTopicResultInfo } from "../../utils/updateDataToLocalStorage";
import { useTheme } from "styled-components";

const Statistics = () => {
  const theme = useTheme();
  const topics = useLoaderData();
  const data = topics.map((topic) => {
    const info = getTopicResultInfo(topic.id);
    return { ...topic, ...info };
  });

  return (
    <Container>
      <Wrapper>
        <ResponsiveContainer width="100%" aspect={1.5}>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="name"
              tick={{ stroke: theme.text.secondary, strokeWidth: 0 }}
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="correctGuessed" fill="#82ca9d" />
            <Bar dataKey="total" fill="#8884d8" />
            <Bar dataKey="wrongGuessed" fill="#ff6d53" />
          </BarChart>
        </ResponsiveContainer>
        <FooterText>Result Analytics</FooterText>
      </Wrapper>
    </Container>
  );
};

export default Statistics;
