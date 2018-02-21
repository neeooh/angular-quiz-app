(function(){
    angular
        .module("turtleFacts")
        .controller("listCtrl", ListController);
    
    ListController.$inject = ['quizMetrics', 'DataService'];
    
    function ListController(quizMetrics, DataService){
        var vm = this; //vm stands for viewmodel
        
        vm.quizMetrics = quizMetrics;
        vm.DataService = DataService;
        vm.data = DataService.turtlesData; // using keyword this. we are binding data to the ListController
        vm.activeTurtle = {};
        vm.changeActiveTurtle = changeActiveTurtle;
        vm.activateQuiz = activateQuiz;
        vm.search = "";
        
        function changeActiveTurtle(index){
            vm.activeTurtle = index;
        }
        
        function activateQuiz(){
            //            vm.quizMetrics.changeState(true); //
            quizMetrics.changeState("quiz", true); //here we still have access to the quizMetrics object that was passed in as a parameter so we don't have to bind it to the vm property which is used to display data in the view
        }
    }
    
})();