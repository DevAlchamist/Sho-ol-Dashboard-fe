"use client";

import * as React from "react";
import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";

export default function SearchBar() {
  const [query, setQuery] = React.useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Search query:", query);
    // Typically, you would handle the search here, e.g., by calling an API or updating the page content
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex w-full max-w-sm items-center space-x-2"
    >
      <Search className="absolute left-5 h-4 w-4 text-gray-400" />
      <Input
        type="search"
        placeholder="Search Here..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="pl-8 border-none rounded-full" // Adds padding to avoid icon overlap
      />
    </form>
  );
}
