import Styles from "../../assets/scss/components/organisms/profile.module.scss";
import Icon from "../../assets/png/profileIcon.png";

const Profile = () => {
  return (
    <>
      <div className={Styles.profile} id="profile">
        <div className={Styles.container}>
          <div className={Styles.title}>profile</div>
          <div className={Styles.contents}>
            <div className={Styles.icon}>
              <img className={Styles["icon-image"]} src={Icon} alt="" />
            </div>
            <div className={Styles.description}>
              <p className={Styles["description-text"]}>
                電子書籍のDTPオペレータ、webデザインの仕事などに従事していたが、
                ゲーム制作の仕事をしたくなり、ブラウザゲームの会社にデザイナー兼コーダーとして就職。
                フロントのコーディングにハマっていき、デザイナーからフロントエンジニアとなる。
                直近では広告クリエイティブのコーディング、LP、Vue.jsを使用した動画サービスの開発などに携わりました。
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
