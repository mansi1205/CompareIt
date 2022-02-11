<template>
  <div>
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <b><a class="navbar-brand">CompatreIt</a></b>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "HeaderComp",
  props: ["header"],
};
</script>
<style>
.nav-search {
  float: right;
}
.nav {
  padding-left: 10px;
}
</style>
