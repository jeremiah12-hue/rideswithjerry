function formatExpirationDate(input) {
    // Remove any non-digit characters
    let value = input.value.replace(/\D/g, '');
    
    // If the value is longer than 4, truncate it to 4
    if (value.length > 4) {
        value = value.slice(0, 4);
    }
    
    // Add '/' after the first two digits
    if (value.length >= 3) {
        value = value.slice(0, 2) + '/' + value.slice(2);
    }
    
    // Update the input value
    input.value = value;
}

const expirationInputs = document.getElementsByClassName('expiration-date');
const errorContainers = document.getElementsByClassName('expire-error-message');

// Function to validate expiration date
function validateExpirationDate(input, container) {
    const expirationValue = input.value;

    // Check if the input length is 5 (MM/YY format)
    if (expirationValue.length === 5) {
        // Get the current date
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth() + 1; // Months are 0-based
        const currentYear = currentDate.getFullYear() % 100; // Get last two digits of the year

        // Parse the expiration date
        const [inputMonth, inputYear] = expirationValue.split('/').map(Number);

        // Check if the input date is valid
        if (inputYear < currentYear || (inputYear === currentYear && inputMonth < currentMonth)) {
            container.style.display = 'flex'; // Show error message
        } else {
            container.style.display = 'none'; // Hide error message
        }
    } else {
        container.style.display = 'none'; // Hide error message if input is not complete
    }
}

// Attach event listeners if elements exist
if (expirationInputs.length > 0 && errorContainers.length > 0) {
    for (let i = 0; i < expirationInputs.length; i++) {
        const expirationInput = expirationInputs[i];
        const errorContainer = errorContainers[i];

        expirationInput.addEventListener('input', function() {
            formatExpirationDate(this); // Format the input value
            validateExpirationDate(this, errorContainer);
        });
    }
}



document.addEventListener('DOMContentLoaded', function() {
    function formatCardNumber(value) {
        // Remove all non-digit characters
        value = value.replace(/\D/g, '');
        console.log('Formatted value (digits only):', value);
    
        // Add spaces after every 4 digits
        const formattedValue = value.replace(/(.{4})/g, '$1 ').trim();
        console.log('Formatted value (with spaces):', formattedValue);
        
        return formattedValue;
    }
    
    // Function to validate card number
    function validateCardNumber(cardNumber) {
        // Remove spaces and hyphens
        cardNumber = cardNumber.replace(/[\s-]/g, '');
        console.log('Card number for validation (no spaces/hyphens):', cardNumber);
    
        // Regular expression for card number validation
        const cardNumberPattern = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|6(?:011|5[0-9]{2})[0-9]{12}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35[0-9]{3})[0-9]{11})$/;
    
        // Check if the card number matches the pattern
        const isValidFormat = cardNumberPattern.test(cardNumber);
        console.log('Is card number valid format?', isValidFormat);
        
        if (!isValidFormat) {
            return false; // Invalid card number format
        }
    
        // Luhn algorithm check
        const isLuhnValid = luhnCheck(cardNumber);
        console.log('Is card number valid according to Luhn algorithm?', isLuhnValid);
        
        return isLuhnValid;
    }
    
    // Luhn algorithm implementation
    function luhnCheck(cardNumber) {
        let sum = 0;
        let alternate = false;
    
        // Loop through the card number from right to left
        for (let i = cardNumber.length - 1; i >= 0; i--) {
            let n = parseInt(cardNumber.charAt(i), 10);
            console.log(`Current digit (from right): ${n}, Alternate: ${alternate}`);
    
            if (alternate) {
                n *= 2;
                if (n > 9) {
                    n -= 9;
                }
            }
            sum += n;
            alternate = !alternate;
            console.log('Current sum:', sum);
        }
    
        const isValid = sum % 10 === 0; // Valid if sum is divisible by 10
        console.log('Final sum:', sum, 'Is valid:', isValid);
        return isValid;
    }
    
    // Event listener for card number input
    const cardNumberInputs = document.getElementsByClassName('card-number');
    const errorMessageDiv = document.querySelector('.mobile-card-error-message'); 
    const wide_errorMessageDiv = document.querySelector('.wide-card-error-message');
    
    for (let input of cardNumberInputs) {
        input.addEventListener('input', function() {
            // Format the input value
            this.value = formatCardNumber(this.value);
    
            // Validate the card number
            const cardNumber = this.value;
            
            if (validateCardNumber(cardNumber)) {
                errorMessageDiv.style.display = 'none';
                wide_errorMessageDiv.style.display = 'none';
            } else {
                errorMessageDiv.style.display = 'block';
                wide_errorMessageDiv.style.display = 'block';
            }
        });
    }
})


document.addEventListener('DOMContentLoaded', function() {
    let amountSelectContainers = document.getElementsByClassName('amount');
    let paymentContainers = document.getElementsByClassName('choose_payment_method');

    let wide_currency = document.getElementById('wide_currency');
    let mobile_currency = document.getElementById('mobile_currency');
    let mobile_selected_currency = document.getElementById('mobile_selected_currency');
    let wide_selected_currency = document.getElementById('wide_selected_currency');

    let mobile_funded_amount = document.getElementById('mobile_funded_amount');
    let wide_funded_amount = document.getElementById('wide_funded_amount');

    let mobile_transaction_fees = document.getElementById('mobile_transaction_fees');
    let wide_transaction_fees = document.getElementById('wide_transaction_fees');

    let mobile_total_amount = document.getElementById('mobile_total_amount');
    let wide_total_amount = document.getElementById('wide_total_amount');

    let withdrawAmount = document.getElementsByClassName('withdrawAmount');

    // Function to show the payment container
    function showPaymentContainer() {
        for (let paymentContainer of paymentContainers) {
            paymentContainer.style.display = 'flex';
        }

        mobile_selected_currency.innerHTML = mobile_currency.value;
        wide_selected_currency.innerHTML = wide_currency.value;
    }

    function calculateTotals() {
        // Clear previous values
        mobile_transaction_fees.innerHTML = '';
        wide_transaction_fees.innerHTML = '';
        mobile_total_amount.innerHTML = '';
        wide_total_amount.innerHTML = '';

        // Get funded amounts and parse them
        let mobile_funded = parseFloat(mobile_funded_amount.innerHTML.trim());
        let wide_funded = parseFloat(wide_funded_amount.innerHTML.trim());

        // Check if funded amounts are valid numbers
        if (isNaN(mobile_funded) || isNaN(wide_funded)) {
            console.error("Invalid funded amounts");
            return; // Exit if funded amounts are not valid
        }

        // Handle mobile currency
        if (mobile_currency.value === 'USD') {
            mobile_transaction_fees.innerHTML = '0.25';
            mobile_total_amount.innerHTML = (0.25 + mobile_funded).toFixed(2);
        } else if (mobile_currency.value === 'NGN') {
            mobile_transaction_fees.innerHTML = '0.98';
            mobile_total_amount.innerHTML = (0.98 + mobile_funded).toFixed(2);
        }

        // Handle wide currency
        if (wide_currency.value === 'USD') {
            wide_transaction_fees.innerHTML = '0.25';
            wide_total_amount.innerHTML = (0.25 + wide_funded).toFixed(2);
        } else if (wide_currency.value === 'NGN') {
            wide_transaction_fees.innerHTML = '0.98';
            wide_total_amount.innerHTML = (0.98 + wide_funded).toFixed(2);
        }
    }

    // Add event listeners for currency changes
    mobile_currency.addEventListener('change', calculateTotals);
    wide_currency.addEventListener('change', calculateTotals);

    // Add event listeners to each amount input container
    for (let i = 0; i < amountSelectContainers.length; i++) {
        amountSelectContainers[i].addEventListener('input', () => {
            // Only show payment containers if there is input
            if (amountSelectContainers[i].value.trim() !== '') {
                showPaymentContainer();
            }

            // Update the funded amounts
            mobile_funded_amount.innerHTML = amountSelectContainers[i].value;
            wide_funded_amount.innerHTML = amountSelectContainers[i].value;

            // Recalculate totals whenever the funded amount changes
            calculateTotals();
        });
    }

    for (let i = 0; i < withdrawAmount.length; i++) {
        withdrawAmount[i].addEventListener('input', () => {

            // Update the funded amounts
            mobile_funded_amount.innerHTML = withdrawAmount[i].value;
            wide_funded_amount.innerHTML = withdrawAmount[i].value;

            // Recalculate totals whenever the funded amount changes
            calculateTotals();
        });
    }

    // Add input event listeners to funded amount inputs
    mobile_funded_amount.addEventListener('input', calculateTotals);
    wide_funded_amount.addEventListener('input', calculateTotals);
});

document.addEventListener('DOMContentLoaded', function() {
    let cardSelectContainers = document.getElementsByClassName('card_select');
    let cardContainers = document.getElementsByClassName('add_card_container');
    let transaction_summary_container = document.getElementsByClassName('transaction_summary_container');

    // Function to toggle the display of the card container
    function toggleCardContainer(index) {
        if (cardContainers[index].style.display !== 'flex') {
            cardContainers[index].style.display = 'flex';
            transaction_summary_container[index].style.display = 'none';
        } else {
            cardContainers[index].style.display = 'none';
            transaction_summary_container[index].style.display = 'none';
        }
    }

    // Add event listeners to each card select container
    for (let i = 0; i < cardSelectContainers.length; i++) {
        cardSelectContainers[i].addEventListener('change', () => {
            toggleCardContainer(i);
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    let cardNameContainers = document.getElementsByClassName('cardholder_name');
    let transaction_summary_container = document.getElementsByClassName('transaction_summary_container');
    let expire_error_message = document.getElementsByClassName('expire-error-message');
    let card_error_message = document.getElementsByClassName('card-error-message');
    let card_number = document.getElementsByClassName('card-number');
    let expiration_date = document.getElementsByClassName('expiration-date');
    let cvv = document.getElementsByClassName('cvv');

    // Function to toggle the display of the card container
    function toggleSummaryContainer(index) {
        // Check if all conditions are met
        const iscardNameContainersValid = cardNameContainers[index].value.trim() !== '';
        const isCardNumberValid = card_number[index].value.trim() !== '';
        const isExpirationDateValid = expiration_date[index].value.trim() !== '';
        const isCvvValid = cvv[index].value.trim() !== '';
        const isExpireErrorVisible = expire_error_message[index].style.display === 'flex';
        const isCardErrorVisible = card_error_message[index].style.display === 'flex';

        // Show the summary container only if all conditions are met
        if (!isExpireErrorVisible && !isCardErrorVisible && isCardNumberValid && isExpirationDateValid && isCvvValid && iscardNameContainersValid) {
            transaction_summary_container[index].style.display = 'flex';
        } else {
            transaction_summary_container[index].style.display = 'none';
        }
    }

    // Add event listeners to each card select container
    for (let i = 0; i < cardNameContainers.length; i++) {
        cardNameContainers[i].addEventListener('input', () => {
            toggleSummaryContainer(i);
        });
    }

    for (let i = 0; i < card_number.length; i++) {
        card_number[i].addEventListener('input', () => {
            toggleSummaryContainer(i);
        });
    }

    for (let i = 0; i < cvv.length; i++) {
        cvv[i].addEventListener('input', () => {
            toggleSummaryContainer(i);
        });
    }

    for (let i = 0; i < expiration_date.length; i++) {
        expiration_date[i].addEventListener('input', () => {
            toggleSummaryContainer(i);
        });
    }
});




document.addEventListener('DOMContentLoaded', function() {
    let currency_selectContainers = document.getElementsByClassName('currency_select');
    
    let wide_currency = document.getElementById('wide_currency');
    let mobile_currency = document.getElementById('mobile_currency');
    let mobile_selected_currency = document.getElementById('mobile_selected_currency');
    let wide_selected_currency = document.getElementById('wide_selected_currency');

    function summaryEval() {
        mobile_selected_currency.innerHTML = mobile_currency.value; // Use textContent for safer text retrieval
        wide_selected_currency.innerHTML = wide_currency.value;// Use textContent for safer text retrieval
    }

    // Convert HTMLCollection to an Array and iterate over it
    for (let i = 0; i < currency_selectContainers.length; i++) {
        currency_selectContainers[i].addEventListener('change', () => {
            summaryEval();
        });
    }
});



document.addEventListener('DOMContentLoaded', function() {
    let nairaSwitches = document.getElementsByClassName('nairaSwitch');
    let dollarSwitches = document.getElementsByClassName('dollarSwitch');

    let fundOns = document.getElementsByClassName('fundOn');
    let fundToggleNones = document.getElementsByClassName('fundToggleNone');

    function switchToNGN() {
        for (let fundToggleNone of fundToggleNones) {
            fundToggleNone.style.display = 'flex';
        } 

        for (let fundOn of fundOns) {
            fundOn.style.display = 'none';
        }

        for (let dollarSwitch of dollarSwitches) {
            dollarSwitch.style.display = 'flex'; 
        }

        for (let nairaSwitch of nairaSwitches) {
            nairaSwitch.style.display = 'none';
        }
    }

    function switchToUSD() {
        for (let fundOn of fundOns) {
            fundOn.style.display = 'flex';
        }

        for (let fundToggleNone of fundToggleNones) {
            fundToggleNone.style.display = 'none';
        }

        for (let nairaSwitch of nairaSwitches) {
            nairaSwitch.style.display = 'flex';
        }

        for (let dollarSwitch of dollarSwitches) {
            dollarSwitch.style.display = 'none';
        }
    }

    for (let nairaSwitch of nairaSwitches) {
        nairaSwitch.addEventListener('click', () =>  {
            switchToNGN();
        })
    }

    for (let dollarSwitch of dollarSwitches) {
        dollarSwitch.addEventListener('click', () =>  {
            switchToUSD();
        })
    }

    // Initially, you can call switchToNGN or switchToUSD based on your default currency 63603b449900637af27844b4c892b159-72e4a3d5-d4427795
    switchToUSD(); // or switchToUSD(); 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
});


 // Check if the JSON response is present on the screen
const checkForForbiddenMessage = () => {
    const preElements = document.getElementsByTagName('pre');
    for (let i = 0; i < preElements.length; i++) {
        const preElement = preElements[i];
        if (preElement) {
            // Redirect to the login page
            window.location.href = '/login';
            break;
        }
    }
};


// Optionally, you can set up a timer to periodically check for the message
setInterval(checkForForbiddenMessage, 1000); // Check every second





document.addEventListener('DOMContentLoaded', function() {
    let withdrawAmount = document.getElementsByClassName('withdrawAmount');
    let amount_error_msg = document.getElementsByClassName('amount_error_msg');
    let choose_withdrawal_method = document.getElementsByClassName('choose_withdrawal_method');

    let wide_currency = document.getElementById('wide_currency');
    let mobile_currency = document.getElementById('mobile_currency');

    let mobile_usd_bal = parseFloat(document.getElementById('mobile_usd_bal').textContent);
    let mobile_ngn_bal = parseFloat(document.getElementById('mobile_ngn_bal').textContent);
    let wide_usd_bal = parseFloat(document.getElementById('wide_usd_bal').textContent);
    let wide_ngn_bal = parseFloat(document.getElementById('wide_ngn_bal').textContent);

    let mobile_selected_currency = document.getElementById('mobile_selected_currency');
    let wide_selected_currency = document.getElementById('wide_selected_currency');

    let mobile_funded_amount = document.getElementById('mobile_funded_amount');
    let wide_funded_amount = document.getElementById('wide_funded_amount');

    function toggle(i) {
        let amount = withdrawAmount[i].value.trim(); // Get the input value and trim whitespace
        let amountNumber = parseFloat(amount); // Convert input value to a number

        mobile_selected_currency.innerHTML = mobile_currency.value;
        wide_selected_currency.innerHTML = wide_currency.value;

        // Check for empty input
        if (amount === '') {
            amount_error_msg[i].style.display = 'flex'; // Show error message for empty input
            amount_error_msg[i].textContent = 'Please enter an amount.'; // Set error message text 
            choose_withdrawal_method[i].style.display = 'none'; // Hide withdrawal method
            return; // Exit the function early
        }

        // Convert balances to float for comparison based on selected currency
        let mobile_balance = mobile_currency.value === 'NGN' ? mobile_ngn_bal : mobile_usd_bal;
        let wide_balance = wide_currency.value === 'NGN' ? wide_ngn_bal : wide_usd_bal;

        // Check for NGN currency
        if (mobile_currency.value === 'NGN' || wide_currency.value === 'NGN') {
            if (amountNumber > parseFloat(mobile_balance) || amountNumber > parseFloat(wide_balance)) {
                amount_error_msg[i].style.display = 'flex'; // Show error message
                amount_error_msg[i].textContent = 'Insufficient balance.'; // Set error message text
                choose_withdrawal_method[i].style.display = 'none'; // Hide withdrawal method
            } else {
                amount_error_msg[i].style.display = 'none'; // Hide error message
                choose_withdrawal_method[i].style.display = 'flex'; // Show withdrawal method
            }
        } 
        // Check for USD currency
        else if (mobile_currency.value === 'USD' || wide_currency.value === 'USD') {
            if (amountNumber > parseFloat(mobile_balance) || amountNumber > parseFloat(wide_balance)) {
                amount_error_msg[i].style.display = 'flex'; // Show error message
                amount_error_msg[i].textContent = 'Insufficient balance.'; // Set error message text
                choose_withdrawal_method[i].style.display = 'none'; // Hide withdrawal method
            } else {
                amount_error_msg[i].style.display = 'none'; // Hide error message
                choose_withdrawal_method[i].style.display = 'flex'; // Show withdrawal method
            }
        }
    }

    for (let i = 0; i < withdrawAmount.length; i++) {
        withdrawAmount[i].addEventListener('input', function() {
            toggle(i); // Pass the index to the toggle function

            mobile_funded_amount.innerHTML = withdrawAmount[i].value;
            wide_funded_amount.innerHTML = withdrawAmount[i].value;
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    let account_number_val = document.getElementsByClassName('account_number_val');
    let bank_name_val = document.getElementsByClassName('bank_name_val');
    let account_holder_name = document.getElementsByClassName('account_holder_name');
    let transaction_summary_container = document.getElementsByClassName('transaction_summary_container');


    function toggle(i)  {
        // Check if the values are not empty
        if (account_number_val[i].value.trim() !== '' && bank_name_val[i].value.trim() !== '') {
            // Prepare the URL with query parameters
            const url = `/api/auth/verify-bank?accountNumber=${encodeURIComponent(account_number_val[i].value)}&bankName=${encodeURIComponent(bank_name_val[i].value)}`;

            fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Set the inner HTML for the specific account holder name element
                account_holder_name[i].innerHTML = data.accountHolderName || 'Account holder not found';

                if(account_holder_name[i].innerHTML !== 'Account holder not found')  {
                    transaction_summary_container[i].style.display = 'flex';
                } else  {
                    transaction_summary_container[i].style.display = 'none';
                }
            })
            .catch(error => console.error('Error:', error));
        }
    }

    for (let i = 0; i < account_number_val.length; i++) {
        account_number_val[i].addEventListener('input',  () =>  {
            toggle(i);
        })
    };

    for (let i = 0; i < bank_name_val.length; i++) {
        bank_name_val[i].addEventListener('change',  () =>  {
            toggle(i);
        })
    }
});



