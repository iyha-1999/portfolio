import Styles from "../../assets/scss/components/organisms/works.module.scss";

const Works = ({ modalStores, worksData, clickedThumbnail = () => {} }) => {
  return (
    <>
      <div className={Styles.works} id="works">
        <div className={Styles.container}>
          <div className={Styles.title}>works</div>
          <div className={Styles.contents}>
            {worksData.entry.map((_, index) => (
              <div
                className={Styles.card}
                key={_.title}
                onClick={() => {
                  clickedThumbnail();
                  modalStores[index].openModal();
                }}
              >
                <div className={Styles.thumbnail}>
                  <img
                    src={`${process.env.PUBLIC_URL}/${_.thumbnailImagePath}`}
                    className={Styles["thumbnail-image"]}
                    alt=""
                  />
                </div>
                <p className={Styles["card-title"]}>{_.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
