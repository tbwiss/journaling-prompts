import { Card, CardContent, Typography } from "@mui/material";
import * as React from "react";
import { Category } from "../data/database";

type Props = {
  selectedCat: Category | null;
  promptsAmount: number;
};

export default function PromptList({ selectedCat, promptsAmount }: Props) {
  const prompts = selectedCat?.data
    ?.sort(() => 0.5 - Math.random())
    .slice(0, promptsAmount);
  return (
    <>
      {prompts?.map((prompt, idx) => (
        <Card className="mb-3 flex justify-left items-center" key={idx}>
          <CardContent>
            <Typography color="text">{prompt}</Typography>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
