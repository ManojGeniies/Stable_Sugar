var assessmentObj = {

    init: function() {
        this.initAssessment();
    },
    initAssessment: function() {
        wronganswer = 0;
        correctanswer = 0;
        //question index starting from 0.
        correctQuestionAnswerQuestion = ["2", "1", "2", "3", "2", "2", "1"];
        clickedQuestionValArray = [];
        questionUserReViewType = false;
        //review redirection array
        questionReviewPage = ["M1L0T1P70,M1L0T1P81", "M1L0T1P35,M1L0T1P35_1", "M1L0T1P16_4,M1L0T1P17", "M1L0T1P32", "M1L0T1P42,M1L0T1P43", "M1L0T1P47", "M1L0T1P74"];
        //question page XML ID array
        questionPageIdValue = ["M1L0T1P83", "M1L0T1P84", "M1L0T1P85", "M1L0T1P86", "M1L0T1P87", "M1L0T1P88", "M1L0T1P89"];

        questionReviewVal = [
            '<strong>Instruction: Select the Review Screen buttons</strong>',
            '<strong>Instruction: Select the Review Screen buttons</strong>',
            '<strong>Instruction: Select Review Screen button 1 and select the tab "Bilious Emesis"</strong>',
            '<strong>Instruction: Select the Review Screen button</strong>',
            '<strong>Instruction: Select the Review Screen buttons</strong>',
            '<strong>Instruction: Select the Review Screen button</strong>',
            '<strong>Instruction: Select Review Screen button and complete the "Medications" tab activity to see the feedback</strong>'
        ];
        prevPageRedirect = '';
    },
    wrongAnswerIncrement: function() {
        wronganswer++;
    },
    getWrongAnsVal: function() {
        return wronganswer;
    },
    correctAnswerIncrement: function() {
        correctanswer++;
    },
    getCorrectAnsVal: function() {
        return correctanswer;
    },
    clickedQuestionValue: function(aCurVal) {
        clickedQuestionValArray.push(aCurVal);
    },
    getSelectedQuestionArrayValue: function() {
        return clickedQuestionValArray;
    },
    checkedAnswerFunc: function(aIndex, aTarget) {
        console.log(questionUserReViewType, aIndex, clickedQuestionValArray[aIndex], correctQuestionAnswerQuestion[aIndex]);
        if (questionUserReViewType == true) {
            this.reviewTypeStatus();
            _getCurIndex = aIndex;
            _quesFlag = "";
            $(".listcnt[curid='" + clickedQuestionValArray[_getCurIndex] + "']").addClass("clicked")

            if (correctQuestionAnswerQuestion[_getCurIndex] == clickedQuestionValArray[_getCurIndex]) {
                _quesFlag = true;
                $(".mainContainer").append("<div class='reviewScreenTextCnt' id='review_" + _getCurIndex + "'></div>");
                $(".reviewScreenTextCnt").html("")
                $(".reviewScreenTextCnt").html("You have answered this question correctly.")
            } else {
                _quesFlag = false;
                $(".mainContainer").append("<div class='reviewScreenTextCnt' id='review_" + _getCurIndex + "'></div>");
                $(".reviewScreenTextCnt").html("")
                    // $(".reviewScreenTextCnt").html("You have answered this question incorrectly.")
                $(".reviewScreenTextCnt").html("You have answered this question incorrectly.<br/><i>" + questionReviewVal[_getCurIndex] + "</i>");
                this.reviewQuestionScreen(_getCurIndex);
            }
            return _quesFlag;
        }
    },
    addWrongAndCorrectIcon: function(aFlag, aTarget) {
        if (aFlag == false) {
            $(aTarget).addClass("wrongAnswer");
        } else {
            $(aTarget).addClass("correctAnswer");
        }
    },
    userReviewType: function() {
        questionUserReViewType = true;
    },
    getUserReviewType: function() {
        return questionUserReViewType;
    },
    reviewTypeStatus: function() {
        $(".bottomTxt").hide();
        $(".listcnt").css('pointer-events', 'none');
    },
    reviewQuestionScreen: function(aIndex) {
        var _newScreenArray = questionReviewPage[aIndex].split(',');
        $(".mainContainer").append("<div class='reviewScreenCnt'></div>");
        var count = 0;
        var _cntTxt = "";
        var _getCountLength = _newScreenArray.length;
        for (var ii = 0; ii < _newScreenArray.length; ii++) {
            count++;
            if (_getCountLength == 1) {
                _cntTxt = "Review Screen";
            } else {
                if (count == 1) {
                    _cntTxt = "Review Screen " + count;
                } else {
                    _cntTxt = count;
                }
            }

            $(".reviewScreenCnt").append("<div class='reviewScreenCount' quesId=" + questionPageIdValue[aIndex] + " rid=" + _newScreenArray[ii] + ">" + _cntTxt + "</div>").find(".reviewScreenCount");
        }
        this.reviewClickPage();
    },
    getSelectedOptionId: function(aIndex) {
        return clickedQuestionValArray[aIndex];
    },
    retryQuiz: function() {
        wronganswer = 0;
        correctanswer = 0;
        clickedQuestionValArray = [];
        questionUserReViewType = false;
        this.resetBookMarkPage();
        $(".listcnt").css('pointer-events', 'auto');
    },
    clearPageId: function() { this.removeMultipleValueFromArray(gCompPageArr, questionPageIdValue); },
    removeMultipleValueFromArray: function(first, second) { for (var i = 0; i < second.length; i++) { var index = undefined; while ((index = first.indexOf(second[i])) !== -1) { first.splice(index, 1); } } return first; },
    reviewClickPage: function() {
        $(".reviewScreenCount").click(function() {
            prevPageRedirect = $(this).attr("quesId");
            fnJumpToPageByID($(this).attr("rid"));
            $("#clsMnuBtn, #clsBackBtn").css('pointer-events', 'none');
            $("#clsPageNumber").hide();
        });
    },
    pointerEventsNone: function(aTarget) {
        $(aTarget).css({
            "pointer-events": "none"
        });
    },
    pointerEventsAuto: function(aTarget) {
        $(aTarget).css({
            "pointer-events": "auto"
        });
    },
    setBookmarkPage: function(aPrePage) {
        prevPageRedirect = aPrePage;
    },
    getBookmarkPage: function() {
        return prevPageRedirect;
    },
    resetBookMarkPage: function() {
        prevPageRedirect = '';
    },
    getCurrentPageIdFromArray: function(aIndex) {
        return questionPageIdXML[aIndex];
    }

}