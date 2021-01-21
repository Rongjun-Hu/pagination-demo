<template>
  <div class="awesome-table">
    <table>
      <thead>
        <tr>
          <th v-for="(obj, index) in config" :key="index">{{ obj.title }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in theData" :key="index">
          <td v-for="(obj, index) in config" :key="index">
            <span v-if="obj.type === 'text'">{{ row[obj.key] }}</span>
            <span v-if="obj.type === 'date'">{{
              new Date(row[obj.key]).toLocaleDateString()
            }}</span>
            <figure v-if="obj.type === 'image'">
              <img :src="row[obj.key]" height="60px" />
            </figure>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ["theData", "config"],
};
</script>

<style scoped>
.awesome-table {
  border: 1px solid #999;
  border-radius: 4px;
  overflow: auto;
}

table {
  border-collapse: collapse;
  color: #333;
  width: 100.1%;
}

th {
  background: #f1f1f1;
  padding: 10px 5px;
  text-align: left;
  position: sticky;
  top: 0;
  border-bottom: 1px solid #999;
}

td {
  padding: 5px 5px;
  text-align: left;
}

figure {
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
}
</style>
