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