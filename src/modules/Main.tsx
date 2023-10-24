import * as React from "react";
import PromptList from "./PromptList";
import { Chip, Divider, Typography } from "@mui/material";
import Categories from "./Categories";
import { Category } from "../data/database";

export default function Main() {
  const [selectedCat, setSelectedCat] = React.useState<Category | null>(null);
  const [promptsAmount, setPromptsAmount] = React.useState<number>(
    Number(localStorage.getItem("NbrOfPrompts")) || 1
  );

  return (
    <div>
      <header className="h-12 w-full top-0 flex justify-around items-center bg-white rounded-bl-2xl">
        <Typography color="text.secondary">Journaling prompts</Typography>
        <div className="flex flex-row">
          {[1, 2, 3].map((number, idx) => (
            <div key={number} className={`${idx !== 0 && "pl-3"}`}>
              <Chip
                label={number}
                className={`w-10 ${promptsAmount === number && "opacity-50"}`}
                onClick={() => {
                  setPromptsAmount(number);
                  localStorage.setItem("NbrOfPrompts", String(number));
                }}
              />
            </div>
          ))}
        </div>
      </header>
      <div className="p-4">
        <section>
          <Categories
            selectedCat={selectedCat}
            setSelectedCat={setSelectedCat}
          />
        </section>
        <div className="mt-4 mb-4">
          <Divider />
        </div>
        <section>
          <PromptList selectedCat={selectedCat} promptsAmount={promptsAmount} />
        </section>
      </div>

      <footer className="h-12 w-full fixed bottom-0 flex justify-center items-center bg-white rounded-tr-3xl text-xs">
        <span className="pr-3">credits:</span>
        <span className="pr-3">
          <a href="https://blog.gratefulness.me/self-reflection-journaling-ideas-for-you/">
            prompts
          </a>
        </span>
        <span className="pr-3">
          <a href="https://dayoneapp.com/blog/journal-prompts/">prompts</a>
        </span>
        <span className="pr-3">
          <a
            href="https://www.vecteezy.com/free-vector/background"
            about="Background Vectors by Vecteezy"
          >
            images
          </a>
        </span>
      </footer>
    </div>
  );
}
