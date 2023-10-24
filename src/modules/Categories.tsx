import * as React from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { Category, categories } from "../data/database";

type Props = {
  selectedCat: Category | null;
  setSelectedCat: any;
};

export default function Categories({ selectedCat, setSelectedCat }: Props) {
  return (
    <>
      <Grid container spacing={1}>
        {categories.map((category) => (
          <Grid item key={category.key} xs={6}>
            <Card
              className={`mb-1 flex justify-left items-center text-center rounded-2xl ${
                selectedCat?.key === category.key && "opacity-70"
              }`}
              onClick={() => setSelectedCat(category)}
            >
              <CardContent>
                <Typography color="text.primary">{category.label}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
