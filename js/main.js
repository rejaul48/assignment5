

// donate and history button toggle case
const donateBtn = document.getElementById('donate_btn');
const donateHistory = document.getElementById('donate_history_btn');
// mybalance
const myBalance = document.getElementById('myBalance');



donateBtn.addEventListener('click', function () {

    donateHistoryBtn('donation_container');

    donateHistory.classList.remove('active_btn_donate_history');
    donateBtn.classList.remove('inactive_btn_donate_history');
    donateBtn.classList.add('active_btn_donate_history');



})
donateHistory.addEventListener('click', function () {

    donateHistoryBtn('donation_history_container');

    donateBtn.classList.remove('active_btn_donate_history');
    donateHistory.classList.remove('inactive_btn_donate_history');
    donateHistory.classList.add('active_btn_donate_history');


})


const buttons = document.querySelectorAll('.donateConfermBtn');
const donateInputs = document.querySelectorAll('.donateInput');
// history container
const historyContainer = document.getElementById('history_container');
// modal
const modal = document.getElementById('my_modal_4');
// console.log(buttons);
for (const button of buttons) {


    button.addEventListener('click', function (event) {

        const balanceNum = parseInt(myBalance.innerText);
        const inputField = button.previousElementSibling;
        const inputValue = parseInt(inputField.value);

        if (inputValue < 0) {
            alert("Opps! you entered negative value");
            return;
        }
        else if (inputValue > balanceNum) {
            alert('you have not enough money');
            return;
        }

        let newBalance = balanceNum - inputValue;
        myBalance.innerText = newBalance;

        inputField.value = '';


        // get donate for text
        const nearCard = button.closest('.donate_card');
        const donateFor = nearCard.querySelector('.donateFor');
        const donateForText = donateFor.innerText;
       
        // get donate Status 
        const donateStatus = nearCard.querySelector('.donateStatus');
        const donateStatusValue = parseInt(donateStatus.innerText);
        
        donateStatus.innerText = donateStatusValue + inputValue;


        
        
        historyContainer.innerHTML += `
         <div class="donate_history_card border-2 border-gray-200 mx-4 lg:mx-32 p-4 rounded-lg mt-4
                
            ">
                    <h2 class="text-md md:text-xl font-semibold text-textPrimary"><span>${inputValue}</span> Taka is ${donateForText}</h2>
                    <p class="text-[16px] font-[300] text-textSecondary mt-2">Date : <span>${Date()}</span></p>
                </div>
        `

    
    })

}
