import * as React from "react";
import PromptList from "./PromptList";
import { Chip, Divider, Typography } from "@mui/material";
import Categories from "./Categories";
import { Category } from "../data/database";

const STORAGE_KEY_NBR_OF_PROMPTS = "NbrOfPrompts";

export default function Main() {
  const [selectedCat, setSelectedCat] = React.useState<Category | null>(null);
  const [promptsAmount, setPromptsAmount] = React.useState<number>(
    Number(localStorage.getItem(STORAGE_KEY_NBR_OF_PROMPTS)) || 1
  );
  const [, updateState] = React.useState<any>();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  const clickPrompt = () => {
    const next = promptsAmount + 1 > 3 ? 1 : promptsAmount + 1;
    setPromptsAmount(next);
    localStorage.setItem(STORAGE_KEY_NBR_OF_PROMPTS, String(next));
  };

  const setNextCategory = (cat: Category) => {
    setSelectedCat(cat);
    forceUpdate();
  };

  return (
    <div id="bg-element" className="w-full flex justify-center">
      <div className="max-w-[50rem]">
        <header className="h-16 px-4 w-full top-0 flex justify-between items-center bg-white text-black border-b-2 rounded-b-2xl">
          <Typography fontSize={18} color="text" className="opacity-70">
            Journaling prompts
          </Typography>
          <div className="flex flex-row">
            <div className="pl-3">
              <Chip
                label={promptsAmount}
                color="warning"
                className="w-10 font-bold"
                onClick={clickPrompt}
              />
            </div>
          </div>
        </header>
        <div className="m-4 mb-10 min-h-[calc(100vh-10.5rem)] overflow-scroll">
          <section>
            <Categories
              selectedCat={selectedCat}
              setSelectedCat={setNextCategory}
            />
          </section>
          <div className="mt-4 mb-4">
            <Divider />
          </div>
          <section>
            <PromptList
              selectedCat={selectedCat}
              promptsAmount={promptsAmount}
            />
          </section>
        </div>

        <footer className="h-12 w-full bottom-0 flex justify-center items-center bg-white rounded-tr-3xl text-xs">
          <div className="">
            <span className="pr-3">Credits:</span>
            <span className="pr-3">
              <a
                className="underline"
                href="https://blog.gratefulness.me/self-reflection-journaling-ideas-for-you/"
              >
                prompts
              </a>
            </span>
            <span className="pr-3">
              <a
                className="underline"
                href="https://dayoneapp.com/blog/journal-prompts/"
              >
                prompts
              </a>
            </span>
            <span className="pr-3">
              <a
                className="underline"
                href="https://www.vecteezy.com/free-vector/background"
                about="Background Vectors by Vecteezy"
              >
                images
              </a>
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}
