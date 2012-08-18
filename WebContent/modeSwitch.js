function switchRoutingMode(mode) {
    var els = document.getElementById("routing-mode-switch-box").getElementsByTagName("span");
    for (var i=0,j=els.length; i<j; i++) {
        if (els[i].innerHTML == mode) {
            els[i].className = "routing-mode-switcher routing-mode-enabled";
        } else {
            els[i].className = "routing-mode-switcher";
        }
    }
    var newprofile = OSRM.DEFAULTS.PROFILES[mode];
    OSRM.DEFAULTS.HOST_ROUTING_URL = newprofile.HOST_ROUTING_URL;
    OSRM.DEFAULTS.HOST_TIMESTAMP_URL = newprofile.HOST_TIMESTAMP_URL;
}
