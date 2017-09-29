(function() {
  var am_id = getSearch()['am_id'] || '';
  var approach = getSearch()['approach'] || '';
  var approach2 = getSearch()['approach2'] || '';
  var approach3 = getSearch()['approach3'] || '';

  var vm = new Vue({
    el: '#app',
    data: {
    },
    methods: {
      goToLandPage:function(type){
        if(type == 0){
          _czc.push(["_trackEvent", "母婴专享", "点击", "我要有钱花"]);
        }else if(type == 1){
          _czc.push(["_trackEvent", "母婴专享", "点击", "查看赚钱经"]);
        }else if(type == 2){
          _czc.push(["_trackEvent", "运动专享", "点击", "我要有钱花"]);
        }else if(type == 3){
          _czc.push(["_trackEvent", "运动专享", "点击", "查看赚钱经"]);
        };
        
        window.location.href = 'https://m.nonobank.com/nono/channel-land-page/index.html'+'?am_id='+am_id+'&approach='+approach+'&approach2='+approach2+'&approach3='+approach3;
      }
    }
  });

  function getSearch() {
    if (window.location.search == '') {
      return false;
    }
    var query_string = {},
      query = window.location.search.substring(1),
      vars = query.split("&");

    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split("=");
      // If first entry with this name
      if (typeof query_string[pair[0]] === "undefined") {
        query_string[pair[0]] = decodeURIComponent(pair[1]);
        // If second entry with this name
      } else if (typeof query_string[pair[0]] === "string") {
        var arr = [query_string[pair[0]], decodeURIComponent(pair[1])];
        query_string[pair[0]] = arr;
        // If third or later entry with this name
      } else {
        query_string[pair[0]].push(decodeURIComponent(pair[1]));
      }
    }
    return query_string;
  }

})();
