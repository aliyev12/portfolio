import React from 'react';
import styled from 'styled-components';
import { styles } from 'utils';

const ImageWrapper = styled.svg`
  .light-blue-circle {
    stroke-width: 1.61842;
    fill: #4a86ff;
    fill-opacity: 0.2;
  }

  .borders {
    stroke-width: 1.61842;
    fill: ${({ theme }) => theme.text};
  }

  .blue-middle-square {
    stroke-width: 1.61842;
    fill: ${styles.colors.mainBlue};
    fill-opacity: 1;
  }

  &:hover .blue-middle-square {
    fill: ${styles.colors.mainBlue__dark};
    fill: ${({ theme }) => theme.text};
    transition: ${styles.transition};
  }
`;

const SkillsBackgroundImg = ({ title, width = '1032', height = '300' }) => {
  return (
    <ImageWrapper
      id="fe80fb2b-bcaf-407e-919b-306adc32f78b"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 1076.06371 755.2279"
    >
      <title>{title}</title>
      <ellipse
        className="light-blue-circle"
        ry="108.92215"
        rx="101.60065"
        id="circle4928"
        fill="#f2f2f2"
        cy="409.02057"
        cx="164.26973"
      />
      <path
        className="borders"
        id="path4930"
        d="M 1003.4379,267.56031 H 434.08552 V 139.83746 H 1003.4379 Z M 436.59369,264.87134 H 1000.9297 V 142.52629 H 436.59369 Z"
      />
      <rect
        className="blue-middle-square"
        id="rect4932"
        fill="#6c63ff"
        height="125.03395"
        width="566.84418"
        y="165.38203"
        x="395.20905"
      />
      <ellipse
        className="blue-middle-square"
        ry="9.4112749"
        rx="8.7786703"
        id="circle4934"
        fill="#6c63ff"
        cy="36.650818"
        cx="36.879913"
      />
      <ellipse
        className="blue-middle-square"
        ry="9.4112749"
        rx="8.7786703"
        id="circle4936"
        fill="#6c63ff"
        cy="36.650818"
        cx="66.977875"
      />
      <ellipse
        className="blue-middle-square"
        ry="9.4112749"
        rx="8.7786703"
        id="circle4938"
        fill="#6c63ff"
        cy="36.650818"
        cx="97.075768"
      />
      <path
        className="borders"
        id="path4940"
        d="M 1067.734,747.86544 H 11.798541 V 11.106288 H 1067.734 Z M 14.306702,745.17654 H 1065.2259 V 13.79519 H 14.306702 Z"
      />
      <rect
        className="borders"
        id="rect4942"
        height="2.6889024"
        width="1053.4272"
        y="51.890156"
        x="13.052628"
      />
      <path
        className="borders"
        id="path4944"
        d="M 39.388312,43.373115 A 10.032642,10.755609 0 1 1 49.420955,32.617506 10.044271,10.768077 0 0 1 39.388312,43.373115 Z m 0,-18.822315 a 7.5244817,8.0667071 0 1 0 7.524482,8.066706 7.5332192,8.0760745 0 0 0 -7.524482,-8.066706 z"
      />
      <path
        className="borders"
        id="path4946"
        d="M 69.48623,43.373115 A 10.032642,10.755609 0 1 1 79.518875,32.617506 10.044271,10.768077 0 0 1 69.48623,43.373115 Z m 0,-18.822315 A 7.5244817,8.0667071 0 1 0 77.010718,32.617506 7.5332192,8.0760745 0 0 0 69.48623,24.5508 Z"
      />
      <path
        className="borders"
        id="path4948"
        d="M 99.584162,43.373115 A 10.032642,10.755609 0 1 1 109.61679,32.61749 10.044287,10.768094 0 0 1 99.584162,43.373115 Z m 0,-18.822315 a 7.5244817,8.0667071 0 1 0 7.524468,8.066706 7.5332349,8.0760912 0 0 0 -7.524468,-8.066706 z"
      />
      <rect
        className="borders"
        id="rect4950"
        height="694.32953"
        width="2.5081604"
        y="53.234596"
        x="342.53275"
      />
      <rect
        className="light-blue-circle"
        id="rect4952"
        fill="#f2f2f2"
        height="26.889023"
        width="184.34978"
        y="394.61093"
        x="462.30225"
      />
      <rect
        className="light-blue-circle"
        id="rect4954"
        fill="#f2f2f2"
        height="26.889023"
        width="184.34978"
        y="394.61093"
        x="751.99481"
      />
      <path
        className="borders"
        id="path4956"
        d="M 657.93882,409.39989 H 471.08089 V 379.82196 H 657.93882 Z M 473.58905,406.71098 H 655.43066 V 382.51086 H 473.58905 Z"
      />
      <rect
        className="light-blue-circle"
        id="rect4958"
        fill="#f2f2f2"
        height="26.889023"
        width="184.34978"
        y="603.00079"
        x="462.30225"
      />
      <path
        className="borders"
        id="path4960"
        d="M 657.93882,617.78979 H 471.08089 v -29.57791 h 186.85793 z m -184.34977,-2.6889 h 181.84161 v -24.2001 H 473.58905 Z"
      />
      <rect
        className="light-blue-circle"
        id="rect4962"
        fill="#f2f2f2"
        height="26.889023"
        width="474.04227"
        y="496.11694"
        x="462.92935"
      />
      <path
        className="borders"
        id="path4964"
        d="M 948.25837,513.59486 H 471.70792 V 484.01692 H 948.25837 Z M 474.21604,510.90595 H 945.75015 V 486.70582 H 474.21604 Z"
      />
      <path
        className="borders"
        id="path4966"
        d="M 947.6313,409.39989 H 760.77339 V 379.82196 H 947.6313 Z m -184.34977,-2.68891 h 181.84161 v -24.20012 h -181.8416 z"
      />
      <path
        className="borders"
        id="path4968"
        d="M 181.4637,489.4554 A 103.16374,110.59787 0 1 1 284.62743,378.85753 103.28047,110.72302 0 0 1 181.4637,489.4554 Z m 0,-217.84429 A 100.03756,107.24642 0 1 0 281.50127,378.85753 100.1512,107.36825 0 0 0 181.4637,271.61111 Z"
      />
    </ImageWrapper>
  );
};

export default SkillsBackgroundImg;
