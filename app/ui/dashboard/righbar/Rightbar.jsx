import React from "react";
import styles from "./rightbar.module.css";
import Image from "next/image";
import { MdPlayCircleFilled } from "react-icons/md";
function Rightbar() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image alt="" src="/astronaut.png" fill className={styles.bg} />
        </div>
        <div className={styles.texts}>
          <span className={styles.notification}>Available now</span>
          <h3 className={styles.title}>How to use a new version</h3>
          <span className={styles.subtitle}>Takes 4 minutes to learn</span>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
            possimus exercitationem. Fugiat maiores minima obcaecati
            accusantium. Dolores eveniet officiis, officia quod molestias
            corrupti amet natus corporis assumenda culpa similique perferendis?
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image alt="" src="/astronaut.png" fill className={styles.bg} />
        </div>
        <div className={styles.texts}>
          <span className={styles.notification}>Available now</span>
          <h3 className={styles.title}>How to use a new version</h3>
          <span className={styles.subtitle}>Takes 4 minutes to learn</span>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
            possimus exercitationem. Fugiat maiores minima obcaecati
            accusantium. Dolores eveniet officiis, officia quod molestias
            corrupti amet natus corporis assumenda culpa similique perferendis?
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
    </div>
  );
}

export default Rightbar;
