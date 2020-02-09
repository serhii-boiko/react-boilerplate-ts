import { css } from 'styled-components';

const defaultBreakpoints: { [key: string]: number } = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560,
};

// ------- Media Query -------

function getSizeFromBreakpoint(breakpointValue: string, breakpoints = defaultBreakpoints) {
  if (breakpoints[breakpointValue]) {
    return `${breakpoints[breakpointValue]}px`;
  } else if (parseInt(breakpointValue, 10)) {
    return breakpointValue;
  } else {
    // tslint:disable-next-line no-console
    console.error('No valid breakpoint or size specified for media.');
    return '0';
  }
}

export const mediaQueryLessThan = (breakpoint: string) => (
  literals: TemplateStringsArray,
  ...args: any[]
) => css`
  @media (max-width: ${getSizeFromBreakpoint(breakpoint)}) {
    ${css(literals, ...args)}
  }
`;

export const mediaQueryGreaterThan = (breakpoint: string) => (
  literals: TemplateStringsArray,
  ...args: any[]
) => css`
  @media (min-width: ${getSizeFromBreakpoint(breakpoint)}) {
    ${css(literals, ...args)}
  }
`;

export const mediaQueryBetween = (firstBreakpoint: string, secondBreakpoint: string) => (
  literals: TemplateStringsArray,
  ...args: any[]
) => css`
  @media (min-width: ${getSizeFromBreakpoint(
      firstBreakpoint
    )}) and (max-width: ${getSizeFromBreakpoint(secondBreakpoint)}) {
    ${css(literals, ...args)}
  }
`;

// ------- Media Query based on Redux and State -------

function getStateSizeFromBreakpoint(breakpointValue: string, breakpoints = defaultBreakpoints) {
  if (breakpoints[breakpointValue]) {
    return breakpoints[breakpointValue];
  }

  // tslint:disable-next-line no-console
  console.error('No valid breakpoint or size specified for media.');
  return null;
}

export const stateMediaQueryLessThan = (breakpoint: string, width: number) => (
  literals: TemplateStringsArray,
  ...args: any[]
) => {
  const bp = getStateSizeFromBreakpoint(breakpoint);
  if (bp && bp >= width) {
    return css(literals, ...args);
  }

  return '';
};

export const stateMediaQueryGreaterThan = (breakpoint: string, width: number) => (
  literals: TemplateStringsArray,
  ...args: any[]
) => {
  const bp = getStateSizeFromBreakpoint(breakpoint);
  if (bp && bp <= width) {
    return css(literals, ...args);
  }

  return '';
};

export const stateMediaQueryBetween = (
  firstBreakpoint: string,
  secondBreakpoint: string,
  width: number
) => (literals: TemplateStringsArray, ...args: any[]) => {
  const bpFirst = getStateSizeFromBreakpoint(firstBreakpoint);
  const bpSecond = getStateSizeFromBreakpoint(secondBreakpoint);
  if (bpFirst && bpSecond && bpFirst >= width && bpSecond <= width) {
    return css(literals, ...args);
  }

  return '';
};
