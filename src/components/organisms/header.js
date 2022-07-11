import Styles from "../../assets/scss/components/organisms/header.module.scss";
import Button from "../atoms/button";
import { ReactComponent as ButtonSvg } from "../../assets/svg/bars_24.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Header = (props) => {
  return (
    <>
      <div className={Styles.header}>
        <div className={Styles.title__wrap}>
          <AnchorLink href="#profile" offset="50">
            <div className={Styles.title}>Portfolio</div>
          </AnchorLink>
        </div>
        <div className={Styles.spNav}>
          <Button
            defaultStyle={Styles.spNav__button}
            contents={<ButtonSvg></ButtonSvg>}
            clicked={props.clickedHamburgerMenuButton}
          ></Button>
        </div>
        <div className={Styles.pcNav}>
          <AnchorLink href="#profile" offset="50">
            <Button
              defaultStyle={Styles.pcNav__button}
              hoveredStyle={Styles.pcNav__button__hovered}
              contents="profile"
            />
          </AnchorLink>
          <AnchorLink href="#works" offset="50">
            <Button
              defaultStyle={Styles.pcNav__button}
              hoveredStyle={Styles.pcNav__button__hovered}
              contents="works"
            />
          </AnchorLink>
        </div>
      </div>
    </>
  );
};

export default Header;
