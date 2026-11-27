import { apiInitializer } from "discourse/lib/api";
import getURL from "discourse/lib/get-url";
import * as themeSelector from "discourse/lib/theme-selector";
import { i18n } from "discourse-i18n";

export default apiInitializer((api) => {
  if (!api.getCurrentUser()?.admin || !themeSelector.CONCORD_THEME_ID) {
    return;
  }

  api.addGlobalNotice(
    i18n(themePrefix("deprecation_notice"), {
      url: getURL(`/admin/customize/themes/${themeSelector.CONCORD_THEME_ID}`),
    }),
    "concord-deprecation",
    { dismissable: true }
  );
});
