export default {

	manageCapitalData: () => {
		return get_Aggregate_ManageCapital.data.map(item => {
			console.log(item)
			return item.PartnerDetails.map(item1 => {
				console.log(item1.name);
				return item1.name;
			})
		})
	}
}