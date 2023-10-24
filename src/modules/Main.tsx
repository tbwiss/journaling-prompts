import * as React from "react";
import PromptList from "./List";
import { Typography } from "@mui/material";

export default function Main() {
  return (
    <div>
      <header className="h-12 w-full top-0 flex justify-center items-center bg-white rounded-bl-2xl">
        <Typography color="text.secondary">Journaling prompts</Typography>
      </header>
      <div className="p-4">
        <section>
          <PromptList />
        </section>
      </div>

      <footer className="h-12 w-full fixed bottom-0 flex justify-center items-center bg-white rounded-tr-3xl text-sm">
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
