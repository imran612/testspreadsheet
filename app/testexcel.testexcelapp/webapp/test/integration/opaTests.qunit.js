sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'testexcel/testexcelapp/test/integration/FirstJourney',
		'testexcel/testexcelapp/test/integration/pages/SESMainHeaderList',
		'testexcel/testexcelapp/test/integration/pages/SESMainHeaderObjectPage'
    ],
    function(JourneyRunner, opaJourney, SESMainHeaderList, SESMainHeaderObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('testexcel/testexcelapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheSESMainHeaderList: SESMainHeaderList,
					onTheSESMainHeaderObjectPage: SESMainHeaderObjectPage
                }
            },
            opaJourney.run
        );
    }
);