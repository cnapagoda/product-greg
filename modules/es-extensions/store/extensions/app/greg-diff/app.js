/*
 * Copyright (c) 2014, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

app.server = function(ctx){
    return {
        endpoints:{
            pages:[
                {
                    title:'Diff',
                    url:'diff',
                    path:'diff-view.jag',
                    secured:false
                },
                {
                    title:'Code',
                    url:'select',
                    path:'diff-select.jag',
                    secured:false
                }
            ]
        }
    };
};

app.pageHandlers = function(ctx) {
    return {
        onPageLoad: function() {
            if ((ctx.isAnonContext) && (ctx.endpoint.secured)) {
                ctx.res.sendRedirect(ctx.appContext+'/login');
                return false;
            }
            return true;
        }
    };
};
