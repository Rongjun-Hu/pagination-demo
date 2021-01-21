<template>
  <section>
    <p class="pagination-container">
      <i class="fas fa-angle-double-left" @click="changePage(0)"></i>
      <i class="fas fa-angle-left" @click="changePage(-1)"></i>
      <span class="inner-pagination">Page {{ page }} of {{ pages }}</span>
      <i class="fas fa-angle-right" @click="changePage(1)"></i>
      <i class="fas fa-angle-double-right" @click="changePage(pages)"></i>
    </p>
  </section>
</template>

<script>
export default {
  props: ["totalRecords", "perPageOptions"],
  data: function() {
    return {
      page: 1,
      perPage: this.perPageOptions[0],
    };
  },

  computed: {
    // how many pages we have, based on the totalRecords
    pages() {
      const reminder = this.totalRecords % this.perPage;

      if (reminder > 0) {
        return Math.floor(this.totalRecords / this.perPage) + 1;
      } else {
        return this.totalRecords / this.perPage;
      }
    },
  },

  methods: {
    changePage(val) {
      switch (val) {
        case 0:
          return (this.page = 1);

        case -1:
          return (this.page = this.page > 1 ? this.page - 1 : this.page);

        case 1:
          return (this.page =
            this.page < this.pages ? this.page + 1 : this.page);

        case this.pages:
          return (this.page = this.pages);
      }

      this.$emit("input", { page: this.page, perPage: this.perPage });
    },
  },
};
</script>

<style scoped>
.pagination-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.fas {
  width: 30px;
  text-align: center;
  cursor: pointer;
}
</style>
