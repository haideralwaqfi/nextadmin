import React from "react";
import styles from "../../../ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";
function SingleUserPage() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image alt="" src="/noproduct.jpg" fill />
        </div>
        IPhone
      </div>

      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Title</label>
          <input type="text" name="title" placeholder="IPhone" />
          <label>Price</label>
          <input type="number" name="price" placeholder="$999" />
          <label>Stock</label>
          <input type="number" name="stock" placeholder="23" />
          <label>Color</label>
          <input type="text" name="color" placeholder="Red" />
          <label>Size</label>
          <textarea type="text" name="size" placeholder="" />
          <label htmlFor="cat">Category</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computer">Computer</option>
          </select>
          <label htmlFor="isActive">Description</label>
          <textarea
            name="desc"
            id="desc"
            rows="10"
            placeholder="Description"></textarea>

          <button>Update</button>
        </form>
      </div>
    </div>
  );
}

export default SingleUserPage;
