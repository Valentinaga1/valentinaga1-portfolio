import React from 'react'
import styles from "./styles.module.css"
import SocialLinks from '@/components/Atoms/SocialLinks'

const Contact = () => {
  return (
    <div className={styles["contact__main"]}  id="contact">
      <h2 className={styles["contact__title"]}>{`Let's work together`}</h2>
      <p className={styles["contact__parragraph"]}>{`Ready to collaborate on your next project or explore job opportunities? Don't hesitate
      to reach out. I'm eager to connect and discuss how we can work together to achieve your
      goals.`}</p>
      <div  className={styles["contact__info-container"]}>
        <div className={styles["contact__info-phone-container"]}>
          <p className={styles["contact__info"]}>Call:</p>
          <p className={styles["contact__info"]}>+51 321 867 2795</p>
        </div>
        <div className={styles["contact__info-email-container"]}>
          <p className={styles["contact__info"]}>Email:</p>
          <p className={styles["contact__info"]}>valentinagoa2@gmail.com</p>
        </div>
      </div>
      <SocialLinks />
      <svg className={styles["contact__background-details"]} width="332" height="300" viewBox="0 0 332 520" fill="none" xmlns="http://www.w3.org/2000/svg" id="null" class="svg replaced-svg">
        <g clip-path="url(#clip0_1_50)">
          <path d="M136.513 15.5182L134.186 19.2863C132.901 21.3674 130.696 22.7969 128.168 23.0517L123.761 23.4959C122.858 23.587 122.585 24.7761 123.357 25.2529L127.125 27.5797C129.206 28.8647 130.635 31.0697 130.89 33.5984L131.334 38.0046C131.425 38.9076 132.615 39.1813 133.091 38.4093L135.418 34.6412C136.703 32.5601 138.908 31.1307 141.437 30.8758L145.843 30.4315C146.746 30.3405 147.02 29.1513 146.248 28.6746L142.48 26.3478C140.399 25.0628 138.969 22.8578 138.714 20.3292L138.27 15.9228C138.179 15.0198 136.99 14.7462 136.513 15.5182ZM126.746 25.1084L128.358 24.9459C131.37 24.6424 134.154 22.9625 135.806 20.2866L136.657 18.9076L136.82 20.5201C137.124 23.5314 138.803 26.3153 141.479 27.9677L142.858 28.8191L141.246 28.9817C138.235 29.2852 135.451 30.9651 133.798 33.641L132.947 35.02L132.784 33.4075C132.481 30.3962 130.801 27.6123 128.125 25.9599L126.746 25.1084Z" fill="white"></path>
        </g>
        <g  clip-path="url(#clip1_1_50)">
          <path d="M161.479 48.0801L158.28 53.2613C156.513 56.1228 153.481 58.0883 150.004 58.4388L143.945 59.0495C142.704 59.1747 142.327 60.8098 143.389 61.4653L148.57 64.6647C151.432 66.4316 153.397 69.4634 153.748 72.9403L154.358 78.999C154.484 80.2406 156.119 80.6169 156.774 79.5553L159.974 74.3742C161.74 71.5127 164.772 69.5473 168.249 69.1968L174.308 68.586C175.549 68.4608 175.926 66.8257 174.864 66.1701L169.683 62.9708C166.822 61.204 164.856 58.1721 164.506 54.6952L163.895 48.6365C163.77 47.3948 162.134 47.0187 161.479 48.0801ZM148.049 61.2667L150.267 61.0432C154.407 60.6259 158.235 58.316 160.507 54.6367L161.678 52.7406L161.901 54.9578C162.319 59.0983 164.628 62.9262 168.308 65.1981L170.204 66.3689L167.987 66.5924C163.846 67.0098 160.018 69.3197 157.746 72.999L156.575 74.8951L156.352 72.6779C155.935 68.5374 153.625 64.7095 149.945 62.4375L148.049 61.2667Z" fill="#505050"></path>
        </g>
        <path opacity="0.2" d="M138.845 318.378C109.818 297.906 94.7726 308.529 100.486 333.365C106.199 358.2 104.877 404.225 80.5875 376.834C56.298 349.442 18.3022 300.769 23.2166 343.711C39.1156 410.075 43.5192 442.324 -1.86691 387.156C-47.253 331.989 -57.4637 367.683 -35.4315 418.279C-13.3994 468.875 -53.7387 444.843 -69.3516 421.718C-93.3594 384.834 -115.646 391.277 -108.434 419.948C-101.222 448.62 -99.1389 500.324 -128.355 468.603C-157.571 436.881 -190.003 410.73 -183.544 447.137C-177.085 483.543 -165.831 536.086 -191.407 510.922C-211.868 490.791 -214.159 487.364 -212.748 488.166" stroke="white" stroke-width="3" stroke-linecap="round"></path>
        <defs>
          <clipPath id="clip0_1_50">
            <rect width="24.3643" height="24.3643" fill="white" transform="matrix(0.974491 0.224426 0.224426 -0.974491 120.197 36.1023)"></rect>
          </clipPath>
          <clipPath id="clip1_1_50">
            <rect width="33.5009" height="33.5009" fill="white" transform="matrix(0.974491 0.224425 0.224427 -0.974491 139.044 76.3831)"></rect>
          </clipPath>
        </defs>
      </svg>
      <svg className={styles["contact__background-details-2"]} width="73" height="70" viewBox="0 0 73 70" fill="none" xmlns="http://www.w3.org/2000/svg" id="null" class="svg replaced-svg">
        <path d="M14.8703 4.13233C17.9869 4.65276 25.8876 9.01807 25.4168 16.2356M25.4168 16.2356C25.2826 18.2941 25.0906 20.9652 22.7343 22.9175C20.2697 24.9594 15.3375 20.0807 25.4168 16.2356ZM25.4168 16.2356C31.1211 14.2288 43.2925 13.2901 46.3443 25.5901C48.2178 35.2804 43.4232 46.9584 40.8512 54.6583C46.7788 45.4157 61.7113 34.6111 69.7087 33.6089" stroke="#FED546" stroke-width="3"></path>
        <path d="M15.9116 7.72543L15.0291 3.93763L18.8267 3.09829L18.5543 1.92932L13.5847 3.0277L14.7397 7.98448L15.9116 7.72543Z" fill="#FED546"></path>
        <path d="M50.7904 65.4271C50.7236 64.3643 50.2236 61.5462 48.7581 58.7754" stroke="#FED546" stroke-width="3"></path>
        <path d="M68.4524 65.3191C65.6115 62.2671 58.4138 55.7598 52.3503 54.1463" stroke="#FED546" stroke-width="3"></path>
        <path d="M26.2685 4.41973C27.7062 4.33857 30.5292 7.35779 29.6686 10.3576" stroke="#FED546" stroke-width="3"></path>
      </svg>
    </div>
  )
}

export default Contact