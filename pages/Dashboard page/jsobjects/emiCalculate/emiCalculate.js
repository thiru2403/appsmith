export default {
			calEmi : () =>{
			const rate = Form1Copy2Copy.data.financeRate / 12 / 100;
			const emiAmount = Form1Copy2Copy.data.financeAmount * rate *  (1 + rate) *  Form1Copy2Copy.data.Input3 / ((1 + rate) *  Form1Copy2Copy.data.Input3 - 1);
				return emiAmount.toFixed();
			
}
}