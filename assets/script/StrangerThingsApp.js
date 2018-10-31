/*** CONSTRUCTOR StrangerThingsApp()
***/

var StrangerThingsApp = function() {
    console.group( "CONSTRUCTOR StrangerThingsApp()" );

    this.status = undefined;

    // Firebase API
    this.firebaseConfig = {
        apiKey: "AIzaSyDXKtYT5Fe4vV4-cJnPw7pToFVgnrikR_c",
        authDomain: "fsfp-team-project-01.firebaseapp.com",
        databaseURL: "https://fsfp-team-project-01.firebaseio.com",
        projectId: "fsfp-team-project-01",
        storageBucket: "fsfp-team-project-01.appspot.com",
        messagingSenderId: "113135877852"
    };
    firebase.initializeApp( this.firebaseConfig );
    this.firebaseCredentials = undefined;    // { user }
    this.firebaseError = undefined;    // { code, messge }

    // Rest API
    this.API_HOST = {};
    this.API_KEY = {};
    this.API_ENDPOINT = {};

    // Giphy API
    this.API_HOST__GIPHY = "api.giphy.com";
    this.API_KEY__GIPHY = "O4Rolb03RAK6SiFmndG6Yxs0SXhhmslq";
    this.API_ENDPOINT__GIPHY__GIF_ID = {};
    this.API_ENDPOINT__GIPHY__GIF_ID[ "3ohhwhjxmrQwLXJFgk" ] = "/v1/gifs/3ohhwhjxmrQwLXJFgk";
    this.API_ENDPOINT__GIPHY__GIF_ID[ "PKjNAlrpj1iqA" ] = "/v1/gifs/PKjNAlrpj1iqA";
    this.API_ENDPOINT__GIPHY__GIF_ID[ "l1J9qzPD7ziXWQybK" ] = "/v1/gifs/l1J9qzPD7ziXWQybK";
    this.API_ENDPOINT__GIPHY__GIF_ID[ "3ohhwoyHMhQPbb23oA" ] = "/v1/gifs/3ohhwoyHMhQPbb23oA";
    this.API_ENDPOINT__GIPHY__GIF_ID[ "l1J9IWqrSnr7yFDhe" ] = "/v1/gifs/l1J9IWqrSnr7yFDhe";
    this.API_ENDPOINT__GIPHY__GIF_ID[ "l1J9MiKZYATmANhFm" ] = "/v1/gifs/l1J9MiKZYATmANhFm";
    this.API_ENDPOINT__GIPHY__GIF_ID[ "l1J9KqKcpnG6ychfq" ] = "/v1/gifs/l1J9KqKcpnG6ychfq";
    this.API_ENDPOINT__GIPHY__GIF_ID[ "MIKE_WHEELER" ] = "/v1/gifs/vijrOPnOo9RVC";
    this.API_URL_PARAMETER__GIPHY = {};
    this.API_URL_PARAMETER__GIPHY[ "3ohhwhjxmrQwLXJFgk" ] = { api_key : this.API_KEY__GIPHY };
    this.API_URL_PARAMETER__GIPHY[ "PKjNAlrpj1iqA" ] = { api_key : this.API_KEY__GIPHY };
    this.API_URL_PARAMETER__GIPHY[ "l1J9qzPD7ziXWQybK" ] = { api_key : this.API_KEY__GIPHY };
    this.API_URL_PARAMETER__GIPHY[ "3ohhwoyHMhQPbb23oA" ] = { api_key : this.API_KEY__GIPHY };
    this.API_URL_PARAMETER__GIPHY[ "l1J9IWqrSnr7yFDhe" ] = { api_key : this.API_KEY__GIPHY };
    this.API_URL_PARAMETER__GIPHY[ "l1J9MiKZYATmANhFm" ] = { api_key : this.API_KEY__GIPHY };
    this.API_URL_PARAMETER__GIPHY[ "l1J9KqKcpnG6ychfq" ] = { api_key : this.API_KEY__GIPHY };
    this.API_URL_PARAMETER__GIPHY[ "MIKE_WHEELER" ] = { api_key : this.API_KEY__GIPHY };
    this.API_METHOD__GIPHY__AS_SIMPLE_JSON = "GET";

    // Wikia API
    this.API_HOST__WIKIA = "strangerthings.wikia.com";
    // this.API_KEY__WIKIA = null;
    this.API_ENDPOINT__WIKIA__AS_SIMPLE_JSON = "/api/v1/Articles/AsSimpleJson";
    this.API_URL_PARAMETER__WIKIA = {};
    this.API_URL_PARAMETER__WIKIA[ "ELEVEN" ] = { id : 90 };
    this.API_URL_PARAMETER__WIKIA[ "MIKE_WHEELER" ] = { id : 130 };
    this.API_METHOD__WIKIA__AS_SIMPLE_JSON = "GET";

    // YouTube API

    // character profile
    this.characterProfileTextAS = {};    // [ string ]
    this.characterTraitsAS = {};    // [ string ]
    this.characterProfileImageAS = {};    // [ { src , width , height } ]
    this.characterProfileImageAS[ "ELEVEN" ] = {
        src : "" ,
        width : "" ,
        height : "" };
    this.characterProfileImageAS[ "MIKE_WHEELER" ] = {
        src : "" ,
        width : "" ,
        height : "" };

    // story images
    this.storyGiphyImageAS = {};

    // story video
    this.storyYoutubeVideoAS = {};
    this.storyYoutubeVideoAS[ "0" ] = "vPTZmu_YX1Q";
    this.storyYoutubeVideoAS[ "1" ] = "AYeEcPhugGw";

    // story
    this.currentStory;
    this.currentStoryNode = undefined;
    this.currentStoryNodeIndex = undefined;
    this.storyAS = {};
    this.storyAS[ "ELEVEN" ] = [
        // 0
        {
            mediaType : "giphy" ,
            mediaSrc : "3ohhwhjxmrQwLXJFgk" ,
            header : "Story 0" ,
            text : "My head is shaved, I am wearing a hospital gown and I am ravenously hungry. I see a diner, which is" ,
            answers: [
                "Benny’s" ,
                "Bob’s" ,
                "Danny’s"
            ] ,
            correctAnswerIndex : 0
        } ,
        // 1
        {
            mediaType : "giphy" ,
            mediaSrc : "PKjNAlrpj1iqA" ,
            header : "Story 1" ,
            text : "Benny called for social workers to come and pick me up. But instead of the social workers, armed agents arrived, I call them ‘bad people’; the kill him. I had a chance to escape. I met a group of boys. They offered me to stay at…" ,
            answers: [
                "Mike’s home" ,
                "Dustin’s home" ,
                "Lucas’s home"
            ] ,
            correctAnswerIndex : 0
        } ,
        // 2
        {
            mediaType : "giphy" ,
            mediaSrc : "l1J9qzPD7ziXWQybK" ,
            header : "Story 2" ,
            text : "Mike decided to hide me from his mom.  He put me into a dark closet. I was scared and started having flashbacks of being dragged into a dark cell at…" ,
            answers : [
                "Hawkins Laboratory" ,
                "Bernner and co Laboratory" ,
                "Laboratory of  secret science"
            ] ,
            correctAnswerIndex : 0
        } ,
        // 3
        {
            mediaType : "giphy" ,
            mediaSrc : "3ohhwoyHMhQPbb23oA" ,
            header: "Story 3" ,
            text : "The boys know about my power and  they want me to help them find their friend, Will. I figured out how to use the boys’ walkie-talkies to find him. When I connected with him, I could hear him singing" ,
            answers : [
                "«Should I Stay or Should I Go»" ,
                "«Don’t Stop Believin»" ,
                "«Somewhere Over the Rainbow»"
            ] ,
            correctAnswerIndex : 0
        }
    ]
    this.storyAS[ "MIKE_WHEELER" ] = [
        // 0
        {
            mediaType : "image" ,
            mediaSrc : "imageSrc" ,
            header : "Story 0" ,
            text : "start" ,
            choices : [ 1 ]
        } ,
        // 1
        {
            mediaType : "image" ,
            mediaSrc : "imageSrc" ,
            header : "Story 1" ,
            text : "text" ,
            choices : [ 2 , 3 ]
        } ,
        // 2
        {
            mediaType : "giphy" ,
            mediaSrc : "giphyId" ,
            header : "Story 2" ,
            text : "text" ,
            choices : [ 3 , 4 ]
        } ,
        // 3
        {
            mediaType : "image" ,
            mediaSrc : "imageSrc" ,
            header: "Story 3" ,
            text : "bad ending" ,
            choices : [ 5 ]
        } ,
        // 4
        {
            mediaType : "YouTube" ,
            mediaSrc : "youtubeId" ,
            header : "Story 4" ,
            text : "good ending" ,
            choices : [ 5 ]
        } ,
        // 5
        {
            mediaType : "YouTube" ,
            mediaSrc : "youtubeId" ,
            header : "Story 5" ,
            text : "end" ,
            choices : []
        }
    ]

    console.logValue( "this" , this );
    console.log( "[END] CONSTRUCTOR StrangerThingsApp" );
    console.groupEnd();
};


/*** FUNCTION firebaseSignIn()
***/

StrangerThingsApp.prototype.firebaseSignIn = function( email , password ) {
    console.group( "FUNCTION StrangerThingsApp.firebaseSignIn()" );
    console.logValue( "email" , email );
    console.logValue( "password" , password );

    var strangerThingsApp = this;
    var promise =
        new Promise(
            ( resolve , reject ) => {
                console.group( "CONSTRUCTOR Promise()" );

                firebase.auth().signInWithEmailAndPassword( email, password )
                    .then(
                        function( credentials ) {
                            console.group( "FUNCTION firebase.auth().signInWithEmailAndPassword().then()" );
                            console.logValue( "credentials" , credentials );

                            strangerThingsApp.firebaseCredentials = credentials;
                            var isLoginOk = true;

                            console.logValue( "strangerThingsApp.firebaseCredentials" , strangerThingsApp.firebaseCredentials );
                            console.logValue( "isLoginOk" , isLoginOk );
                            console.groupEnd();
                            resolve( isLoginOk );
                        }
                    )
                    .catch(
                        function( error ) {
                            console.group( "FUNCTION firebase.auth().signInWithEmailAndPassword().catch()" );

                            console.logValue( "error" , error );
                            strangerThingsApp.firebaseError = error;
                            var isLoginOk = false;

                            console.logValue( "strangerThingsApp.firebaseError" , strangerThingsApp.firebaseError );
                            console.logValue( "isLoginOk" , isLoginOk );
                            console.groupEnd();
                            resolve( isLoginOk );
                        }
                    );

                console.groupEnd();
            }
        );

    console.logValue( "promise" , promise );
    console.groupEnd();
    return promise;
};


/*** FUNCTION firebaseCreateUser()
***/

StrangerThingsApp.prototype.firebaseCreateUser = function( displayName , email , password ) {
    console.group( "FUNCTION StrangerThingsApp.firebaseCreateUser()" );
    console.logValue( " displayName" ,  displayName );
    console.logValue( "email" , email );
    console.logValue( "password" , password );

    var strangerThingsApp = this;
    var promise =
        new Promise(
            ( resolve , reject ) => {
                console.group( "CONSTRUCTOR Promise()" );

                firebase.auth().createUserWithEmailAndPassword( email, password )
                    .then(
                        function( credentials ) {
                            console.group( "FUNCTION firebase.auth().createUserWithEmailAndPassword().then()" );
                            console.logValue( "credentials" , credentials );

                            credentials.user.updateProfile( { displayName: displayName } )
                                .then(
                                    function () {
                                        console.group( "FUNCTION credentials.user.updateProfile().then()" );

                                        strangerThingsApp.firebaseCredentials = credentials;
                                        var isRegisterOk = true;

                                        console.logValue( "strangerThingsApp.firebaseCredentials" , strangerThingsApp.firebaseCredentials );
                                        console.logValue( "isRegisterOk" , isRegisterOk );
                                        console.groupEnd();
                                        resolve( isRegisterOk );
                                    }
                                )
                                .catch(
                                    function( error ) {
                                        console.group( "FUNCTION credentials.user.updateProfile().then().catch()" );

                                        console.logValue( "error" , error );
                                        strangerThingsApp.firebaseError = error;
                                        var isRegisterOk = false;

                                        console.logValue( "strangerThingsApp.firebaseError" , strangerThingsApp.firebaseError );
                                        console.logValue( "isRegisterOk" , isRegisterOk );
                                        console.groupEnd();
                                        resolve( isRegisterOk );
                                    }
                                );
                        }
                    )
                    .catch(
                        function( error ) {
                            console.group( "FUNCTION firebase.auth().createUserWithEmailAndPassword().catch()" );

                            console.logValue( "error" , error );
                            strangerThingsApp.firebaseError = error;
                            var isRegisterOk = false;

                            console.logValue( "strangerThingsApp.firebaseError" , strangerThingsApp.firebaseError );
                            console.logValue( "isRegisterOk" , isRegisterOk );
                            console.groupEnd();
                            resolve( isRegisterOk );
                        }
                    );

                console.groupEnd();
            }
        );

    console.logValue( "promise" , promise );
    console.groupEnd();
    return promise;
};


/*** FUNCTION ajax()
***/

StrangerThingsApp.prototype.ajax = function( ajaxSettings ) {
    console.group( "FUNCTION StrangerThingsApp.ajax()" );
    console.logValue( "ajaxSettings" , ajaxSettings );

    var promise =
        new Promise(
            ( resolve , reject ) => {
                console.group( "CONSTRUCTOR Promise()" );

                $.ajax( ajaxSettings )
                    .done(
                        ( ajaxResponse ) => {
                            console.group( "FUNCTION $.ajax().done()" );

                            console.logValue( "ajaxResponse" , ajaxResponse );

                            console.groupEnd();
                            resolve( ajaxResponse );
                        }
                    )

                console.groupEnd();
            }
        );

    console.logValue( "promise" , promise );
    console.groupEnd();
    return promise;
};


/*** FUNCTION newAjaxSettings()
***/

StrangerThingsApp.prototype.newAjaxSettings = function( apiHost , apiEndPoint , apiUrlParameter , method ) {
    console.group( "FUNCTION StrangerThingsApp.newAjaxSettings()" );
    console.logValue( "apiHost" , apiHost );
    console.logValue( "apiEndPoint" , apiEndPoint );
    console.logValue( "apiUrlParameter" , apiUrlParameter );

    var url =
        "https://$API_HOST$API_ENDPOINT?$URL_PARAMETERS"
        .replace( "$API_HOST" , apiHost )
        .replace( "$API_ENDPOINT" , apiEndPoint )
        .replace( "$URL_PARAMETERS" , $.param( apiUrlParameter , true ) );

    var ajaxSettings = {
        url : url ,
        method : method
    };

    console.logValue( "ajaxSettings" , ajaxSettings );
    console.groupEnd();
    return ajaxSettings;
};


/*** FUNCTION wikiaCharacterProfile()
***/

StrangerThingsApp.prototype.wikiaCharacterProfile = function( index ) {
    console.group( "FUNCTION StrangerThingsApp.wikiaCharacterProfile()" );
    console.logValue( "index" , index );

    var apiHost = this.API_HOST__WIKIA;
    // var apiKey = this.API_KEY__WIKIA;
    var apiEndPoint = this.API_ENDPOINT__WIKIA__AS_SIMPLE_JSON;
    var apiUrlParameter = this.API_URL_PARAMETER__WIKIA[ index ];
    var apiMethod = this.API_METHOD__WIKIA__AS_SIMPLE_JSON;
    console.logValue( "apiHost" , apiHost );
    // console.logValue( "apiKey" , apiKey );
    console.logValue( "apiEndPoint" , apiEndPoint );
    console.logValue( "apiUrlParameter" , apiUrlParameter );

    var ajaxSettings = this.newAjaxSettings( apiHost , apiEndPoint , apiUrlParameter , apiMethod );
    console.logValue( "ajaxSettings" , ajaxSettings );

    var promise = this.ajax( ajaxSettings );

    console.logValue( "promise" , promise );
    console.groupEnd();
    return promise;
};


/*** FUNCTION newCharacterProfile()
***/

StrangerThingsApp.prototype.newCharacterProfile = function( index ) {
    console.group( "FUNCTION StrangerThingsApp.newCharacterProfile()" );
    console.logValue( "index" , index );

    strangerThingsApp = this;
    promise =
        new Promise(
            ( resolve , reject ) => {
                console.group( "CONSTRUCTOR Promise()" );

                strangerThingsApp.wikiaCharacterProfile( index )
                    .then(
                        ( ajaxResponse ) => {
                            console.group( "CONSTRUCTOR .then()" );

                            // character introduction
                            // ajaxResponse.sections[ 0 ].content[ 0 ].text
                            strangerThingsApp.characterProfileTextAS[ index ] = [];
                            ajaxResponse.sections[ 0 ].content.forEach(
                                ( content , contentIndex ) => {
                                    strangerThingsApp.characterProfileTextAS[ index ].push( content.text );
                                }
                            );

                            // personal traits
                            // ajaxResponse.sections[ 1 ].content[ 0 ].text
                            strangerThingsApp.characterTraitsAS[ index ] = [];
                            ajaxResponse.sections[ 1 ].content.forEach(
                                ( content , contentIndex ) => {
                                    strangerThingsApp.characterTraitsAS[ index ].push( content.text );
                                }
                            );

                            console.groupEnd();
                            resolve();
                        }
                    )

                console.groupEnd();
            }
        );

    console.logValue( "promise" , promise );
    console.groupEnd();
    return promise;
};


/*** FUNCTION giphyImage()
***/

StrangerThingsApp.prototype.giphyImage = function( index ) {
    console.group( "FUNCTION StrangerThingsApp.giphyImage()" );
    console.logValue( "index" , index );

    var apiHost = this.API_HOST__GIPHY;
    // var apiKey = this.API_KEY__WIKIA;
    var apiEndPoint = this.API_ENDPOINT__GIPHY__GIF_ID[ index ];
    var apiUrlParameter = this.API_URL_PARAMETER__GIPHY[ index ];
    var apiMethod = this.API_METHOD__GIPHY__AS_SIMPLE_JSON;
    console.logValue( "apiHost" , apiHost );
    // console.logValue( "apiKey" , apiKey );
    console.logValue( "apiEndPoint" , apiEndPoint );
    console.logValue( "apiUrlParameter" , apiUrlParameter );

    var ajaxSettings = this.newAjaxSettings( apiHost , apiEndPoint , apiUrlParameter , apiMethod );
    console.logValue( "ajaxSettings" , ajaxSettings );

    var promise = this.ajax( ajaxSettings );

    console.logValue( "promise" , promise );
    console.groupEnd();
    return promise;
};


/*** FUNCTION newGiphyImage()
***/

StrangerThingsApp.prototype.newGiphyImage = function( index ) {
    console.group( "FUNCTION StrangerThingsApp.newGiphyImage()" );
    console.logValue( "index" , index );

    strangerThingsApp = this;
    promise =
        new Promise(
            ( resolve , reject ) => {
                console.group( "CONSTRUCTOR Promise()" );

                strangerThingsApp.giphyImage( index )
                    .then(
                        ( ajaxResponse ) => {
                            console.group( "CONSTRUCTOR .then()" );

                            console.logValue( "ajaxResponse" , ajaxResponse );
                            strangerThingsApp.storyGiphyImageAS[ index ] = ajaxResponse.data.images.original;

                            console.groupEnd();
                            resolve();
                        }
                    )

                console.groupEnd();
            }
        );

    console.logValue( "promise" , promise );
    console.groupEnd();
    return promise;
};


/*** FUNCTION storyStart()
***/

StrangerThingsApp.prototype.storyStart = function( storyIndex ) {
    console.group( "FUNCTION StrangerThingsApp.storyStart()" );
    console.logValue( "storyIndex" , storyIndex );

    this.currentStory = this.storyAS[ storyIndex ];
    this.currentStoryNode = this.currentStory[ 0 ];

    console.groupEnd();
};


/*** FUNCTION storyNext()
***/

StrangerThingsApp.prototype.storyNext = function( choiceIndex ) {
    console.group( "FUNCTION StrangerThingsApp.storyNext()" );
    console.logValue( "choiceIndex" , choiceIndex );

    var nextStoryNodeIndex = this.currentStoryNode.choices[ choiceIndex ];
    this.currentStoryNode = this.currentStory[ nextStoryNodeIndex ];

    console.groupEnd();
};
