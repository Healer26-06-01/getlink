/***************************************************************************/
/*                                                                         */
/*  This obfuscated code was created by Javascript Obfuscator Free Version.*/
/*  Javascript Obfuscator Free Version can be downloaded here              */
/*  http://javascriptobfuscator.com                                        */
/*                                                                         */
/***************************************************************************/
var _$_5635 = ["", "getLinkButton", "getElementById", "click", "value", "videoInput", "L\u1ed7i khi t\u1ea3i trang web:", "error", "catch", "match", "/", "split", "https://c1.cdnjav.com/content-01/contents/", "/videos/", "_sh.mp4", "log", "Kh\xF4ng t\xECm th\u1ea5y URL trong m\xE3 ngu\u1ed3n.", "Kh\xF4ng th\u1ec3 l\u01b0u tr\u1eef li\xEAn k\u1ebft tr\xEAn c\u01a1 s\u1edf d\u1eef li\u1ec7u.", "success", "Li\xEAn k\u1ebft \u0111\xE3 \u0111\u01b0\u1ee3c l\u01b0u tr\u1eef th\xE0nh c\xF4ng.", "L\u1ed7i: ", "then", "json", "save-link.php", "POST", "application/x-www-form-urlencoded", "videoInput=", "text", "addEventListener", "videoPlayer", "video", "querySelector", "src", "display", "style", "block", "Kh\xF4ng t\xECm th\u1ea5y ph\u1ea7n t\u1eed video trong videoPlayer.", "Kh\xF4ng t\xECm th\u1ea5y ph\u1ea7n t\u1eed videoPlayer.", "L\u1ed7i khi l\u1ea5y d\u1eef li\u1ec7u t\u1eeb c\u01a1 s\u1edf d\u1eef li\u1ec7u:", "linkList", "innerHTML", "li", "createElement", "a", "href", "javascript:void(0)", "toLocaleString", "created_at", "textContent", " - ", "link", "\" type=\"video/mp4\"></video>", "appendChild", "forEach", "slice", "get-links.php"];
var urlJav = _$_5635[0];
var getURLButton = document[_$_5635[2]](_$_5635[1]);
getURLButton[_$_5635[28]](_$_5635[3], function() {
    var _0x1D2FD = document[_$_5635[2]](_$_5635[5])[_$_5635[4]];
    fetch(_0x1D2FD)[_$_5635[21]]((_0x1D34A)=>{
        return _0x1D34A[_$_5635[27]]()
    }
    )[_$_5635[21]]((_0x1D397)=>{
        var _0x1D431 = /"thumbnail":"(https:\/\/[^"]+)"/;
        var _0x1D3E4 = _0x1D397[_$_5635[9]](_0x1D431);
        var _0x1D47E = [];
        if (_0x1D3E4) {
            _0x1D47E = _0x1D3E4[1][_$_5635[11]](_$_5635[10]);
            urlJav = _$_5635[12] + _0x1D47E[5] + _$_5635[13] + _0x1D47E[5] + _$_5635[14];
            console[_$_5635[15]](urlJav);
            document[_$_5635[2]](_$_5635[5])[_$_5635[4]] = _$_5635[0];
            getVideo();
            displayLinksFromDatabase()
        } else {
            console[_$_5635[15]](_$_5635[16])
        }
        ;fetch(_$_5635[23], {
            method: _$_5635[24],
            headers: {
                'Content-Type': _$_5635[25]
            },
            body: _$_5635[26] + encodeURIComponent(urlJav)
        })[_$_5635[21]]((_0x1D34A)=>{
            return _0x1D34A[_$_5635[22]]()
        }
        )[_$_5635[21]]((_0x1D397)=>{
            if (_0x1D397[_$_5635[18]]) {
                console[_$_5635[15]](_$_5635[19]);
                displayLinksFromDatabase()
            } else {
                console[_$_5635[7]](_$_5635[20] + _0x1D397[_$_5635[7]])
            }
        }
        )[_$_5635[8]]((_0x1D4CB)=>{
            console[_$_5635[7]](_$_5635[17])
        }
        )
    }
    )[_$_5635[8]]((_0x1D4CB)=>{
        console[_$_5635[7]](_$_5635[6], _0x1D4CB)
    }
    )
});
function getVideo() {
    var _0x1D699 = urlJav;
    var _0x1D733 = document[_$_5635[2]](_$_5635[29]);
    if (_0x1D733) {
        var _0x1D6E6 = _0x1D733[_$_5635[31]](_$_5635[30]);
        if (_0x1D6E6) {
            _0x1D6E6[_$_5635[32]] = _0x1D699;
            _0x1D733[_$_5635[34]][_$_5635[33]] = _$_5635[35]
        } else {
            console[_$_5635[7]](_$_5635[36])
        }
    } else {
        console[_$_5635[7]](_$_5635[37])
    }
}
function displayLinksFromDatabase() {
    fetch(_$_5635[55])[_$_5635[21]]((_0x1D34A)=>{
        return _0x1D34A[_$_5635[22]]()
    }
    )[_$_5635[21]]((_0x1D397)=>{
        var _0x1D518 = document[_$_5635[2]](_$_5635[39]);
        _0x1D518[_$_5635[40]] = _$_5635[0];
        _0x1D397[_$_5635[54]](0, 10)[_$_5635[53]](function(_0x1D5B2) {
            var _0x1D5FF = document[_$_5635[42]](_$_5635[41]);
            var _0x1D565 = document[_$_5635[42]](_$_5635[43]);
            _0x1D565[_$_5635[44]] = _$_5635[45];
            var _0x1D64C = new Date(_0x1D5B2[_$_5635[47]])[_$_5635[46]]();
            _0x1D565[_$_5635[48]] = _0x1D64C + _$_5635[49] + _0x1D5B2[_$_5635[50]];
            _0x1D565[_$_5635[28]](_$_5635[3], function() {
                document[_$_5635[2]](_$_5635[29])[_$_5635[40]] = ("<video width=\"560\" height=\"315\" controls><source src=\"" + _0x1D5B2[_$_5635[50]] + _$_5635[51])
            });
            _0x1D5FF[_$_5635[52]](_0x1D565);
            _0x1D518[_$_5635[52]](_0x1D5FF)
        })
    }
    )[_$_5635[8]]((_0x1D4CB)=>{
        console[_$_5635[7]](_$_5635[38], _0x1D4CB)
    }
    )
}
displayLinksFromDatabase()
