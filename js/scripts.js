var feed = new Instafeed({
    get: 'tagged',
    tagName: 'radlandsplaza',
    userId: 571597867,
    limit: 20,
    accessToken: '571597867.467ede5.7c222142a5b14db8b45e6c51057cdb58',    
    resolution: 'low_resolution',
});

feed.run();