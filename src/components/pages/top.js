import useModal from "../atoms/modalHooks";
import HamburgerMenuModal from "../molecules/hamburgerMenuModal";
import Header from "../organisms/header";
import Profile from "../organisms/profile";
import Works from "../organisms/works";
import WorkModal from "../molecules/workModal";
import Footer from "../organisms/footer";
import workModalsData from "../../data/workModals.json";
import worksData from "../../data/works.json";

import Styles from "../../assets/scss/components/pages/top.module.scss";

const Top = () => {
  const hamburgerMenuModalStore = useModal();
  const workModalStores = [
    useModal(),
    useModal(),
    useModal(),
    useModal(),
    useModal(),
    useModal(),
    useModal(),
    useModal(),
    useModal(),
    useModal(),
  ];
  //bodyのスクロールの状態を制御
  const stoppingBodyScroll = () => {
    const elm = document.querySelector("body");
    elm.style.overflowY = "hidden";
  };
  const cancelBodyScroll = () => {
    const elm = document.querySelector("body");
    elm.style.overflowY = "auto";
  };

  return (
    <div className={Styles.top}>
      {/* modal */}
      <HamburgerMenuModal
        modalStatus={hamburgerMenuModalStore.modalStatus}
        closeModal={hamburgerMenuModalStore.closeModal}
      ></HamburgerMenuModal>
      {workModalsData.entry.map((_, index) => (
        <WorkModal
          key={index}
          modalStatus={workModalStores[index].modalStatus}
          closeModal={workModalStores[index].closeModal}
          title={_.title}
          description={_.description}
          links={_.links}
          developmentEnvironmentDetail={_.developmentEnvironmentDetail}
          thumbnails={_.thumbnails}
          clickedCloseButton={cancelBodyScroll}
        ></WorkModal>
      ))}

      {/* main */}
      <Header
        clickedHamburgerMenuButton={hamburgerMenuModalStore.openModal}
      ></Header>
      <Profile></Profile>
      <Works
        modalStores={workModalStores}
        worksData={worksData}
        clickedThumbnail={stoppingBodyScroll}
      ></Works>
      <Footer></Footer>
    </div>
  );
};

export default Top;
