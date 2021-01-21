<template>
  <div id="app">
    <nav class="nav" />
    <main>
      <Pagination
        v-if="tableData"
        :totalRecords="tableData.length"
        :perPageOptions="perPageOptions"
        v-model="pagination"
      />
      <Table
        v-if="tableData"
        :theData="computedTableData"
        :config="config"
        :style="{ height: '600px' }"
      />
    </main>
  </div>
</template>

<script>
import Table from "./components/Table";
import Pagination from "./components/Pagination";

const perPageOptions = [20, 50, 100];

export default {
  components: {
    Table,
    Pagination,
  },
  data: function() {
    return {
      perPageOptions,
      tableData: undefined,
      pagination: { page: 1, perPage: perPageOptions[0] },
      config: [
        {
          key: "avatar",
          title: "Avatar",
          type: "image",
        },
        {
          key: "name",
          title: "Name",
          type: "text",
        },
        {
          key: "city",
          title: "City",
          type: "text",
        },
        {
          key: "companyName",
          title: "Company",
          type: "text",
        },
        {
          key: "createdAt",
          title: "Signup Date",
          type: "date",
        },
      ],
    };
  },

  computed: {
    computedTableData() {
      if (!this.tableData) return [];
      else {
        const firstIndex = (this.pagination.page - 1) * this.pagination.perPage;
        const lastIndex = this.pagination.page * this.pagination.perPage;

        return this.tableData.slice(firstIndex, lastIndex);
      }
    },
  },

  // lify cycle hooks
  mounted() {
    this.$axios
      .get("https://6008d76a0a54690017fc25d7.mockapi.io/users")
      .then(({ data }) => {
        this.tableData = data;
      });
  },
};
</script>

<style>
body {
  margin: 0;
}

main {
  margin: 20px;
}

.nav {
  height: 60px;
  background: #222;
}
</style>
