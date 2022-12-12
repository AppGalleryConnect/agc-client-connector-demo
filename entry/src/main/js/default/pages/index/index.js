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

import featureAbility from '@ohos.ability.featureAbility'
import { Init, CallConnector } from '../../../../api/Connector'
import { getDataModel } from '../../../../api/DataModel'

export default {
    data: {
        // 默认查询地点
        location: 'beijing',
        dailyList: [{
            date: '',
            high: '',
            low: '',
            text_day: '',
            wind_direction: ""
        }],
        commodityList: [{
            spuId: '',
            pm: '',
            ms: '',
            tp: '',
            jg: ''
        }]
    },
    onInit() {
        // 初始化时置空
        this.dailyList = [];
        this.commodityList = [];
        const context = featureAbility.getContext();
        // 初始化低代码SDK
        Init(context.getApplicationContext());
        this.getWeatherList();
        this.getCommodityList();
    },
    getWeatherList() {
        // 连接器获取天气数据
        CallConnector("1041211254456747520", "method_ixdcj", JSON.stringify({
            key: "SsTbBP4EOakE6sbKq",
            location: this.location,
            language: "zh-Hans",
            unit: "c",
            start: "-1",
            days: "5"
        })).then((res) => {
            let records = JSON.parse(res.responseBody.response);
            this.location = records.results[0].location.path;
            let daily = records.results[0].daily;
            daily.forEach(item => {
                this.dailyList.push({
                    date: item.date,
                    high: item.high.concat('°C'),
                    low: item.low.concat('°C'),
                    text_day: item.text_day,
                    wind_direction: item.wind_direction.concat('风')
                })
            })
        }).catch(e => {
            console.error(JSON.stringify(e));
        })
    },
    getCommodityList() {
        // 广告商品数据模型
        getDataModel("1040644935361207297", "list", {}, 0).then((res) => {
            let records = res.responseBody.data.records;
            records.forEach(item => {
                this.commodityList.push({
                    spuId: item.spuId,
                    pm: item.pm,
                    ms: item.ms,
                    tp: item.tp,
                    jg: "￥".concat(item.jg)
                })
            })
        }).catch(e => {
            console.error(JSON.stringify(e));
        })
    }
}