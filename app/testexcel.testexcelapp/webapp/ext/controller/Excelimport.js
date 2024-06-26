sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        excelimport: async function(oEvent) {
            MessageToast.show("Custom handler invoked.");
            //this._view.setBusyIndicatorDelay(0); 
            //this._view.setBusy(true);
            this.spreadsheetUpload =  await this._view.getController().getAppComponent().createComponent({
                usage: "spreadsheetImporter",
                async: true, 
                    componentData: { 
                        context: this,
                        debug: true
                    },
                });
            this.spreadsheetUpload.openSpreadsheetUploadDialog();
        }
    };
});
