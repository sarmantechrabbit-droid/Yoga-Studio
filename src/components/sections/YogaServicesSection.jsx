import React from "react";
import servicebg from "../../assets/image/servicebg.png";
import { motion } from "framer-motion";
import { container, fadeUp, sectionVariant, cardVariant, scaleFade } from "../../assets/animation/motionAnimation";
const YogaServicesSection = () => {
  const services = [
    {
      id: 1,
      icon: (
        <svg
          height="62"
          width="62"
          fill="none"
          viewBox="0 0 62 62"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_10_2400)">
            <path
              d="M61.7868 37.8667C61.6848 37.7443 61.5482 37.6553 61.3996 37.5975C60.297 37.1683 59.1217 36.8292 57.9053 36.5895C57.4131 36.4925 56.9084 36.7843 56.7994 37.2741C56.688 37.7751 57.0117 38.2661 57.5122 38.3636C58.285 38.5141 59.0389 38.7081 59.764 38.9428C57.2422 43.0552 52.9173 46.4583 47.7367 48.3711C44.0184 49.744 40.1365 50.2453 36.5443 49.8697C41.3716 48.4669 46.0784 45.6494 49.9884 41.7393C55.3695 36.3581 58.6839 29.468 59.0846 22.8316C59.0962 22.6398 59.0576 22.4453 58.9574 22.2813C58.7777 21.9871 58.4584 21.8249 58.1259 21.8443C54.6747 22.0486 51.1547 23.043 47.813 24.705C48.0367 21.5937 47.7605 18.5375 46.9961 15.7809C46.9535 15.6272 46.8788 15.4822 46.767 15.3683C46.4981 15.0946 46.1039 15.0236 45.7696 15.1609C42.7611 16.3968 39.8598 18.3502 37.3086 20.8458C36.1237 16.9008 34.2147 13.3601 31.695 10.5175C31.5893 10.3982 31.4585 10.3007 31.3082 10.2477C30.9465 10.1198 30.561 10.229 30.3209 10.4994C27.7994 13.3382 25.8859 16.9016 24.6974 20.8521C22.1508 18.3596 19.2553 16.4075 16.2521 15.17C16.1048 15.1092 15.9444 15.0793 15.786 15.0977C15.405 15.142 15.1069 15.4093 15.0101 15.7575C14.2409 18.5203 13.9624 21.5851 14.1866 24.7053C10.8449 23.0433 7.32498 22.0488 3.8738 21.8446C3.51319 21.823 3.16419 22.0181 2.99818 22.3631C2.92915 22.5065 2.90517 22.6676 2.91474 22.8265C3.31399 29.4648 6.62869 36.357 12.0113 41.7397C15.9215 45.6499 20.6286 48.4674 25.4559 49.8701C21.8635 50.2458 17.9813 49.7443 14.2629 48.3715C9.08241 46.4588 4.75743 43.0557 2.23565 38.9432C2.95131 38.7116 3.69507 38.5197 4.45735 38.37C4.94137 38.2749 5.28891 37.8168 5.2108 37.3297C5.12906 36.8201 4.64239 36.4831 4.14033 36.5812C2.90772 36.8213 1.71676 37.1633 0.600277 37.598C0.451694 37.6559 0.315101 37.7448 0.213019 37.8672C-0.0325594 38.1622 -0.0636805 38.5618 0.10682 38.8809C2.73056 43.79 7.66089 47.8703 13.6337 50.0755C16.756 51.2283 19.9938 51.8065 23.1146 51.8064C25.2485 51.8063 27.3272 51.5348 29.2761 50.9924C29.8053 50.8452 30.3505 50.7641 30.8997 50.7641H31.0993C31.6486 50.7641 32.1939 50.8453 32.7232 50.9926C34.6719 51.5349 36.7504 51.8065 38.8845 51.8065C42.0051 51.8065 45.2435 51.2283 48.3655 50.0756C54.3383 47.8704 59.2686 43.7901 61.8924 38.881C62.0633 38.5613 62.0322 38.1617 61.7868 37.8667ZM16.5034 17.2649C19.2428 18.5517 21.8668 20.4803 24.157 22.8917C23.5927 25.3386 23.297 27.9043 23.297 30.5165C23.297 30.8286 23.3017 31.1413 23.3101 31.4538C23.145 31.2818 22.978 31.1111 22.8089 30.942C20.7613 28.8943 18.4949 27.1469 16.1074 25.7445C15.7711 22.8113 15.907 19.9078 16.5034 17.2649ZM13.2959 40.4549C8.50273 35.6616 5.45129 29.6269 4.8147 23.7452C10.6963 24.3817 16.7312 27.4333 21.5243 32.2264C26.3174 37.0197 29.3689 43.0544 30.0055 48.936C24.1239 48.2995 18.0891 45.248 13.2959 40.4549ZM31 44.6013C29.924 40.7808 27.96 37.0297 25.2668 33.6818C25.1662 32.6383 25.1133 31.5749 25.1133 30.5165C25.1133 23.6625 27.2478 17.1661 31.0003 12.508C34.312 16.6133 36.3613 22.1078 36.7993 28.1079C36.8359 28.6081 37.2709 28.9841 37.7712 28.9476C38.2715 28.911 38.6474 28.4758 38.6109 27.9757C38.4837 26.2337 38.2265 24.531 37.8487 22.8857C40.1376 20.4772 42.7595 18.5507 45.4966 17.2649C46.093 19.9078 46.2288 22.8113 45.8926 25.7445C43.5051 27.147 41.2387 28.8944 39.1912 30.942C35.2232 34.9102 32.3808 39.699 31 44.6013ZM40.4756 32.2264C45.2689 27.4333 51.3036 24.3817 57.1852 23.7452C56.5487 29.6269 53.4972 35.6617 48.704 40.4549C43.9108 45.248 37.8761 48.2995 31.9944 48.936C32.631 43.0545 35.6825 37.0197 40.4756 32.2264Z"
              fill="#E1916E"
            />
          </g>
          <defs>
            <clipPath id="clip0_10_2400">
              <rect height="62" width="62" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      title: "Vinyasa Yoga",
      description: "Lorem Ipsum Dolor Sit Amet, Consectetur",
    },
    {
      id: 2,
      icon: (
        <svg
          height="60"
          width="60"
          fill="none"
          viewBox="0 0 60 60"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M29.7968 19.2567C31.8524 19.2545 33.8232 18.4369 35.2768 16.9834C36.7304 15.5299 37.548 13.5592 37.5504 11.5036C37.1247 1.21735 22.4673 1.22034 22.0432 11.5037C22.0456 13.5593 22.8633 15.53 24.3169 16.9834C25.7704 18.4369 27.7412 19.2545 29.7968 19.2567ZM29.7968 5.62498C31.3554 5.62668 32.8496 6.24657 33.9517 7.34866C35.0538 8.45074 35.6737 9.945 35.6754 11.5036C35.3998 19.2835 24.1927 19.2815 23.9182 11.5035C23.9199 9.94492 24.5398 8.45069 25.6419 7.34862C26.744 6.24656 28.2382 5.62668 29.7968 5.62498Z"
            fill="#E1916E"
          />
          <path
            d="M51.4883 40.4402C51.4586 39.9119 51.3246 39.3947 51.094 38.9184C50.8635 38.442 50.5411 38.016 50.1453 37.6648L45.748 33.7179C45.4269 33.4296 45.1905 33.0593 45.0641 32.6468L43.6203 27.8183C42.9794 25.7086 41.68 23.8594 39.9124 22.5414C38.1447 21.2234 36.0016 20.5058 33.7967 20.4936H31.1719C30.9232 20.4936 30.6848 20.5924 30.509 20.7682C30.3331 20.944 30.2344 21.1825 30.2344 21.4311C30.2344 21.6797 30.3331 21.9182 30.509 22.094C30.6848 22.2698 30.9232 22.3686 31.1719 22.3686H33.7967C35.5986 22.3789 37.35 22.9657 38.7944 24.043C40.2389 25.1204 41.3005 26.6319 41.824 28.3561L43.2697 33.1892C43.4953 33.9303 43.9192 34.5956 44.4955 35.1132L48.8956 39.0628C49.2979 39.4335 49.5455 39.9424 49.589 40.4877C49.6324 41.0331 49.4683 41.5747 49.1297 42.0044C48.791 42.434 48.3027 42.7201 47.7623 42.8053C47.2219 42.8905 46.6693 42.7686 46.2148 42.464L40.7089 38.6939C40.2443 38.3772 39.9052 37.9079 39.7503 37.3673L37.1612 28.5549C37.0944 28.342 36.9541 28.1598 36.7653 28.0409C36.5764 27.922 36.3515 27.8741 36.1306 27.9059C35.9097 27.9377 35.7074 28.047 35.5597 28.2143C35.412 28.3816 35.3287 28.596 35.3247 28.8191V39.5155C35.3235 39.8928 35.4352 40.2618 35.6456 40.575C35.8559 40.8882 36.1551 41.1313 36.5048 41.2729L46.0803 45.2303C47.7915 45.8261 48.0367 48.6545 46.114 49.1391L40.3106 50.7143C40.095 50.7773 39.909 50.9154 39.7864 51.1036C39.6638 51.2918 39.6126 51.5178 39.6421 51.7404C39.6717 51.9631 39.78 52.1679 39.9475 52.3176C40.1149 52.4674 40.3305 52.5522 40.5551 52.5568C40.6383 52.5564 40.721 52.5452 40.8013 52.5234L46.6003 50.9496C49.3746 50.3009 50.197 46.6091 48.3571 44.6219C49.2862 44.4021 50.1087 43.8631 50.681 43.0989C51.2533 42.3346 51.539 41.3937 51.4883 40.4402ZM37.1997 39.5155V35.338C37.7017 36.9358 38.0607 39.3181 39.6516 40.2424L40.7291 40.9799L37.1997 39.5155Z"
            fill="#E1916E"
          />
          <path
            d="M38.4018 43.2962L33.0234 44.9153L21.8793 43.3562C21.7572 43.3388 21.6329 43.3457 21.5135 43.3764C21.3942 43.4071 21.282 43.4611 21.1835 43.5352C21.085 43.6093 21.0021 43.7022 20.9395 43.8084C20.8769 43.9146 20.8359 44.0321 20.8188 44.1542C20.8017 44.2763 20.8088 44.4006 20.8398 44.5199C20.8708 44.6392 20.9251 44.7513 20.9994 44.8496C21.0738 44.9479 21.1668 45.0306 21.2732 45.093C21.3795 45.1553 21.4971 45.1961 21.6193 45.2129L28.7303 46.2078L25.1376 47.2893C24.423 47.5011 23.7715 47.8856 23.2406 48.4089C22.7097 48.9321 22.3157 49.578 22.0935 50.2895L13.8007 49.4298C11.4849 49.0404 12.5891 45.8412 14.2768 45.3146L23.5529 41.516C23.9222 41.3614 24.2335 41.0946 24.4428 40.7534C24.6521 40.4121 24.7488 40.0137 24.7192 39.6144L23.9127 28.8611C23.8925 28.6424 23.7965 28.4377 23.6412 28.2824C23.4859 28.1271 23.2812 28.0311 23.0625 28.011C22.8438 27.9909 22.625 28.048 22.444 28.1723C22.263 28.2967 22.1312 28.4804 22.0715 28.6918L20.018 36.4673C19.8829 36.9835 19.5822 37.4412 19.162 37.7701L13.4738 42.1559C13.073 42.458 12.5699 42.5912 12.0721 42.527C11.5744 42.4628 11.1215 42.2062 10.8105 41.8123C10.4995 41.4184 10.3551 40.9184 10.4082 40.4193C10.4612 39.9202 10.7076 39.4617 11.0944 39.142L15.3278 35.761C16.1282 35.1294 16.67 34.2269 16.8512 33.2236L17.5717 29.2511C17.9259 27.3195 18.9459 25.5732 20.4543 24.3157C21.9627 23.0583 23.8642 22.3693 25.8279 22.3686H27.4219C27.668 22.3648 27.9028 22.2643 28.0755 22.0889C28.2482 21.9135 28.3449 21.6773 28.3449 21.4311C28.3449 21.1849 28.2481 20.9487 28.0754 20.7733C27.9027 20.5979 27.668 20.4974 27.4218 20.4936C21.8339 20.0103 16.7964 23.2625 15.7269 28.9138L15.0055 32.8889C14.9058 33.4442 14.6057 33.9436 14.1623 34.2924L9.91791 37.6822C9.47624 38.0385 9.11995 38.4891 8.87519 39.0011C8.63042 39.513 8.50339 40.0733 8.50342 40.6407C8.5139 41.6271 8.90362 42.5717 9.59176 43.2785C10.2799 43.9853 11.2137 44.4001 12.1994 44.4369C9.79596 46.4463 10.0433 50.8866 13.6094 51.2952L21.9106 52.1558C21.9829 52.8125 22.1959 53.446 22.5352 54.0129C22.8746 54.5798 23.3322 55.0668 23.8769 55.4407C24.4216 55.8147 25.0405 56.0667 25.6915 56.1797C26.3425 56.2926 27.0101 56.2638 27.649 56.0952L37.1732 53.5076C37.4098 53.4396 37.6103 53.2813 37.7311 53.0668C37.852 52.8523 37.8837 52.5988 37.8192 52.3612C37.7547 52.1236 37.5993 51.9209 37.3866 51.7968C37.1739 51.6728 36.9209 51.6375 36.6824 51.6985L27.1619 54.2848C26.4761 54.4698 25.7452 54.3776 25.1269 54.0281C24.5086 53.6785 24.0526 53.0998 23.8575 52.4169C23.6623 51.734 23.7437 51.0017 24.084 50.3783C24.4243 49.7549 24.9961 49.2904 25.6761 49.0851C28.8891 48.1171 35.773 46.0461 38.942 45.0916C39.1771 45.0175 39.3736 44.8538 39.489 44.6359C39.6043 44.4179 39.6291 44.1634 39.5581 43.9273C39.487 43.6912 39.3258 43.4926 39.1094 43.3745C38.893 43.2563 38.6388 43.2282 38.4018 43.2962ZM20.3155 39.2482C21.7406 38.2873 22.0305 36.0966 22.4551 34.5826L22.8387 39.7824L15.9796 42.5908L20.3155 39.2482Z"
            fill="#E1916E"
          />
        </svg>
      ),
      title: "Intuitive Yoga",
      description: "Lorem Ipsum Dolor Sit Amet, Consectetur",
    },
    {
      id: 3,
      icon: (
        <svg
          height="57"
          width="57"
          fill="none"
          viewBox="0 0 57 57"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M53.4218 26.8588C53.4357 26.5187 53.254 26.2004 52.9543 26.0391C52.8262 25.9701 50.0631 24.5262 45.6575 24.943C47.3898 20.604 47.6435 16.4837 46.3825 12.6792C46.2725 12.3479 45.9794 12.1113 45.6323 12.0739C45.3613 12.0436 39.6204 11.5013 35.1411 15.7729C34.4819 7.83288 29.4212 3.15128 29.144 2.90106C28.7979 2.58882 28.2686 2.59665 27.9312 2.91933C23.0308 7.61625 21.448 12.2224 21.2105 15.9117C16.8521 11.6851 11.6368 12.052 11.3885 12.0717C11.0332 12.1017 10.7297 12.3405 10.6175 12.6792C9.35627 16.4843 9.6103 20.6054 11.3422 24.9429C6.9363 24.5262 4.17338 25.9697 4.04563 26.039C3.74599 26.2004 3.56422 26.5187 3.57814 26.8588C4.06346 38.9414 13.7743 41.952 16.5353 42.5645V45.2356C14.2066 45.4948 12.5006 47.6023 12.6836 49.9659C12.6836 52.3712 14.6405 54.3281 17.0458 54.3281H39.999C45.5128 54.2536 45.9284 45.9302 40.5094 45.2356C40.5095 45.2356 40.5095 42.5545 40.5095 42.5545C43.3291 41.9196 52.9391 38.8769 53.4218 26.8588ZM51.6088 27.3924C50.916 37.346 43.2966 40.0729 40.5095 40.7406C40.4524 39.2667 40.6919 35.043 40.2574 33.6789C41.0545 32.787 43.1408 30.2842 44.8161 26.8518C48.1622 26.3195 50.6094 27.011 51.6088 27.3924ZM35.4354 35.7537C34.9435 35.7537 34.5448 36.1525 34.5448 36.6444V45.184H22.5504V36.6444C22.5337 35.4752 20.7872 35.4735 20.7692 36.6444C20.7692 36.6444 20.7692 45.184 20.7692 45.184H18.3165V35.6707C18.3165 32.0856 21.2332 29.1688 24.8183 29.1688C26.9683 29.1823 30.0767 29.1777 32.2264 29.1688C35.8115 29.1688 38.7282 32.0856 38.7282 35.6707V45.184H36.326V36.6444C36.326 36.1525 35.9272 35.7537 35.4354 35.7537ZM28.9619 27.3876C26.6109 27.6367 24.4277 25.7899 24.4478 23.3684C24.6187 17.9986 32.4266 17.9996 32.597 23.3686C32.597 25.4588 31 27.1656 28.9619 27.3876ZM44.8687 13.816C46.8041 19.5475 43.2546 27.5036 39.5336 31.7784C38.2146 29.3114 35.6822 27.5952 32.7392 27.4136C33.7216 26.3937 34.3355 25.0214 34.3712 23.5066C34.8728 21.6873 35.1246 19.972 35.1919 18.3642C38.4864 14.1173 43.2277 13.7856 44.8687 13.816ZM28.5404 4.82148C30.135 6.555 34.2677 11.9271 33.264 19.9526C32.1992 18.4844 30.4729 17.5238 28.5222 17.5238C26.324 17.5238 24.4071 18.7403 23.4059 20.533C22.5502 17.3265 22.2169 11.2712 28.5404 4.82148ZM12.1252 13.8369C13.6933 13.8726 18.0246 14.3871 21.2697 18.6541C21.5495 21.225 22.3766 23.0263 22.679 23.6137C22.7407 25.0859 23.3463 26.4179 24.3053 27.4136C21.3491 27.5959 18.8086 29.3279 17.4944 31.8127C13.7626 27.5238 10.2 19.6088 12.1252 13.8369ZM5.3907 27.3924C6.39266 27.0098 8.83813 26.3194 12.1836 26.8518C13.8878 30.3418 16.0112 32.8652 16.7775 33.7175C16.3599 35.0387 16.59 39.3338 16.5352 40.7547C13.7866 40.1147 6.08765 37.4331 5.3907 27.3924ZM14.4648 49.9659C14.2842 48.2033 15.6544 46.7937 17.4259 46.9653C17.4259 46.9652 30.5709 46.9652 30.5709 46.9652C30.1957 48.0662 29.1605 48.8657 27.9312 48.8657C25.5201 48.6345 23.2513 50.1952 22.8108 52.5469C22.8107 52.5469 17.0458 52.5469 17.0458 52.5469C15.6225 52.5469 14.4648 51.3892 14.4648 49.9659ZM42.58 49.5467C42.7498 51.1047 41.6083 52.5586 39.9989 52.5469C39.999 52.5469 24.6613 52.5469 24.6613 52.5469C25.0365 51.4463 26.0714 50.6469 27.3006 50.6469C29.7122 50.878 31.9808 49.3171 32.4214 46.9652C32.4215 46.9652 39.6189 46.9652 39.6189 46.9652C41.1646 46.8054 42.5911 47.9577 42.58 49.5467Z"
            fill="#E1916E"
          />
        </svg>
      ),
      title: "Slow Yoga",
      description: "Lorem Ipsum Dolor Sit Amet, Consectetur",
    },
    {
      id: 4,
      icon: (
        <svg
          height="50"
          width="52"
          fill="none"
          viewBox="0 0 52 50"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M42.9816 14.8122H9.01877C6.96542 14.8122 5.29492 16.4156 5.29492 18.3866C5.29492 20.3575 6.96542 21.9609 9.01877 21.9609H19.5007V31.5547C19.5007 31.9622 19.5442 32.3597 19.6242 32.7453L9.91057 41.4216C9.08475 42.1594 8.60797 43.1616 8.568 44.2434C8.52802 45.3253 8.9294 46.3572 9.69867 47.1488C10.4718 47.945 11.5216 48.4019 12.6552 48.4356C12.7004 48.4372 12.7452 48.4378 12.7904 48.4378C13.8743 48.4378 14.8993 48.0463 15.69 47.3275L26.3175 37.6638H33.0324V44.3738C33.0324 45.4606 33.4727 46.4813 34.2729 47.2491C35.0688 48.0122 36.1485 48.4375 37.2707 48.4375C37.3614 48.4375 37.4527 48.4347 37.5437 48.4294C39.7631 48.2931 41.5019 46.4663 41.5019 44.27V34.4728C41.5019 31.7503 39.1934 29.5353 36.3565 29.5353H32.4994V21.9606H42.9816C45.035 21.9606 46.7054 20.3572 46.7054 18.3863C46.7054 16.4156 45.035 14.8122 42.9816 14.8122ZM14.1261 45.7378C13.7469 46.0828 13.2525 46.2641 12.7257 46.2491C12.2025 46.2334 11.7179 46.0225 11.3614 45.6556C11.0078 45.2916 10.8232 44.8175 10.8417 44.3209C10.8599 43.8238 11.0793 43.3634 11.4592 43.0241L20.5494 34.9044C21.2586 35.9375 22.2846 36.7506 23.4949 37.2191L14.1261 45.7378ZM42.9816 19.7731H31.3619C30.7336 19.7731 30.2244 20.2628 30.2244 20.8669V29.535H26.6926C26.0644 29.535 25.5551 30.0247 25.5551 30.6288C25.5551 31.2328 26.0644 31.7225 26.6926 31.7225H31.3619H36.3555C37.9382 31.7225 39.2259 32.9559 39.2259 34.4725V44.2697C39.2259 45.315 38.4228 46.1828 37.3978 46.2456C36.8248 46.2803 36.2827 46.0872 35.8787 45.7C35.5095 45.3459 35.3064 44.8747 35.3064 44.3734V36.5697C35.3064 35.9656 34.7971 35.4759 34.1689 35.4759H25.9071C25.898 35.4756 25.8889 35.4759 25.8798 35.4759H25.8674C23.6113 35.4759 21.7753 33.7169 21.7753 31.5544V20.8669C21.7753 20.2628 21.2661 19.7731 20.6378 19.7731H9.01877C8.21992 19.7731 7.56992 19.1513 7.56992 18.3863C7.56992 17.6213 8.21992 16.9994 9.01877 16.9994H42.9816C43.7805 16.9994 44.4305 17.6216 44.4305 18.3863C44.4305 19.1509 43.7805 19.7731 42.9816 19.7731Z"
            fill="#E1916E"
          />
          <path
            d="M26.0001 13.5056C29.4321 13.5056 32.2239 10.8269 32.2239 7.53406C32.2239 4.24125 29.4318 1.5625 26.0001 1.5625C22.5684 1.5625 19.7764 4.24125 19.7764 7.53406C19.7764 10.8269 22.5684 13.5056 26.0001 13.5056ZM26.0001 3.75C28.1776 3.75 29.9489 5.4475 29.9489 7.53406C29.9489 9.62062 28.1776 11.3181 26.0001 11.3181C23.8229 11.3181 22.0517 9.62062 22.0517 7.53406C22.0514 5.4475 23.8229 3.75 26.0001 3.75Z"
            fill="#E1916E"
          />
        </svg>
      ),
      title: "Aroma Yoga",
      description: "Lorem Ipsum Dolor Sit Amet, Consectetur",
    },
  ];

  return (
    <section id="services">
      <div className="w-full bg-white py-10 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <motion.div variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }} className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }} className="text-center mb-10 sm:mb-20 md:mb-28 lg:mb-[150px]">
            {/* Top label */}
            <div className="inline-block mb-4">
              <p className="
      text-[#E1916E]
      font-serif font-normal uppercase text-center
      tracking-[2px] sm:tracking-[3.789px]
      text-[16px] sm:text-[20px] lg:text-[25.263px]
      leading-[22px] sm:leading-[28px] lg:leading-[32.842px]
      mx-auto
    ">
                Our Services
              </p>

              <svg
                className="mx-auto mt-2 w-[120px] sm:w-[160px] lg:w-[177px]"
                height="6"
                viewBox="0 0 177 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect height="5.05263" width="176.842" fill="#E1916E" />
              </svg>
            </div>

            {/* Title + Description */}
            <div className="flex flex-col items-center space-y-4 sm:space-y-6">
              <h2
                className="
        text-[#505050] font-serif font-normal capitalize text-center
        text-[28px] sm:text-[38px] lg:text-[50.526px]
        leading-[36px] sm:leading-[48px] lg:leading-[63.158px]
        max-w-full sm:max-w-[520px] lg:max-w-[602.723px]
      "
              >
                We're The Ones That Care
              </h2>

              <p
                className="
        text-[#333] font-sans font-normal capitalize text-center
        text-[14px] sm:text-[16px] lg:text-[19px]
        leading-[22px] sm:leading-[26px] lg:leading-[30.316px]
        max-w-full sm:max-w-[720px] lg:max-w-[964.067px]
      "
              >
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
                Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut
                Enim Ad Minim Veniam.
              </p>
            </div>
          </motion.div>


          {/* Services Grid with Center Image */}
          {/* Services Grid with Center Image */}
          <motion.div
            variants={scaleFade} className="relative max-w-7xl mx-auto mb-6 sm:mb-12">
            {/* Center Background Image — DESKTOP/TABLET ONLY */}
            <div
              className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0
    w-[571px] h-[593px]"
            >
              <img
                src={servicebg}
                alt="Yoga Pose"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Cards */}
            <motion.div
              variants={sectionVariant}
              className="grid grid-cols-1 sm:grid-cols-2 grid-rows-2
  gap-x-16 gap-y-10 sm:gap-y-20 relative z-10"
            >
              {/* Top Left */}
              <div className="flex justify-center sm:justify-start">
                <div
                  className="bg-white p-6 rounded-2xl
      shadow-[0_8px_20px_rgba(0,0,0,0.08)]
      hover:shadow-[0_12px_28px_rgba(0,0,0,0.12)]
      transition-shadow duration-300
      w-full max-w-sm flex flex-col items-center text-center"
                >
                  <div className="text-[#D4A574] mb-4">{services[0].icon}</div>
                  <h3 className="text-xl font-heading font-normal text-gray-900 mb-2">
                    {services[0].title}
                  </h3>
                  <p className="text-sm font-body text-gray-500">
                    {services[0].description}
                  </p>
                </div>
              </div>

              {/* Top Right */}
              <div className="flex justify-center sm:justify-end">
                <div
                  className="bg-white p-6 rounded-2xl
      shadow-[0_8px_20px_rgba(0,0,0,0.08)]
      hover:shadow-[0_12px_28px_rgba(0,0,0,0.12)]
      transition-shadow duration-300
      w-full max-w-sm flex flex-col items-center text-center"
                >
                  <div className="text-[#D4A574] mb-4">{services[1].icon}</div>
                  <h3 className="text-xl font-heading font-normal text-gray-900 mb-2">
                    {services[1].title}
                  </h3>
                  <p className="text-sm font-body text-gray-500">
                    {services[1].description}
                  </p>
                </div>
              </div>

              {/* Bottom Left */}
              <motion.div variants={cardVariant} className="flex justify-center sm:justify-start">
                <div
                  className="bg-white p-6 rounded-2xl
      shadow-[0_8px_20px_rgba(0,0,0,0.08)]
      hover:shadow-[0_12px_28px_rgba(0,0,0,0.12)]
      transition-shadow duration-300
      w-full max-w-sm flex flex-col items-center text-center"
                >
                  <div className="text-[#D4A574] mb-4">{services[2].icon}</div>
                  <h3 className="text-xl font-heading font-normal text-gray-900 mb-2">
                    {services[2].title}
                  </h3>
                  <p className="text-sm font-body text-gray-500">
                    {services[2].description}
                  </p>
                </div>
              </motion.div>

              {/* Bottom Right */}
              <motion.div variants={cardVariant} className="flex justify-center sm:justify-end">
                <div
                  className="bg-white p-6 rounded-2xl
      shadow-[0_8px_20px_rgba(0,0,0,0.08)]
      hover:shadow-[0_12px_28px_rgba(0,0,0,0.12)]
      transition-shadow duration-300
      w-full max-w-sm flex flex-col items-center text-center"
                >
                  <div className="text-[#D4A574] mb-4">{services[3].icon}</div>
                  <h3 className="text-xl font-heading font-normal text-gray-900 mb-2">
                    {services[3].title}
                  </h3>
                  <p className="text-sm font-body text-gray-500">
                    {services[3].description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* CTA Button */}
          <div className="relative text-center mt-8 sm:mt-24 lg:mt-40">
            {/* Left Flower SVG */}
            <div className="absolute top-[-100px] left-0 sm:left-20 lg:left-5 top-1/2 -translate-y-1/2 hidden sm:block">
              <svg
                height="66"
                width="66"
                fill="none"
                viewBox="0 0 66 66"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  height="65.6842"
                  width="65.6842"
                  fill="url(#pattern0_8_1259)"
                />
                <defs>
                  <pattern
                    height="1"
                    id="pattern0_8_1259"
                    width="1"
                    patternContentUnits="objectBoundingBox"
                  >
                    <use
                      transform="scale(0.0133333)"
                      xlinkHref="#image0_8_1259"
                    />
                  </pattern>
                  <image
                    height="75"
                    id="image0_8_1259"
                    width="75"
                    preserveAspectRatio="none"
                    xlinkHref="data:image/png;base64,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"
                  />
                </defs>
              </svg>
            </div>

            {/* Right Circle SVGs */}
            <div className="absolute right-0  top-[-40px] sm:right-20 lg:right-32 top-1/2 -translate-y-1/2 hidden sm:block">
              <svg
                height="58"
                width="58"
                fill="none"
                viewBox="0 0 58 58"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  height="57.5874"
                  width="57.5874"
                  fill="url(#pattern0_8_1260)"
                />
                <defs>
                  <pattern
                    height="1"
                    id="pattern0_8_1260"
                    width="1"
                    patternContentUnits="objectBoundingBox"
                  >
                    <use transform="scale(0.04)" xlinkHref="#image0_8_1260" />
                  </pattern>
                  <image
                    height="25"
                    id="image0_8_1260"
                    width="25"
                    preserveAspectRatio="none"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGQSURBVHgBtZa/T8JAFMe/766SyCiO4Mgqo7g6EhhMdPZ/YKsxaYgxcWB19i9goOimK6uO7SorjjWRts+7Ig0olJ/3GZq7a+597957d+8IS+CukwfkiWodgWlfDeXHP+IBmD1w7oPO7WGWDVpovOOUIWUdRGUsJe4jtNxFYjR35cK6QIxTrA271LjpZYpw566Avaip3FLApjAPQFGbGk4wGRI7FdAQFcGyOT2UikBGV1sLTAlxt3U5I8Juq7pagNdBnPGTU05FlHQdJghlYpdULMqw4iZMEQpbwAo3SNU1oFFFqGCXYBJJJaECfgCTkCjqwOdhFM4LGIcC5S4ewiQxf+mYeDAJwVPZFfswiYx8LfKumgFMoEJBNccX4ytZvMAI0tXf3+z6ft15AjD7VLf7qUiyG5l7wK7cphccyce0OyP+fF9EONKX5eYHVAuMZHu63v+v8dtUSOUivYO/D4rFrxX3VtUCrq4oFqjz1qP69dwEoqyZycuFcseIo4rqHib1e2KU+VO5xoO03qhmZ561HztqlGXd/HPtAAAAAElFTkSuQmCC"
                  />
                </defs>
              </svg>
            </div>
            <div className="absolute right-0  top-[-90px] sm:right-20 lg:right-5 top-1/2 -translate-y-1/2 hidden sm:block">
              <svg
                height="29"
                width="29"
                fill="none"
                viewBox="0 0 29 29"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect height="28.8" width="28.8" fill="url(#pattern0_8_1258)" />
                <defs>
                  <pattern
                    height="1"
                    id="pattern0_8_1258"
                    width="1"
                    patternContentUnits="objectBoundingBox"
                  >
                    <use transform="scale(0.04)" xlinkHref="#image0_8_1258" />
                  </pattern>
                  <image
                    height="25"
                    id="image0_8_1258"
                    width="25"
                    preserveAspectRatio="none"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGQSURBVHgBtZa/T8JAFMe/766SyCiO4Mgqo7g6EhhMdPZ/YKsxaYgxcWB19i9goOimK6uO7SorjjWRts+7Ig0olJ/3GZq7a+597957d+8IS+CukwfkiWodgWlfDeXHP+IBmD1w7oPO7WGWDVpovOOUIWUdRGUsJe4jtNxFYjR35cK6QIxTrA271LjpZYpw566Avaip3FLApjAPQFGbGk4wGRI7FdAQFcGyOT2UikBGV1sLTAlxt3U5I8Juq7pagNdBnPGTU05FlHQdJghlYpdULMqw4iZMEQpbwAo3SNU1oFFFqGCXYBJJJaECfgCTkCjqwOdhFM4LGIcC5S4ewiQxf+mYeDAJwVPZFfswiYx8LfKumgFMoEJBNccX4ytZvMAI0tXf3+z6ft15AjD7VLf7qUiyG5l7wK7cphccyce0OyP+fF9EONKX5eYHVAuMZHu63v+v8dtUSOUivYO/D4rFrxX3VtUCrq4oFqjz1qP69dwEoqyZycuFcseIo4rqHib1e2KU+VO5xoO03qhmZ561HztqlGXd/HPtAAAAAElFTkSuQmCC"
                  />
                </defs>
              </svg>
            </div>

            <button
              className="
          font-body
          inline-flex
          items-center
          gap-[6.578px]
          px-[26.562px] 
          pr-[34.67px] 
          py-[17.555px]
          bg-[#E1916E]
          border
          border-[0.937px] 
          border-[#FFA882]
          rounded-[5.933px]
          text-white
          font-medium
          shadow-lg
          hover:shadow-xl
          transition-all
          duration-300
          group
          mx-auto
          relative
          z-10
        "
            >
              <span className="text-sm uppercase tracking-wide">
                Start Free Trial
              </span>
              <svg
                height="11"
                width="15"
                fill="none"
                viewBox="0 0 15 11"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.0995 0.161048C9.99221 0.05371 9.86535 4.1008e-05 9.71898 4.1008e-05C9.57261 4.1008e-05 9.44576 0.05371 9.33842 0.161048C9.23108 0.258628 9.17741 0.380604 9.17741 0.526974C9.17741 0.673344 9.23108 0.800199 9.33842 0.907537L13.1733 4.74244H0.526933C0.380563 4.74244 0.256148 4.79367 0.153689 4.89612C0.0512296 4.99858 0 5.123 0 5.26937C0 5.41574 0.0512296 5.54015 0.153689 5.64261C0.256148 5.74507 0.380563 5.7963 0.526933 5.7963H13.1733L9.33842 9.6312C9.23108 9.72878 9.17741 9.8532 9.17741 10.0044C9.17741 10.1557 9.23108 10.2801 9.33842 10.3777C9.44576 10.485 9.57261 10.5387 9.71898 10.5387C9.86535 10.5387 9.99221 10.485 10.0995 10.3777L14.8273 5.64993C14.9346 5.54259 14.9883 5.41574 14.9883 5.26937C14.9883 5.123 14.9346 4.99614 14.8273 4.88881L10.0995 0.161048Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default YogaServicesSection;
