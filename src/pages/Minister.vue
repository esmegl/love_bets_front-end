<template>
	<q-page class="q-pa-md">

		<q-table
		title="Weddings pending approval"
		:rows="rows"
		:columns="columns"
		row-key="name"
		no-data-label="You don't have weddings to approve yet"
	    />

		<div class="row">
			<q-btn   
			color="blue" 
			text-color="white"
			icon-right="check_circle"
			label="Approve selected weddings" 
			@click="approveWedding()"
			>
			</q-btn>
		</div>	


		<div class="row" style="padding-top: 50px">
			<div class="col-4">
				<q-btn
				to="/start_wedding"
				color="blue"
				text-color="white"
				label="New wedding"
				icon-right="add_circle"
				/>
			</div>	
		</div>

	</q-page>
</template>

<script>
	const columns = [
	  	{
		    name: 'wedding_name',
		    required: true,
		    label: 'Wedding name',
		    align: 'left',
		    field: row => row.name,
		    format: val => `${val}`,
	  	},
		{ 
			name: 'bettors', 
			align: 'left', 
			label: 'Bettors', 
			field: 'bettors', 
		},
		{ 
			name: 'date', 
			align: 'left', 
			label: 'Date of marriage', 
			field: 'date' 
		},
		{ 
			name: 'total_amount', 
			align: 'left', 
			label: 'Total amount', 
			field: 'total_amount' 
		},
		{ 
			name: 'witnesses', 
			align: 'left', 
			label: 'Witnesses', 
			field: 'witnesses' 
		},
	]
	const rows = [
		{
			wedding_name: "shfhsuwasnfd",
			bettors: "ewsnvuretsdf",
			date: "2022-07-07",
			total_amount: "1000",
			witnesses: "fjewsnxatsfh"
		}
	]

</script>

<style>
	.center {
	display: flex;
	justify-content: center;
	align-items: center; 
	}
</style>