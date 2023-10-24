import * as React from "react";
import PromptList from "./List";

export default function Main() {
  return (
    <div>
      <header className="h-12 w-full top-0 text-center">
        Journaling prompts
      </header>
      <div className="p-4">
        <section>
          <PromptList />
        </section>
      </div>

      <footer className="h-12 w-full fixed bottom-0 text-center">
        credits
        {/* 
    <a href="https://www.vecteezy.com/free-vector/background">Background Vectors by Vecteezy</a>
      */}
      </footer>
    </div>
  );
}
