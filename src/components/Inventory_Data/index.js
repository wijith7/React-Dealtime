/*
* Copyright (c) 2018, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
*
* WSO2 Inc. licenses this file to you under the Apache License,
* Version 2.0 (the "License"); you may not use this file except
* in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

// This is the js that we call data from InventoryAPI

import axios from "axios";
import { set_headder } from "../Request_Headder";
export function getProducts() {
  // this Request data for the InventoryAPI

  return axios
    .get("https://localhost:8243/inventoryapi/1.0.0/order/all", set_headder()) 
    .then(function(res) {
      //console.log("RESPONSE RECEIVED: ", res);
      //console.log("RESPONSE data: ", res.data);
      let products = res.data;
      return products;
    })
    .catch(err => {
      console.log("AXIOS ERROR: ", err);
    });
}
