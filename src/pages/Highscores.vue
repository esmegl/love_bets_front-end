<template>
	<q-page>
		<div class="q-pa-md">
      <q-table
      class="high-scores-table"
      title="High Scores"
      :data="highscores"
      :columns="highscoresColumns"
      row-key="name"
      :pagination="{ rowsPerPage: 10 }"
      flat
      bordered
      >
	      <template v-slot:body-cell-data="props">
	        <q-td :props="props">
	          <div v-html="props.value"></div>
	        </q-td>
	      </template>
      </q-table>
    </div>
	</q-page>
</template>

<script>
	import moment from "moment";

	const highscoresColumns = [
	  {
	    name: "block",
	    required: true,
	    label: "Block",
	    align: "left",
	    field: row => row.block_num,
	    sortable: false
	  },
	  {
	    name: "timestamp",
	    required: true,
	    label: "Date",
	    align: "left",
	    field: row => moment.utc(row.timestamp).format("dddd, MMMM Do YYYY, h:mm:ss a"),
	    sortable: false
	  },
	  // {
	  //   name: "bettors",
	  //   required: true,
	  //   label: "Bettors",
	  //   align: "left",
	  //   field: ,
	  //   sortable: false
	  // },
	  // {
	  //   name: "minister",
	  //   required: true,
	  //   label: "Minister",
	  //   align: "left",
	  //   field: ,
	  //   sortable: false
	  // },
	  // {
	  //   name: "witnesses",
	  //   required: true,
	  //   label: "Witnesses",
	  //   align: "left",
	  //   field: ,
	  //   sortable: false
	  // },
	  // {
	  //   name: "total_amount",
	  //   required: true,
	  //   label: "Total Amount",
	  //   align: "left",
	  //   field: ,
	  //   sortable: false
	  // },
	];

	export default {
  data() {
    return {
      highscores: [{}],
      highscoresColumns: highscoresColumns
    };
  },
}
</script>