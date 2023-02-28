export default {
			calEmi : () =>{
				let emi = (Form1Copy2Copy.data.financeAmountCopy * (Form1Copy2Copy.data.financeRateCopy / 100) ) / 12;
				emi = ((Form1Copy2Copy.data.financeAmountCopy + (emi * Form1Copy2Copy.data.Input3Copy2Copy))/Form1Copy2Copy.data.Input3Copy2Copy);
				return Math.round(emi);

			// const emiAmount = loandetailsForm.data.financeAmount * rate *  (1 + rate) * loandetailsForm.data.Input3 / ((1 + rate) * loandetailsForm.data.Input3 - 1);
				// return emiAmount.toFixed();
			
}
}