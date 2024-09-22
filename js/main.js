

// donate and history button toggle case
const donateBtn = document.getElementById('donate_btn');
const donateHistory = document.getElementById('donate_history_btn');

donateBtn.addEventListener('click', function (){

    donateHistoryBtn('donation_container');
    donateHistory.classList.remove('active_btn_donate_history');
    donateBtn.classList.remove('inactive_btn_donate_history');
    donateBtn.classList.add('active_btn_donate_history');
    
   

})
donateHistory.addEventListener('click', function (){

    donateHistoryBtn('donation_history_container');
   
    donateBtn.classList.remove('active_btn_donate_history');
    donateHistory.classList.remove('inactive_btn_donate_history');
    donateHistory.classList.add('active_btn_donate_history');
     

})

 