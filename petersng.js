function spewRandomFacts() {
    var facts = [
        'has been to 5 of the 7 continents.',
        'plays guitar.',
        'learned piano at age 5, quit at age 10.',
        'grew up on Long Island.',
        'loves to sing and go to karaoke.',
        'plays ukulele.',
        'interested in disruption.',
        'relies on natural intuition.',
        'entrepreneurial in spirit.',
        'likes to go globe-trotting.',
        'writes a lot of code.',
        'needs to ride his bike more.',
        'makes a mean cup of coffee.',
        'likes to leave town once in a while.',
        'hates being stuck at home.',
        'likes to be in constant motion.',
        'grew up in a Cantonese/Mandarin speaking household.',
        'wants to travel to South America next.',
        'drinks "tea, earl grey, hot."',
        'is a NY Giants fan.',
        'is a NY Knicks fan.',
        'used to watch the Mets.',
        'can be utter focused on small details.'
    ];
    var code = '';
    var num = 2;
    for (var i=0; i < num; i++) {
        randomIndex = Math.floor(Math.random() * facts.length);
        fact = facts[randomIndex];
        code += '<div class=\'line\'>';
        code += fact;
        code += '</div>';
        facts.splice(randomIndex, 1);
    }
    var container=document.getElementById("randomfacts");
    container.innerHTML = container.innerHTML + code;
}

function twitterCallback2(obj) {
    var twitters = obj;
    var statusHTML = "";
    var username = "";
    for (var i=0; i < twitters.length; i++) {
        username = twitters[i].user.screen_name;
        statusHTML += '<span style="margin-bottom:10px">';
        statusHTML += '<a target="_frame" style="font-size:85%" href="http://twitter.com/';
        statusHTML += username + '/statuses/' + twitters[i].id_str + '">';
        statusHTML += '<span style="font-size:105%">&#8220;</span>';
        statusHTML += twitters[i].text+ '<span style="font-size:105%">&#8221;</span><br /></a></span>';
        if (i < (twitters.length - 1)) {
            statusHTML += ' & ';
        }
    }
    document.getElementById('twitter_update_list').innerHTML = statusHTML;
}
