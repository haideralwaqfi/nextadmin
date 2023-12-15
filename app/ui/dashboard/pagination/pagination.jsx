"use client";
import React from "react";
import styles from "./pagination.module.css";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
function Pagination({ count }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const page = searchParams.get("page") || 1;
  const params = new URLSearchParams(searchParams);

  const ITEMS_PER_PAGE = 3;

  const hasPrev = ITEMS_PER_PAGE * (parseInt(page) - 1) > 0;
  const hasNext =
    ITEMS_PER_PAGE * (parseInt(page) - 1) + ITEMS_PER_PAGE < count;

  const handlePageChange = (type) => {
    type === "prev"
      ? params.set("page", parseInt(page) - 1)
      : params.set("page", parseInt(page) + 1);
    replace(`${pathname}?${params}`);
  };
  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        disabled={!hasPrev}
        onClick={() => handlePageChange("prev")}>
        Previous
      </button>
      <button
        className={styles.button}
        disabled={!hasNext}
        onClick={() => handlePageChange("next")}>
        Next
      </button>
    </div>
  );
}

export default Pagination;
