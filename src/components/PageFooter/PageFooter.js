import React, {Component} from "react";
import {withTranslation} from "react-i18next";
import styles from './style.module.scss'
import recordIcon from './img/recordicon.png'

import githubIconMD from './img/md_github.png'
import mailIconMD from './img/md_mail.png'
import twitterIconMD from './img/md_twitter.png'

class PageFooter extends Component {
    render() {
        const {t} = this.props

        return (
            <div className={styles.navFooter}>
                <div className={`${styles.recordPC}`}>
                    <div className={`${styles.recordLicense}`}>
                        <span>{t('footer:record_1', {year: 2020})}</span>
                        <a href="http://www.beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">
                            {t('footer:record_2')}
                        </a>
                    </div>
                    <div className={styles.recordInfo}>
                        <img alt="record" src={recordIcon}/>
                        <p>{t('footer:record_3')}</p>
                    </div>
                    <div className={`${styles.social}`}>
                        <a href="mailto:contact@itering.com" target="_blank" rel="noopener noreferrer">
                            <img alt="mail" width={28} src={mailIconMD}/>
                        </a>
                        <a href="https://github.com/itering" target="_blank" rel="noopener noreferrer">
                            <img alt="github" width={17} src={githubIconMD}/>
                        </a>
                        <a href="https://twitter.com/IteringTech" target="_blank" rel="noopener noreferrer">
                            <img alt="twitter" width={23} src={twitterIconMD}/>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default withTranslation()(PageFooter);
