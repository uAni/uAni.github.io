/**
 * Created with IntelliJ IDEA.
 * User: wiernicd
 * Date: 30.07.13
 * Time: 21:35
 * To change this template use File | Settings | File Templates.
 */

$(function(){
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "#sunday";
    weekday[1] = "#monday";
    weekday[2] = "#tuesday";
    weekday[3] = "#wednesday";
    weekday[4] = "#thursday";
    weekday[5] = "#friday";
    weekday[6] = "#saturday";

    var n = weekday[d.getDay()];
    console.log(n);
    $(n).attr("class", "today");

});
