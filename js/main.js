

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

// donation functionality
for (const button of buttons) {


    button.addEventListener('click', function () {

        const balanceNum = parseInt(myBalance.innerText);
        const inputField = button.previousElementSibling;
        const inputValue = parseInt(inputField.value);

        if (inputField.value === '') {
            alert('please Enter the donate amount');
            inputField.value = '';
            return;
        } else if (inputValue <= 0) {
            alert("Please Enter the positive value");
            inputField.value = '';
            return;
        } else if (inputValue > balanceNum) {
            alert('you have not enough money');
            inputField.value = '';
            return;
        } else {
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
        `;

            // modal
            const modal = document.getElementById('my_modal_4');
            modal.showModal();


        }

    })

}


// header sticky

const header = document.getElementById('header-main');
const scrollAmount = 100;

window.onscroll = function () {
    if (window.scrollY > scrollAmount) {
        header.classList.add('fixed', 'top-0', 'left-0', 'w-full', 'z-10');
        header.classList.add('bg-bgPrimary', 'pb-10');
    } else {
        header.classList.remove('fixed', 'top-0', 'left-0', 'w-full', 'z-10');
        header.classList.remove('bg-bgPrimary', 'pb-10');
    }
}