/*
 * Copyright 2020. Huawei Technologies Co., Ltd. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import agconnect from '@ohos/agconnect-api';
import "@ohos/agconnect-core";
import "@ohos/agconnect-credential";
import "@ohos/agconnect-lowcode";
import { Config } from '../api/config';

export function Init(context){
    agconnect.instance().init(context);

    agconnect.instance()
        .setApiKey(Config.apiKey);
    agconnect.instance().setClientSecret(Config.clientSecret);
}

export async function CallConnector(connectorId, methodName, params){
    return await agconnect.lowCode().callConnector({
        connectorId: connectorId,
        methodName:methodName,
        params: params,
    })
}