//muxik igy: https://dev105349.service-now.com/api/x_721184_reddit_bl/syman_reddit_blue/post/asd/vote

    //{"ez": "valami", "az": a} //a bodyban
    /var myBody_ez = request.body.data.ez;
    var myBody_az = request.body.data.az;
    var myBody = request.body.data;
    response.setBody({ez: myBody_ez,
                    az: myBody_az,
                    amez: myBody.ez,
                    amaz: myBody.az
                    });/
    /eredmeny: {
        "result": {
        "ez": "valami",
        "az": "1",
        "amez": "valami",
        "amaz": "1"}}/

    //muxik igy: https://dev105349.service-now.com/api/x_721184_reddit_bl/syman_reddit_blue/post/%7Bsys_id%7D/vote
    //ez megy el: https://dev105349.service-now.com/api/x_721184_reddit_bl/syman_reddit_blue/post/bf623ca507cc81107cadf19d7c1ed0a2/vote
            
    /var myPaths = request.pathParams.sys_id;
    response.setBody({"path_bol": myPaths});/
    /eredmeny: {
        "result": {
        "path_bol": "bf623ca507cc81107cadf19d7c1ed0a2"
        }}/

    //muxik igy: https://dev105349.service-now.com/api/x_721184_reddit_bl/syman_reddit_blue/post/qwe/vote?ez=valamiakarmi&az=1234
            
    /var myQuery_ez = request.queryParams.ez;
    var myQuery = request.queryParams;
    response.setBody({ez: myQuery_ez,
                        az: myQuery.az,});/
    /eredmeny:{"result": {
                 "ez": ["valamiakarmi"],
                 "az": ["1234"]}}/



    /var gr = new GlideRecord("x_721184_reddit_bl_post");
    gr.addQuery('sys_id', myId);
    gr.query();
    gr.next();/