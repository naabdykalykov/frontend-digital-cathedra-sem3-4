import React from "react";
import { useState } from "react";
import styles from "./styles.module.scss";
import photoIconUrl from "../shared/assets/icons/photoIcon.svg";
import { PhotoCard } from "../components/PhotoCard";

export const Result = () => {
  const [uploadedPhotos, setUploadedPhotos] = useState([
    "/images/bicycle.png",
    "/images/smartphone.png",
    "/images/t-shirt.png",
    "/images/table.png",
    "/images/jeans.png",
  ]);

  const handleDownload = (photoUrl) => {
    const link = document.createElement("a");
    link.href = photoUrl;
    const fileName = photoUrl.split("/").pop() || "restored-photo";
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const currentDateTime = new Date().toLocaleString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const handleDownloadAll = () => {
    uploadedPhotos.forEach((photo) => {
      handleDownload(photo);
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <img src={photoIconUrl} />
        Ожидайте обработки фотографий
      </div>
      <div className={styles.titleDescription}>
        <p>Заварите чай пока наш искусственный интеллект</p>
        <p>обрабатывает ваш запрос</p>
      </div>
      <div className={styles.resultContainer}>
        <div className={styles.downloadInformation}>
          <div>Здесь должен быть прогрессБар</div>

          <div className={styles.time}>{currentDateTime}</div>
        </div>
        <div className={styles.photosContainer}>
          {uploadedPhotos.map((photo, index) => (
            <PhotoCard
              key={index}
              photo={photo}
              width={258}
              height={329}
              type="download"
              onClick={() => handleDownload(photo)}
            />
          ))}
        </div>
      </div>
      <button className={styles.downloadAllButton} onClick={handleDownloadAll}>
        Скачать все фотографии
      </button>
    </div>
  );
};
