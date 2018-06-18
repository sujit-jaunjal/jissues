!function(e){var t={};function s(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=t,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s(s.s=10)}({10:function(e,t,s){e.exports=s(11)},11:function(e,t){!function(e,t){"use strict";e.JTracker={preview:function(e,s){var r=t(s);r.html(g11n3t("Loading preview...")),t.post("/preview",{text:t(e).val()},function(e){r.empty(),e.error?r.html(e.error):e.data.length?r.html(e.data):r.html(g11n3t("Invalid response."))})},submitComment:function(e,s,r,a,n){var l=t(r),i=t(s),o=t(n).val();i.html(g11n3t("Submitting comment...")),t.post("/submit/comment",{text:t("#comment").val(),issue_number:e,sha:o},function(e){if(e.data)if(e.error)i.html(e.error);else{i.html(e.message),l.html(l.html()+tmpl(a,e.data)),t("#comment").val(""),t("tbody.files").empty(),t("input[name=comment-tested]").filter(":checked").val()>0&&JTracker.submitTestWithComment(l,"tplNewTestResult")}else i.html(g11n3t("Invalid response."))})},submitVote:function(e,s){var r=t(s),a=t("input[name=importanceRadios]").filter(":checked").val(),n=t("input[name=experiencedRadios]").filter(":checked").val();r.addClass("disabled").removeAttr("href").removeAttr("onclick").html(g11n3t("Adding vote...")),t.post("/submit/vote",{issueId:e,experienced:n,importance:a},function(e){e.error?r.addClass("btn-danger").removeClass("btn-success").html(e.error):(r.html(e.message),e.data.votes>0&&(t("div[id=experienced]").html(e.data.experienced+"/"+e.data.votes),t("div[id=importance]").html(e.data.importanceScore.toFixed(2)),t("div#issue-votes").show()))})},submitTest:function(e,s,r,a,n,l){var i=t(s),o=t(r),u=t("input[name=tested]").filter(":checked").val(),c=t(a).val(),m=t(n).val();i.html(g11n3t("Submitting test result...")),t.post("/submit/testresult",{issueId:e,result:u,comment:c,sha:m},function(e){if(e.error)i.addClass("btn-danger").removeClass("btn-success").html(e.error);else{i.addClass("text-success").html(e.message);var s=t.parseJSON(e.data);JTracker.updateTests(s.testResults.testsSuccess,s.testResults.testsFailure),o.html(o.html()+tmpl(l,s.event)),t("#current-test-result").val(u),t(".comment-test-result").prop("checked",!1),t("#comment-test-result-"+u).prop("checked",!0),t("#testContainer").delay(1e3).slideUp()}})},submitTestWithComment:function(e,s){var r=t("#issue-id").val(),a=t("input[name=comment-tested]").filter(":checked").val(),n=t("#current-test-result").val();a&&n!=a&&t.post("/submit/testresult",{issueId:r,result:a},function(r){if(r.error)e.html(r.error);else{t(".test-result").prop("checked",!1),t("#test-result-"+a).prop("checked",!0),t(".comment-test-result").prop("checked",!1),t("#comment-test-result-"+a).prop("checked",!0),t("#current-test-result").val(a);var n=t.parseJSON(r.data);JTracker.updateTests(n.testResults.testsSuccess,n.testResults.testsFailure),e.html(e.html()+tmpl(s,n.event)),t("#testContainer").delay(1e3).slideUp()}})},alterTest:function(e,s,r,a,n){var l=t(s),i=t(r),o=t(a).val(),u=t("select[name=altered]").val(),c=t("input[name=altered-user]").val();""!=c?(l.html(g11n3t("Submitting test result...")),t.post("/alter/testresult",{issueId:e,user:c,result:u,sha:o},function(e){if(e.error)l.addClass("btn-danger").removeClass("btn-success").html(e.error);else{l.addClass("text-success").html(e.message);var s=t.parseJSON(e.data);JTracker.updateTests(s.testResults.testsSuccess,s.testResults.testsFailure),i.html(i.html()+tmpl(n,s.event))}})):l.html(g11n3t("Please select a user"))},updateTests:function(e,s){t("#usertests-success-num").text(e.length),t("#usertests-success").text(e.join(", ")),t("#usertests-fail-num").text(s.length),t("#usertests-fail").text(s.join(", "))},getContrastColor:function(e){return(299*parseInt(e.substr(0,2),16)+587*parseInt(e.substr(2,2),16)+114*parseInt(e.substr(4,2),16))/1e3>=128?"black":"white"},setupAtJS:function(e,s){var r={at:":",data:t.map(["smile","iphone","girl","smiley","heart","kiss","copyright","coffee","a","ab","airplane","alien","ambulance","angel","anger","angry","arrow_forward","arrow_left","arrow_lower_left","arrow_lower_right","arrow_right","arrow_up","arrow_upper_left","arrow_upper_right","art","astonished","atm","b","baby","baby_chick","baby_symbol","balloon","bamboo","bank","barber","baseball","basketball","bath","bear","beer","beers","beginner","bell","bento","bike","bikini","bird","birthday","blue_car","blue_heart","blush","boar","boat","bomb","book","boot","bouquet","bow","bowtie","boy","bread","briefcase","broken_heart","bug","bulb","person_with_blond_hair","phone","pig","pill","pisces","point_down","point_left","point_right","point_up","point_up_2","police_car","poop","post_office","postbox","pray","princess","punch","purple_heart","question","rabbit","racehorse","radio","up","us","v","vhs","vibration_mode","virgo","vs","walking","warning","watermelon","wave","wc","wedding","whale","wheelchair","wind_chime","wink","wolf","woman","womans_hat","womens","x","yellow_heart","zap","zzz","+1","-1","tongue"],function(e,t){return{key:e,name:e}}),displayTpl:"<li data-value=':${key}:'><img src='https://assets-cdn.github.com/images/icons/emoji/${key}.png' height='20' width='20' /> ${name}</li>",insertTpl:":${name}:"},a={at:"@",searchKey:"username",callbacks:{remoteFilter:function(e,s){t.getJSON("/fetch/users",{q:e},function(e){s(e.data)})}},displayTpl:"<li data-value='@${username}'><img src='/images/avatars/${username}.png' height='20' width='20'> ${username} <small>${name}</small></li>",insertTpl:"@${username}"},n={at:"#",searchKey:"issue_number",callbacks:{remoteFilter:function(e,s){t.getJSON("/fetch/issues",{q:e},function(e){s(e.data)})}},displayTpl:"<li data-value='#${issue_number}'>${issue_number} <small>${title}</small></li>",insertTpl:"#${issue_number}"};t("#"+e).atwho(r).atwho(a).atwho(n)}}}(window,jQuery)}});