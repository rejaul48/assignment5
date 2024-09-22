

function donateHistoryBtn(id){

    document.getElementById('donation_container').classList.add('hidden');
    document.getElementById('donation_history_container').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');

}