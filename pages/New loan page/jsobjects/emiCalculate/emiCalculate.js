export default {
			calEmi : () =>{
			const rate = loandetailsForm.data.financeRate / 12 / 100;
			const emiAmount = loandetailsForm.data.financeAmount * rate *  (1 + rate) * loandetailsForm.data.Input3 / ((1 + rate) * loandetailsForm.data.Input3 - 1);
				return emiAmount.toFixed();
			
}
}