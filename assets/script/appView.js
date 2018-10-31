/*** FUNCTION viewInitializeUI()
***/

viewInitializeUI = function() {
    console.group( "FUNCTION viewInitializeUI()" );

    $( "#login-form" ).hide();
    $( "#register-form" ).hide();
    $( "#authentication" ).hide();
    $( "#authentication-message" ).hide();
    $( "#welcome-message" ).hide();
    $( "#game" ).hide();
    $( "#trivia" ).hide();

    console.groupEnd();
};


/*** FUNCTION viewShowAuthentication()
***/

viewShowAuthentication = function() {
    console.group( "FUNCTION viewShowAuthentication()" );

    $( "#login-form" ).hide();
    $( "#register-form" ).hide();
    $( "#authentication" ).fadeIn();

    console.groupEnd();
};


/*** FUNCTION viewHideAuthentication()
***/

viewHideAuthentication = function() {
    console.group( "FUNCTION viewHideAuthentication()" );

    $( "#login-form" ).hide();
    $( "#register-form" ).hide();
    $( "#authentication" ).fadeOut();

    console.groupEnd();
};


/*** FUNCTION viewShowLogin()
***/

viewShowLogin = function() {
    console.group( "FUNCTION viewShowLogin()" );

    $( "#login-form" ).fadeIn();

    console.groupEnd();
};


/*** FUNCTION viewHideLogin()
***/

viewHideLogin = function() {
    console.group( "FUNCTION viewHideLogin()" );

    $( "#login-form" ).hide();

    console.groupEnd();
};


/*** FUNCTION viewShowRegister()
***/

viewShowRegister = function() {
    console.group( "FUNCTION viewShowRegister()" );

    $( "#register-form" ).fadeIn();

    console.groupEnd();
};


/*** FUNCTION viewHideRegister()
***/

viewHideRegister = function() {
    console.group( "FUNCTION viewHideRegister()" );

    $( "#register-form" ).hide();

    console.groupEnd();
};


/*** FUNCTION viewShowAuthenticationMessage()
***/

viewShowAuthenticationMessage = function() {
    console.group( "FUNCTION viewShowAuthenticationMessage()" );

    $( "#authentication-message-text" ).text( app.firebaseError.message );
    $( "#authentication-message" ).fadeIn();

    console.groupEnd();
};


/*** FUNCTION viewHideAuthenticationMessage()
***/

viewHideAuthenticationMessage = function() {
    console.group( "FUNCTION viewHideAuthenticationMessage()" );

    $( "#authentication-message" ).fadeOut();

    console.groupEnd();
};


/*** FUNCTION viewShowWelcomeMessage()
***/

viewShowWelcomeMessage = function() {
    console.group( "FUNCTION viewShowWelcomeMessage()" );

    $( "#welcome-message" )
        .dialog(
            {
                modal : true,
                buttons : {
                    YES : handleClickWelcomeMessageButton
                    /*
                    OK : function() {
                        $( this ).dialog( "close" );
                    }
                    */
                }
            }
        );
    $( "#welcome-message" ).fadeIn();

    console.groupEnd();
};


/*** FUNCTION viewHideWelcomeMessage()
***/

viewHideWelcomeMessage = function() {
    console.group( "FUNCTION viewHideWelcomeMessage()" );

    // $( "#welcome-message" ).fadeOut();
    $( "#welcome-message" ).dialog( "close" );

    console.groupEnd();
};


/*** FUNCTION viewShowCharacterProfile()
***/

viewShowCharacterProfile = function() {
    console.group( "FUNCTION viewShowCharacterProfile()" );

    // force a change in body css
    $( "body" )
        .css(
            {
                "font-family" : "'Times New Roman', Times, serif" ,
                "font-size" : "18px" ,
                "color" : "white" ,
                "background" : "url(assets\/images\/bg3.jpg) no-repeat" ,
                "background-size" : "cover" ,
                "height" : "100vh" ,
                "line-height" : "50px" ,
                "margin" : "50px"
            }
        );

    $( "element" )
        .css(
            {
                "width" : "100%" ,
                "height" : "auto" ,
                "max-height" : "400px" ,
                "max-width" : "200px" ,
                "float" : "left"
            }
        );

    /*
    app.characterTraitsAS[ "ELEVEN" ].forEach(
        ( characterTrait , characterTraitIndex ) => {
            $( "<p>" )
                .text( characterTrait )
                .appendTo( "#eleven-profile-text" );
        }
    );
    app.characterTraitsAS[ "MIKE_WHEELER" ].forEach(
        ( characterTrait , characterTraitIndex ) => {
            $( "<p>" )
                .text( characterTrait )
                .appendTo( "#mike-profile-text" );
        }
    );
    */
    $( "<p>" )
        .text( app.characterTraitsAS[ "ELEVEN" ][0] )
        .appendTo( "#eleven-profile-text" );
    $( "<p>" )
        .text( app.characterTraitsAS[ "MIKE_WHEELER" ][0] )
        .appendTo( "#mike-profile-text" );


    $( "#game" ).show();
    $( "#accordion" ).accordion();
    $( "#accordion" ).fadeIn();

    console.groupEnd();
};


/*** FUNCTION viewHideCharacterProfile()
***/

viewHideCharacterProfile = function() {
    console.group( "FUNCTION viewHideCharacterProfile()" );

    $( "#game" ).fadeOut();

    console.groupEnd();
};


/*** FUNCTION viewShowTrivia()
***/

viewShowTrivia = function() {
    console.group( "FUNCTION viewShowTrivia()" );

    $( "#trivia-media" ).attr( "src" , app.storyGiphyImageAS[ app.currentStoryNode.mediaSrc ].url );
    $( "#triviaText" ).text( app.currentStoryNode.text );
    $( "#dialog" )
        .dialog(
            {
                autoOpen : false ,
                width : 400 ,
                buttons : [
                    {
                        id : "answer-0" ,
                        text : app.currentStoryNode.answers[ 0 ] ,
                        click : function() {
                            // $( this ).dialog( "close" );
                        }
                    } ,
                    {
                        id : "answer-1" ,
                        text : app.currentStoryNode.answers[ 1 ] ,
                        click : function() {
                            // $( this ).dialog( "close" );
                        }
                    } ,
                    {
                        id : "answer-2" ,
                        text : app.currentStoryNode.answers[ 2 ] ,
                        click : function() {
                            // $( this ).dialog( "close" );
                        }
                    }
                ]
            }
        );
    $( "#dialog" ).dialog( "open" );
    // $( "#ui-id-6" ).attr( "title" , ( "Question #" + ( app.currentStoryNodeIndex + 1 ).toString() ) );
    $( "#ui-id-6" ).text( "Question #" + ( app.currentStoryNodeIndex + 1 ).toString() );
    $( "#answer-0" ).on( "click" , handleEvent );
    $( "#answer-1" ).on( "click" , handleEvent );
    $( "#answer-2" ).on( "click" , handleEvent );
    $( "#trivia" ).fadeIn();

    console.groupEnd();
};


/*** FUNCTION viewHideTrivia()
***/

viewHideTrivia = function() {
    console.group( "FUNCTION viewHideTrivia()" );

    $( "#trivia" ).fadeOut();

    console.groupEnd();
};


/*** FUNCTION viewShowYoutubeVideo()
***/

viewShowYoutubeVideo = function( youtubeVideoId ) {
    console.group( "FUNCTION viewShowYoutubeVideo()" );
    console.logValue( "youtubeVideoId" , youtubeVideoId );

    var youtubePlayerOptions = {
        height : '390' ,
        width : '640' ,
        videoId : youtubeVideoId ,
        playerVars : {
            autoplay : 1 ,
            controls : 0 ,
            disablekb : 1 ,
            end : 3 ,
            loop : 1
        }
    };
    var youtubePlayer = new YT.Player( 'youtube-player' , youtubePlayerOptions );

    console.logValue( "youtubePlayer" , youtubePlayer );
    console.groupEnd();
    return youtubePlayer;
};


/*** FUNCTION viewStopYoutubeVideo()
***/

viewStopYoutubeVideo = function( youtubePlayer ) {
    console.group( "FUNCTION viewStopYoutubeVideo()" );
    console.logValue( "youtubePlayer" , youtubePlayer );

    youtubePlayer.destroy();

    console.logValue( "youtubePlayer" , youtubePlayer );
    console.groupEnd();
    return youtubePlayer;
};


/*** FUNCTION viewUpdateUI()
***/

viewUpdateUI = function() {
    console.group( "FUNCTION viewUpdateUI()" );

    // updateUIMessage();
    // updateUITimer();
    // updateUITrivia();
    // updateUIScore();

    console.groupEnd();
};
