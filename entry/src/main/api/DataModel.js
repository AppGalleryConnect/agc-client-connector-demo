import agconnect from '@ohos/agconnect-api';
import "@ohos/agconnect-core";
import "@ohos/agconnect-credential";
import "@ohos/agconnect-lowcode"
import { Config } from '../api/config'

export function init(context){
    agconnect.instance().init(context);

    agconnect.instance()
        .setApiKey(Config.apiKey);
    agconnect.instance().setClientSecret(Config.clientSecret);
}

export async function getDataModel(id, name, param, status){
    return await agconnect.lowCode().callDataModel({
        modelId: id,
        methodName:name,
        params: param,
        status: status
    })
}