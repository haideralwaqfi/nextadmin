"use client";

import React from "react";
import styles from "./search.module.css";
import { MdSearch } from "react-icons/md";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
function Search({ placeholder }) {
  const searchPrams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleChange = useDebouncedCallback((e) => {
    const params = new URLSearchParams(searchPrams);
    e.target.value && e.target.value.length > 2
      ? params.set("q", e.target.value)
      : params.delete("q");
    replace(`${pathname}?${params}`);
  }, 300);
  return (
    <div className={styles.container}>
      <MdSearch />
      <input
        type="text"
        placeholder={placeholder}
        className={styles.input}
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
