import { css } from 'react-emotion';

const THEME_CONF = 'flexboxgrid';
export const BASE_CONF = {
  gridSize: 12,
  gutterWidth: 1,
  outerMargin: 2,
  mediaQuery: 'only screen',
  container: {
    sm: 46,
    md: 61,
    lg: 76,
  },
  breakpoints: {
    xs: 0,
    sm: 48,
    md: 64,
    lg: 75,
  },
};

const configCache: any[] = [];
const makeCacheId = props =>
  JSON.stringify((props.theme && props.theme[THEME_CONF]) || {});
// _media and _props are underscored because of a very very weird bug in uglify-es where it confuses these variables with something else
const resolveConfig = _props => {
  const themeConf = (_props.theme && _props.theme[THEME_CONF]) || {};

  const conf = {
    ...BASE_CONF,
    ...themeConf,
    container: {
      ...BASE_CONF.container,
      ...themeConf.container,
    },
    breakpoints: {
      ...BASE_CONF.breakpoints,
      ...themeConf.breakpoints,
    },
  };

  conf.media = Object.keys(conf.breakpoints).reduce((_media, breakpoint) => {
    const breakpointWidth = conf.breakpoints[breakpoint];
    _media[breakpoint] = makeMedia(
      [
        conf.mediaQuery,
        breakpointWidth !== 0 && `(min-width: ${breakpointWidth}em)`,
      ]
        .filter(Boolean)
        .join(' and ')
    );
    return _media;
  }, {});

  return conf;
};

export const DIMENSION_NAMES = ['xs', 'sm', 'md', 'lg'];
export type IDIMENSION_NAMES = 'xs' | 'sm' | 'md' | 'lg';

export default function config(props: object) {
  const cacheId = makeCacheId(props);
  if (configCache[0] === cacheId) {
    return configCache[1];
  }

  const conf = resolveConfig(props);

  configCache[0] = cacheId;
  configCache[1] = conf;

  return conf;
}

function makeMedia(media: any) {
  return (...args) => css`
    @media ${media} {
      ${css(...args)};
    }
  `;
}
