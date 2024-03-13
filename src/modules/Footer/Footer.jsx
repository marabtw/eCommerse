import styles from "./Footer.module.scss"

import Button from "../../ui/Button/Button"
import Input from "../../ui/Field/Input"
import FooterHeading from "../../ui/heading/FooterHeading"
import Description from "../../ui/heading/Description"
import CopyRight from "../../ui/heading/CopyRight"
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  YoutubeIcon,
  LocationIcon,
  CallIcon,
  MainIcon,
} from "../../ui/icons/icons"

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__icons}>
        <FacebookIcon className={styles.footer__icon} />
        <TwitterIcon className={styles.footer__icon} />
        <InstagramIcon className={styles.footer__icon} />
        <YoutubeIcon className={styles.footer__icon} />
      </div>
      <div className={styles.footer__items}>
        <div className={styles.footer__item}>
          <FooterHeading text={"about us"} uppercase={true} />
          <Description
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, "
            }
            descriptionClassName={"footer__paragraph"}
          />
        </div>
				
        <div className={styles.footer__item}>
          <FooterHeading text={"Newsletter"} uppercase={false} />
          <div className={styles.footer__send}>
            <Input placeholder="Enter Your Email" />
            <Button text="Subscribe" color="pink" uppercase={true} />
          </div>
        </div>
        <div className={styles.footer__item}>
          <FooterHeading text={"need help"} uppercase={true} />
          <Description
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, "
            }
            descriptionClassName={"footer__paragraph"}
          />
        </div>
        <div className={styles.footer__item}>
          <FooterHeading text={"contact us"} uppercase={true} />
          <div className={styles.footer__infos}>
            <div className={styles.footer__info}>
              <LocationIcon />
              <p>Gb road 123 london Uk</p>
            </div>
            <div className={styles.footer__info}>
              <CallIcon />
              <p>+01 12345678901</p>
            </div>
            <div className={styles.footer__info}>
              <MainIcon />
              <p>demo@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <CopyRight />
    </footer>
  )
}

export default Footer
