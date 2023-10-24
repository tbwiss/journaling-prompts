import { Card, CardContent, Typography } from "@mui/material";
import * as React from "react";
import { selfReflectionPrompts } from "../data/database";

export default function PromptList() {
  const prompts = selfReflectionPrompts
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);
  return (
    <>
      {prompts.map((prompt, idx) => (
        <Card className="mb-3 flex justify-left items-center" key={idx}>
          <CardContent>
            <Typography color="text.secondary">{prompt}</Typography>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
