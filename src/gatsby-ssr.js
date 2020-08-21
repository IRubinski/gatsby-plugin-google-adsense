import React from "react";
import * as logger from "./logger";
export const onRenderBody = (
  { setHeadComponents, setPostBodyComponents },
  pluginOptions
) => {
  if (process.env.NODE_ENV !== `production`) {
    logger.warningConsoleLogger("non production environment");
    return null;
  }
  if (pluginOptions.googleAdClientId === undefined) {
    logger.throwErorr("googleAdClientId is not set");
  }
  if (pluginOptions.enable === false) {
    logger.warningConsoleLogger("plugin disabled");
    return null;
  }
  const setComponents = pluginOptions.head
    ? setHeadComponents
    : setPostBodyComponents;
  return setComponents([
    <script
      key={`gatsby-plugin-google-adsense`}
      data-ad-client={`${pluginOptions.googleAdClientId}`}
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
    />
  ]);
};
