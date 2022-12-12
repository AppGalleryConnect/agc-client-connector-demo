package com.huawei.zhanjiang;

import ohos.ace.ability.AceAbility;
import ohos.aafwk.content.Intent;
import ohos.agp.components.Component;
import ohos.agp.window.service.WindowManager;

public class MainAbility extends AceAbility {
    @Override
    public void onStart(Intent intent) {
        super.onStart(intent);
        getWindow().addFlags(WindowManager.LayoutConfig.MARK_FULL_SCREEN);
    }

    @Override
    public void onStop() {
        super.onStop();
    }
}
