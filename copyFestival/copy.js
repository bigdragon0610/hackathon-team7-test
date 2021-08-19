'use strict';
 
const img = [
    "https://www.jtb.co.jp/nihonnoshun/tohoku/images/index/mv_aomori.jpg",
    "https://www.jtb.co.jp/nihonnoshun/tohoku/images/index/mv_iwate.jpg",
    "https://www.jtb.co.jp/nihonnoshun/tohoku/images/index/mv_akita.jpg",
    "https://www.jtb.co.jp/nihonnoshun/tohoku/images/index/mv_miyagi.jpg",
    "https://www.jtb.co.jp/nihonnoshun/tohoku/images/index/mv_yamagata.jpg",
    "https://www.jtb.co.jp/nihonnoshun/tohoku/images/index/mv_fukushima.jpg",
    ];
 
let count = -1;
 
picChange();
 
function picChange() {
    
    count++;
    if (count == img.length) count = 0;
    document.getElementById('photoChange').src = img[count];

    setTimeout("picChange()", 2000);
}