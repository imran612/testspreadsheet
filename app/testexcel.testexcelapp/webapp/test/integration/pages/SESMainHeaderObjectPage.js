sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'testexcel.testexcelapp',
            componentId: 'SESMainHeaderObjectPage',
            contextPath: '/SESMainHeader'
        },
        CustomPageDefinitions
    );
});