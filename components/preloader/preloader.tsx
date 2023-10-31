"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Curve from "../curves/curve";

export const slideUp = {
  initial: {
    top: 0,
  },
  exit: {
    top: "-100vh",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
};

const Preloader = () => {
  const svg = useRef(null);

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="h-screen w-screen fixed z-[110] flex items-center justify-center text-white bg-black "
    >
      <Curve />
      <motion.svg
        ref={svg}
        className="svg relative"
        width="600"
        height="94"
        viewBox="0 0 676 94"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="path7"
          d="M674.045 31.1484H674.556L674.545 30.6378L673.959 3.09874L673.948 2.60938H673.459H601.975H601.475V3.10938V7.06445V7.56445H601.975H613.193V86.5449H601.975H601.475V87.0449V91V91.5H601.975H673.459H673.948L673.959 91.0106L674.545 63.4716L674.556 62.9609H674.045H670.236H669.872L669.76 63.3074L666.832 72.3849C666.832 72.3856 666.832 72.3863 666.832 72.3871C664.317 79.9298 660.592 84.3386 655.737 85.8337C654.129 86.3063 652.371 86.5449 650.461 86.5449H632.211V48.4336H660.568H661.068V47.9336V43.5391V43.0391H660.568H632.211V7.56445H650.461C654.13 7.56445 657.233 8.51561 659.796 10.3972C662.364 12.2817 664.426 15.1259 665.963 18.9689L665.967 18.9777L665.971 18.9863C666.352 19.8448 666.687 20.7526 666.974 21.7101L666.975 21.7129L669.758 30.7949L669.867 31.1484H670.236H674.045Z"
          stroke="white"
        />
        <path
          className="path6"
          d="M596.176 3.10938V2.60938H595.676H566.818H566.487L566.358 2.91402L538.811 67.816L507.503 2.8922L507.367 2.60938H507.053H482.443H481.943V3.10938V7.06445V7.56445H482.443H493.662V86.5449H482.443H481.943V87.0449V91V91.5H482.443H512.033H512.667L512.519 90.8833C512.212 89.603 511.702 88.5699 510.959 87.8266C510.208 87.0765 509.254 86.6546 508.126 86.5472L508.102 86.5449H508.078H500.814V31.5858L531.362 92.3963L531.5 92.6719H531.809H534.592H534.921L535.051 92.3693L566.318 19.602V86.5449H555.1H554.6V87.0449V91V91.5H555.1H595.676H596.31L596.162 90.8833C595.855 89.603 595.344 88.5699 594.601 87.8266C593.851 87.0765 592.896 86.6546 591.768 86.5472L591.744 86.5449H591.721H584.457V7.56445H595.676H596.176V7.06445V3.10938Z"
          stroke="white"
        />
        <path
          className="path5"
          d="M460.665 80.6723L460.666 80.6717C469.954 71.976 474.594 60.805 474.594 47.2012C474.594 31.0518 468.873 18.6849 457.399 10.1784C449.299 4.15253 439.817 1.14453 428.977 1.14453C416.262 1.14453 405.447 5.18963 396.56 13.2867L396.559 13.2875C387.17 21.8856 382.48 33.0097 382.48 46.6152C382.48 62.2773 388.055 74.4916 399.226 83.1914L399.227 83.1918C407.62 89.7088 417.397 92.9648 428.537 92.9648C441.156 92.9648 451.876 88.8689 460.665 80.6723ZM451.922 29.8571L451.922 29.8581C452.794 34.7049 453.232 40.2895 453.232 46.6152C453.232 58.5948 451.721 67.9267 448.734 74.647C445.757 81.3471 441.323 85.4334 435.446 86.9995C433.439 87.4768 431.283 87.7168 428.977 87.7168C423.013 87.7168 418.165 86.1438 414.39 83.0335C410.611 79.9199 407.859 75.2262 406.169 68.8994C404.621 62.9967 403.842 55.7671 403.842 47.2012C403.842 34.1983 405.707 24.3474 409.384 17.5941C413.043 10.873 418.503 7.20464 425.799 6.537L425.804 6.53658C426.766 6.44039 427.677 6.39258 428.537 6.39258C434.971 6.39258 440.097 8.34493 443.967 12.2154C447.849 16.0972 450.516 21.9567 451.922 29.8571Z"
          stroke="white"
        />
        <path
          className="path4"
          d="M366.814 8.23522C358.796 3.50386 349.58 1.14453 339.182 1.14453C322.934 1.14453 310.47 6.91419 301.866 18.4848L301.865 18.4863C295.745 26.7785 292.686 36.2584 292.686 46.9082C292.686 59.7206 296.78 70.491 304.98 79.1849L304.981 79.1855C313.68 88.3795 325.097 92.9648 339.182 92.9649L339.186 92.9648C349.054 92.869 358.455 90.4888 367.385 85.8286C367.4 87.3733 367.577 88.648 367.935 89.6328C368.361 90.804 369.066 91.6165 370.095 91.9192L370.099 91.9202C370.844 92.133 371.773 92.2324 372.873 92.2324H373.373V91.7324V63.3145V62.8145H372.873H368.479H368.099L367.997 63.1805C365.961 70.501 363.014 76.1565 359.181 80.1815C355.356 84.1979 350.627 86.6125 344.976 87.428C343.338 87.6204 341.701 87.7167 340.063 87.7168C331.431 87.6202 324.991 84.1803 320.67 77.4012C316.326 70.5848 314.096 60.3459 314.047 46.6145C314.047 25.2841 319.987 12.5418 331.596 7.97132C334.464 6.92051 337.577 6.39258 340.939 6.39258C346.372 6.39258 351.019 7.72529 354.904 10.3708C358.79 13.0171 361.946 16.9996 364.358 22.3524C365.422 24.8678 366.391 27.6778 367.265 30.7838L367.367 31.1484H367.746H372.434H372.941L372.934 30.6407L372.494 2.36918L372.486 1.87695H371.994C370.723 1.87695 369.652 2.09193 368.818 2.5645C367.969 3.04549 367.4 3.77535 367.12 4.7261L367.114 4.74738L367.109 4.76913C366.938 5.62735 366.841 6.78653 366.814 8.23522Z"
          stroke="white"
        />
        <path
          className="path3"
          d="M286.887 91.5H287.377L287.387 91.0094L287.973 59.9547L287.982 59.4453H287.473H283.664H283.289L283.184 59.8057L279.523 72.3993C279.523 72.4 279.523 72.4007 279.522 72.4014C277.487 79.1856 274.567 83.3636 270.852 85.1284L270.851 85.1286C268.88 86.0674 266.564 86.5449 263.889 86.5449H247.689V7.56445H259.641H260.141V7.06445V3.10938V2.60938H259.641H217.453H216.953V3.10938V7.06445V7.56445H217.453H228.672V86.5449H217.453H216.953V87.0449V91V91.5H217.453H286.887Z"
          stroke="white"
        />
        <path
          className="path2"
          d="M206.76 31.1484H207.271L207.26 30.6378L206.674 3.09874L206.663 2.60938H206.174H134.689H134.189V3.10938V7.06445V7.56445H134.689H145.908V86.5449H134.689H134.189V87.0449V91V91.5H134.689H206.174H206.663L206.674 91.0106L207.26 63.4716L207.271 62.9609H206.76H202.951H202.587L202.475 63.3074L199.547 72.3849C199.547 72.3856 199.547 72.3863 199.546 72.3871C197.032 79.9298 193.306 84.3386 188.452 85.8337C186.844 86.3063 185.086 86.5449 183.176 86.5449H164.926V48.4336H193.283H193.783V47.9336V43.5391V43.0391H193.283H164.926V7.56445H183.176C186.845 7.56445 189.948 8.51561 192.511 10.3972C195.079 12.2817 197.141 15.1259 198.678 18.9689L198.682 18.9777L198.686 18.9863C199.067 19.8448 199.402 20.7526 199.689 21.7101L199.69 21.7129L202.473 30.7949L202.581 31.1484H202.951H206.76Z"
          stroke="white"
        />
        <path
          className="path1"
          d="M95.2852 91.5H95.6443L95.759 91.1596L123.916 7.56445H130.881H131.381V7.06445V3.10938V2.60938H130.881H106.857H106.357V3.10938V7.06445V7.56445H106.857H117.884L97.1728 70.1234L74.9028 7.4269L85.9039 7.56441L86.4102 7.57074V7.06445V3.10938V2.60938H85.9102H54.8555H54.1344L54.3872 3.28467L65.0163 31.6776L50.8992 71.0643L28.0279 7.56445H39.0352H39.5352V7.06445V3.10938V2.60938H39.0352H1.82812H1.32812V3.10938V7.06445V7.56445H1.82812H9.24602L36.8079 80.6253C36.8082 80.6261 36.8085 80.6269 36.8088 80.6277C37.8875 83.5693 38.9241 85.9058 39.9209 87.6253C40.9034 89.3201 41.8894 90.4915 42.9032 91.0028C43.8767 91.541 45.0875 91.793 46.5059 91.793H48.8496H49.2001L49.3196 91.4635L68.0476 39.8544L83.3914 80.6292L83.3919 80.6305C84.47 83.4728 85.4684 85.7313 86.388 87.3965C87.2931 89.0356 88.1635 90.1794 89.0184 90.6941C89.9167 91.2539 91.199 91.5 92.7949 91.5H95.2852Z"
          stroke="white"
        />
      </motion.svg>
    </motion.div>
  );
};

export default Preloader;
