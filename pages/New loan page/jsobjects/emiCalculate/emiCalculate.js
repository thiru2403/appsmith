export default {
			calEmi : () =>{
				let emi = (loandetailsForm.data.financeAmount * (loandetailsForm.data.financeRate / 100) ) / 12;
				emi = ((loandetailsForm.data.financeAmount + (emi * loandetailsForm.data.Input3))/loandetailsForm.data.Input3);
				return Math.round(emi);

			// const emiAmount = loandetailsForm.data.financeAmount * rate *  (1 + rate) * loandetailsForm.data.Input3 / ((1 + rate) * loandetailsForm.data.Input3 - 1);
				// return emiAmount.toFixed();
			
}
}