/**
 * Created by retman on 17.12.16.
 */
angular.module("MultiAnswers", [])
    .controller("MultiAnswerController", function ($scope) {
        this.parsingData = {};
        this.newMember = "";
        this.parsingData[0] = "AAAAA";
        this.parsingData[1] = "BBBB";
        this.parsingData[2] = "CCCC";
        this.nextIndex = 3;
        this.error = "";

        this.addMember = function () {

            if (this.parsingData.indexOf(this.newMember) !== -1) {
                this.error = "You've already added it!"
            } else {
                this.error = "";
                this.parsingData[this.nextIndex] = this.newMember;
                this.nextIndex++;
            }
        }

        this.removeFromDataList = function(value){
           var index = this.parsingData.indexOf(value);
           this.parsingData[index] = "";
           this.parsingData.splice(0,0);
        }

    });