import React from "react"
import styles from "./Footer.module.scss"
import Button from "../../components/ui/button/Button"
import Input from "../../components/ui/field/Input"
import FooterHeading from "../../components/ui/heading/FooterHeading"
import Description from "../../components/ui/heading/Description"
import CopyRight from "../../components/ui/heading/CopyRight"
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
          <FooterHeading text={"about us"} uppercase={true}/>
          <Description
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, "
            }
            descriptionClassName={"footer__paragraph"}
          />
        </div>
        <div>
          <FooterHeading text={"Newsletter"} uppercase={false}/>
					<div className={styles.footer__}>
						<Input placeholder="Enter Your Email"/>
						<Button text="Subscribe" color="pink" uppercase={true} />
					</div>
        </div>	
        <div>
          <FooterHeading text={"need help"} uppercase={true}/>
          <Description
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, "
            }
            descriptionClassName={"footer__paragraph"}
          />
        </div>
        <div>
          <FooterHeading text={"contact us"} uppercase={true}/>
        </div>
      </div>
      <CopyRight />
    </footer>
  )
}

export default Footer
