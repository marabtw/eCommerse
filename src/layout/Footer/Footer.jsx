import React from "react"
import styles from "./Footer.module.scss"
import CopyRight from "../../components/ui/heading/CopyRight"
import FooterHeading from "../../components/ui/heading/FooterHeading"
import Description from "../../components/ui/heading/Description"
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  YoutubeIcon,
} from "../../components/ui/icons/icons"

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__icons}>
        <FacebookIcon className={styles.footer__icon} />
        <TwitterIcon className={styles.footer__icon} />
        <InstagramIcon className={styles.footer__icon} />
        <YoutubeIcon className={styles.footer__icon} />
      </div>
      <div className={styles.footer__info}>
        <div>
          <FooterHeading text={"ABOUT US"} />
          <Description
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, "
            }
            descriptionClassName={"footer__paragraph"}
          />
        </div>
        <div>
          <FooterHeading text={"Newsletter"} />
        </div>
        <div>
          <FooterHeading text={"NEED HELP"} />
          <Description
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, "
            }
            descriptionClassName={"footer__paragraph"}
          />
        </div>
        <div>
          <FooterHeading text={"CONTACT US"} />
        </div>
      </div>
      <CopyRight />
    </footer>
  )
}

export default Footer
