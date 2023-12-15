import React from "react";
import styles from "../../ui/dashboard/products/products.module.css";
import Search from "@/app/ui/dashboard/search/Search";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { fetchProducts } from "@/app/lib/data";

async function ProductsPage({ searchParams }) {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;

  const { products, count } = await fetchProducts(q, page);
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.top}>
          <Search placeholder="Search for a product" />
          <Link href="/dashboard/products/add">
            <button className={styles.addButton}>Add New</button>
          </Link>
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <td>Title</td>
              <td>Description</td>
              <td>Price</td>
              <td>Created At</td>
              <td>Stock</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.title}>
                <td>
                  <div className={styles.product}>
                    <Image
                      src={product.img || "/noproduct.jpg"}
                      alt=""
                      className={styles.productImage}
                      width={40}
                      height={40}
                    />
                    {product.title}
                  </div>
                </td>
                <td>{product.desc}</td>
                <td>{product.price}</td>
                <td>{product.createdAt?.toString().slice(4, 16)}</td>
                <td>{product.stock}</td>
                <td>
                  <div className={styles.buttons}>
                    <Link href={`/dashboard/products/${product.id}`}>
                      <button className={`${styles.button} ${styles.view}`}>
                        View
                      </button>
                    </Link>
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination count={count} />
      </div>
    </div>
  );
}

export default ProductsPage;
